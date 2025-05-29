/** @type {import('next').NextConfig} */
const nextConfig = {
	devIndicators: false,
	eslint: {
		ignoreDuringBuilds: true,
	},
	output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
	experimental: { forceSwcTransforms: true },
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
			},
			{
				protocol: "https",
				hostname: "ibbdetibjuzwrprbiayt.supabase.co",
			},
			{
				protocol: "https",
				hostname: "img.clerk.com",
			},
			{
				protocol: "https",
				hostname: "fhgxisobzlkkwjsitwtf.supabase.co",
			},
		],
	},
};

export default nextConfig;
