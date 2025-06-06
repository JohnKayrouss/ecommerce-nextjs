"use server";
import { currentUser } from "@clerk/nextjs/server";
import db from "./db";
import { redirect } from "next/navigation";
import { imageSchema, productSchema, validateWithZodSchema } from "./schemas";
import { deleteImage, uploadImage } from "./supabase";
import { revalidatePath } from "next/cache";

const getAuthUser = async () => {
	const user = await currentUser();
	if (!user) redirect("/");
	return user;
};

const getAdminUser = async () => {
	const user = await getAuthUser();
	// if (user.id !== process.env.ADMIN_USER_ID) redirect("/");
	return user;
};

const renderError = (error: unknown): { message: string } => {
	return {
		message: error instanceof Error ? error.message : "Error creating product",
	};
};

export const fetchFeaturedProducts = async () => {
	const featuredProducts = await db.product.findMany({
		where: {
			featured: true,
		},
	});
	return featuredProducts;
};

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
	const products = await db.product.findMany({
		where: {
			OR: [
				{ name: { contains: search, mode: "insensitive" } },
				{ company: { contains: search, mode: "insensitive" } },
			],
		},
		orderBy: {
			createdAt: "desc",
		},
	});
	return products;
};
export const getProductsNumber = async () => {
	return await db.product.count();
};

export const fetchSingleProduct = async (productId: string) => {
	const product = await db.product.findUnique({
		where: {
			id: productId,
		},
	});
	if (!product) {
		redirect("/products");
	}
	return product;
};

export const createProductAction = async (
	prevState: any,
	formData: FormData
): Promise<{ message: string }> => {
	const user = await getAuthUser();
	try {
		const img = formData.get("image") as File;
		const rawData = Object.fromEntries(formData);

		const validatedFields = validateWithZodSchema(productSchema, rawData);
		const validatedImage = validateWithZodSchema(imageSchema, { image: img });
		const fullPath = await uploadImage(validatedImage.image);
		await db.product.create({
			data: {
				...validatedFields,
				image: fullPath,
				clerkId: user.id,
			},
		});
	} catch (error) {
		return renderError(error);
	}
	redirect("/admin/products");
};

export const fetchAdminProducts = async () => {
	await getAdminUser();
	const products = await db.product.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});
	return products;
};

export const deleteProductAction = async (prevState: { productId: string }) => {
	const { productId } = prevState;
	await getAdminUser();
	try {
		const product = await db.product.delete({
			where: {
				id: productId,
			},
		});

		await deleteImage(product.image);
		revalidatePath(`/admin/products`);
		return { message: "Product deleted successfully" };
	} catch (error) {
		return renderError(error);
	}
};

export const fetchAdminProductDetails = async (productId: string) => {
	await getAdminUser();
	const product = await db.product.findUnique({
		where: {
			id: productId,
		},
	});
	if (!product) {
		redirect(`/admin/products`);
	}
	return product;
};

export const updateProductAction = async (
	prevState: any,
	formData: FormData
) => {
	await getAdminUser();
	try {
		const productId = formData.get("id") as string;
		const rawData = Object.fromEntries(formData);
		const validatedFields = validateWithZodSchema(productSchema, rawData);
		await db.product.update({
			where: {
				id: productId,
			},
			data: {
				...validatedFields,
			},
		});
		revalidatePath(`/admin/products/${productId}/edit`);
		return { message: "Product updated successfully" };
	} catch (error) {
		return renderError(error);
	}
};
export const updateProductImageAction = async (
	prevState: any,
	formData: FormData
) => {
	await getAdminUser();
	try {
		const image = formData.get("image") as File;
		const productId = formData.get("id") as string;
		const oldImageUrl = formData.get("url") as string;
		const validatedFile = validateWithZodSchema(imageSchema, { image });
		const fullPath = await uploadImage(validatedFile.image);
		await deleteImage(oldImageUrl);
		await db.product.update({
			where: {
				id: productId,
			},
			data: {
				image: fullPath,
			},
		});
		revalidatePath(`/admin/products/${productId}/edit`);
		return { message: "Product image updated successfully" };
	} catch (error) {
		return renderError(error);
	}
};
export const fetchFavoriteId = async (productId: string) => {
	const user = await getAuthUser();
	const favorite = await db.favorite.findFirst({
		where: {
			productId,
			clerkId: user.id,
		},
		select: {
			id: true,
		},
	});
	return favorite?.id || null;
};
export const toggleFavoriteAction = async (prevState: {
	productId: string;
	favoriteId: string | null;
	pathname: string;
}) => {
	const user = await getAuthUser();
	const { productId, favoriteId, pathname } = prevState;
	try {
		if (favoriteId) {
			await db.favorite.delete({
				where: {
					id: favoriteId,
				},
			});
		} else {
			const favorite = await db.favorite.create({
				data: {
					productId,
					clerkId: user.id,
				},
			});
		}
		revalidatePath(pathname);
		return {
			message: favoriteId
				? "Favorite removed successfully"
				: "Favorite added successfully",
		};
	} catch (error) {
		return renderError(error);
	}
};

export const fetchUserFavorite = async () => {
	const user = await getAuthUser();
	const favorites = await db.favorite.findMany({
		where: {
			clerkId: user.id,
		},
		include: {
			product: true,
		},
	});
	return favorites;
};
