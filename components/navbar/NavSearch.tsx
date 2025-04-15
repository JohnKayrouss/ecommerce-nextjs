"use client";
import { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
export default function NavSearch() {
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const searchURL = searchParams.get("search")?.toString() || "";
	const [search, setSearch] = useState(searchURL);
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
		handleSearch(e.target.value);
	};
	const handleSearch = useDebouncedCallback((value: string) => {
		const params = new URLSearchParams(searchParams);
		if (value) {
			params.set("search", value);
		} else {
			params.delete("search");
		}
		replace(`/products?${params.toString()}`);
	}, 300);

	useEffect(() => {
		if (!searchParams.get("search")) {
			setSearch("");
		}
	}, [searchParams.get("search")]);
	return (
		<>
			<Input
				type='search'
				placeholder='search products...'
				className='max-w-xs  dark:bg-muted '
				value={search}
				onChange={handleInputChange}
			/>
		</>
	);
}
