import { Separator } from "@/components/ui/separator";
import React from "react";

export default function SectionTitle({ text }: { text: string }) {
	return (
		<div>
			<h2 className='text-3xl font-medium tracking-wider capitalize mb-4'>
				{text}
			</h2>
			<Separator />
		</div>
	);
}
