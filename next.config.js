/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    env:{
        MONGO_URI:"mongodb+srv://FAKE:FAKE@cluster0.hakfovz.mongodb.net/?retryWrites=true&w=majority",
        GITHUB_ID:"FAKE_ID",
        GITHUB_SECRET:"FAKE_PASS",
        NEXTAUTH_URL:"http://see.proj:3000",
        GOOGLE_CLIENT_ID:"FAKE_ID",
        GOOGLE_CLIENT_SECRET:"FAKE_PASS"
    }
}

module.exports = nextConfig
