/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: false, // Or set it to 'loose' for partial support
    },
};

export default nextConfig;
