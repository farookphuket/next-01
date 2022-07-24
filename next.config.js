/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    env:{
        MONGO_URI:"mongodb+srv://farook:Farook@cluster0.hakfovz.mongodb.net/?retryWrites=true&w=majority",
        GITHUB_ID:"5e004ad95ae8a10a8f93",
        GITHUB_SECRET:"7e33e79a3e7d1ace60ccfa1441836e3f1f884cf7",
        GOOGLE_CLIENT_ID:"250943952533-r0frvqehp0nuav0ng4omape6tptcp0p2.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET:"NF8ZoNYOgsfBhtc5qBZt6hZi",
        JWT_SECRET:"htZBYWaf6Tb9M5BLqAa0iwWCNaASctMCZhL1edYc2aA=",
        NEXTAUTH_URL:process.env.NEXTAUTH_URL
    }

}

module.exports = nextConfig
