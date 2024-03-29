/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
   
    images: {
        domains: ["png.pngtree.com","plus.unsplash.com","media.istockphoto.com","www.freepik.com","images.unsplash.com","www.beyoung.in","t4.ftcdn.net","t3.ftcdn.net","ik.imagekit.io","scontent.fslv1-4.fna.fbcdn.net","scontent.fbom3-1.fna.fbcdn.net","scontent.fbom3-2.fna.fbcdn.net","instagram.fnag1-4.fna.fbcdn.net","as1.ftcdn.net","images.remotePatterns","assets-in.bmscdn.com",
        "assetscdn1.paytm.com","encrypted-tbn0.gstatic.com","assets-in.bmscdn.com",
        "lh3.googleusercontent.com","lh3.googleusercontent.com"
        ]
    },
    webpack(config) {
        config.experiments = {
          ...config.experiments,
          topLevelAwait: true,
        }
        return config
      },
};

export default nextConfig;
