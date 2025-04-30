/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
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
