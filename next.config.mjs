/** @type {import("next").NextConfig} */
const nextConfig = {
	compiler: {
		removeConsole: process.env.NODE_ENV === "production" ? {
			exclude: [ "error", "info" ] 
		} : false,
		styledComponents: true
	},
	images: {
		domains: [
			"avatars.githubusercontent.com",
			"images.pexels.com",
			"fastly.picsum.photos",
			"pbs.twimg.com"
		]
	},
	reactStrictMode   : true,
	transpilePackages : [
		"three"
	]
};

export default nextConfig;
