/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "maribellevue.wpengine.com",
      "i.ibb.co",
      "gw.alipayobjects.com",
      "www.centralpark.in", // Ensure "www.centralpark.in" is used instead of "centralpark.in"
    ],
  },
};

export default nextConfig;
