import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorite } from "@/utils/actions";

export default async function FavoritesPage() {
	const favorites = await fetchUserFavorite();
	if (favorites.length === 0) {
		<SectionTitle text='you have no favorites!' />;
	}
	return (
		<div>
			<SectionTitle text='favorites' />
			<ProductsGrid products={favorites.map((el) => el.product)} />
		</div>
	);
}
