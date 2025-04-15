import React from "react";
import { Button } from "../ui/button";
import { FaHeart } from "react-icons/fa";
import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

type FavoriteToggleButtonProps = {
	productId: string;
};
export default async function FavoriteToggleButton({
	productId,
}: FavoriteToggleButtonProps) {
	const { userId } = auth();
	if (!userId) return <CardSignInButton />;
	const favoriteId = await fetchFavoriteId(productId);
	return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
}
