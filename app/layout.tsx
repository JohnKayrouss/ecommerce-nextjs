import Providers from "./Providers";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import Container from "@/components/global/Container";
import Navbar from "@/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata: Metadata = {
	title: "Next Storefront",
	description: "A nifty store built with Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en' suppressHydrationWarning={true}>
				<body className={inter.className} suppressHydrationWarning={true}>
					<Providers>
						<Navbar />
						<Container className='py-20'>{children}</Container>
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}
