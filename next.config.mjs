/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static-libria.weekstorm.one',
                port: '',
                pathname: '/storage/releases/posters/**',
            },
        ],
    },
};

export default nextConfig;
