"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";
import Link from "next/link";

export default function SignoutLink() {
	const { toast } = useToast();
	const handleLogout = () => {
		toast({
			description: "Logout Successful!",
		});
	};
	return (
		<SignOutButton>
			<Link href='/' className='w-full text-left' onClick={handleLogout}>
				logout
			</Link>
		</SignOutButton>
	);
}
