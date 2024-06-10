/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.escuelajs.co'
            },
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com'
            }
        ],
    },
};

export default nextConfig;
