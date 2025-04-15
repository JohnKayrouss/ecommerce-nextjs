import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts, getProductsNumber } from "@/utils/actions";
import Link from "next/link";

type ProductsContainerProps = {
	layout: string;
	search: string;
};
export default async function ProductsContainer({
	layout,
	search,
}: ProductsContainerProps) {
	const products = await fetchAllProducts({ search });
	const productsTotal = await getProductsNumber();
	const searchTerm = search ? `&search=${search}` : "";

	return (
		<>
			<section>
				<div className='flex justify-between items-center'>
					<h4 className='font-medium text-lg'>
						{productsTotal} Product{productsTotal > 1 ? "s" : ""}
					</h4>
					<div className='flex gap-x-4'>
						<Button
							variant={layout === "grid" ? "default" : "ghost"}
							size={"icon"}
							asChild>
							<Link href={`/products?layout=grid${searchTerm}`}>
								<LuLayoutGrid />
							</Link>
						</Button>
						<Button
							variant={layout === "list" ? "default" : "ghost"}
							size={"icon"}
							asChild>
							<Link href={`/products?layout=list${searchTerm}`}>
								<LuList />
							</Link>
						</Button>
					</div>
				</div>
				<Separator className='mt-4' />
			</section>
			<div>
				{productsTotal === 0 ? (
					<h5 className='text-2xl mt-16'>No products found</h5>
				) : layout === "grid" ? (
					<ProductsGrid products={products} />
				) : (
					<ProductsList products={products} />
				)}
			</div>
		</>
	);
}
