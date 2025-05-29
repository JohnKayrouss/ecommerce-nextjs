import React from "react";
import HeroCarousel from "./HeroCarousel";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
	return (
		<section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
			<div>
				<h1 className='max-w-2xl font-bold text-3xl tracking-tight sm:text-5xl'>
					Sign in to use <span className='text-primary'>Dashboard</span> and
					test <span className='text-primary'>CRUD</span> operations
				</h1>
				<p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
					At Storify, we curate more than just products—we curate experiences.
					From everyday essentials to standout pieces in fashion, tech, and
					lifestyle, everything is selected for quality, purpose, and style.
					Find what speaks to you and shop with confidence.
				</p>
				<Button asChild size='lg' className='mt-10'>
					<Link href='/products'>Our Products</Link>
				</Button>
			</div>
			<HeroCarousel />
		</section>
	);
}
