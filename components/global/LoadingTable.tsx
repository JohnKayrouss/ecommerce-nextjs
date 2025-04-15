import React from "react";
import { Skeleton } from "../ui/skeleton";
export default function LoadingTable({ rows = 5 }: { rows?: number }) {
	const tableRows = Array(rows)
		.fill(0)
		.map((_, index) => {
			return (
				<div key={crypto.randomUUID()} className='mb-4'>
					<Skeleton className='w-full h-8 rounded' />
				</div>
			);
		});
	return <>{tableRows}</>;
}
