import React from "react";
import { Button } from "../ui/button";

interface IAddToCart {
	productId: string;
}
export default function AddToCart({ productId }: IAddToCart) {
	return (
		<Button className='capitalize mt-8' size={"lg"}>
			add to cart
		</Button>
	);
}
