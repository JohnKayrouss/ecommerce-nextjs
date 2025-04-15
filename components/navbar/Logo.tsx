import React from "react";
import { VscCode } from "react-icons/vsc";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Logo() {
	return (
		<Button asChild size='icon' variant='default'>
			<Link href='/'>
				<VscCode className='w-6 h-6' />
			</Link>
		</Button>
	);
}
