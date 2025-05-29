export default function AboutPage() {
	return (
		<section>
			<h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl'>
				We love
				<span className='bg-primary py-2 px-4 rounded-lg tracking-widest text-white'>
					Storify
				</span>
			</h1>
			<p className='mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground'>
				At Storify, we believe every product has a story—and so do you. Our
				mission is to connect you with high-quality, thoughtfully curated items
				that blend style, function, and value. Whether you're looking for the
				latest tech, timeless fashion, or unique home essentials, we bring
				together trusted brands and emerging creators in one seamless shopping
				experience. With a focus on reliability, transparency, and customer
				satisfaction, Storify is more than just a store—it's where your story
				begins.
			</p>
		</section>
	);
}
