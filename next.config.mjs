/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		config.resolve.alias = {
			...(config.resolve.alias || {}),
			// three-globe tries to import 'three/webgpu' in some environments; alias it to a noop
			"three/webgpu": false,
			"three/addons/": "/node_modules/three/examples/jsm/",
		};
		
		// Add a fallback for three-globe's imports
		config.resolve.fallback = {
			...config.resolve.fallback,
			fs: false,
			path: false,
			os: false,
		};
		
		return config;
	},
	// Transpile three-globe module
	transpilePackages: ['three', 'three-globe'],
};

export default nextConfig;
