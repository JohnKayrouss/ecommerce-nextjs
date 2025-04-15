import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
export default async function CartButton() {
	//temporarily hard coded
	const numItemsInCart = 9;
	return (
		<Button
			asChild
			variant='outline'
			size='icon'
			className='flex justify-center items-center relative'>
			<Link href='/cart'>
				<LuShoppingCart />
				<span className='absolute -top-3 -right-3 bg-primary text-white rounded-full flex items-center justify-center text-sm w-6 h-6'>
					{numItemsInCart}
				</span>
			</Link>
		</Button>
	);
}
