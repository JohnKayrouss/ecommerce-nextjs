import ProductsContainer from "@/components/products/ProductsContainer";
import React from "react";

type ProductsPageProps = {
	searchParams: {
		layout?: string;
		search?: string;
	};
};
export default function ProductsPage({ searchParams }: ProductsPageProps) {
	const layout = searchParams.layout || "grid";
	const search = searchParams.search || "";
	return <ProductsContainer layout={layout} search={search} />;
}
