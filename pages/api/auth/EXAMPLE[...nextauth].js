import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import nextConfig from '../../../next.config'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: nextConfig.env.GITHUB_ID,
      clientSecret: nextConfig.env.GITHUB_SECRET,
    }),
    GoogleProvider({
        clientId: nextConfig.env.GOOGLE_CLIENT_ID,
        clientSecret: nextConfig.env.GOOGLE_CLIENT_SECRET
      })
    // ...add more providers here
  ],
    secret:nextConfig.env.JWT_SECRET
})
