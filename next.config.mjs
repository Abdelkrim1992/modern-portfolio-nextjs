/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		config.resolve.alias = {
			...(config.resolve.alias || {}),
			// three-globe tries to import 'three/webgpu' in some environments; alias it to a noop
			"three/webgpu": false,
		};
		return config;
	},
};

export default nextConfig;
