type NavLink = {
	href: string;
	label: string;
};

export const links: NavLink[] = [
	{ href: "/", label: "home" },
	{ href: "/about", label: "about" },
	{ href: "/products", label: "products" },
	{ href: "/favorites", label: "favorites" },

	{ href: "/admin/products", label: "dashboard" },
];

export const adminLinks: NavLink[] = [
	{ href: "/admin/products", label: "my products" },
	{ href: "/admin/products/create", label: "create product" },
];
