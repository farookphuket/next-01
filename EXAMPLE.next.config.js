/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    MONGO_URI:"",
    GITHUB_ID:"",
    GITHUB_SECRET:"",
    GOOGLE_CLIENT_ID:"",
    GOOGLE_CLIENT_SECRET:"",
    JWT_SECRET:""
  }

}

module.exports = nextConfig
