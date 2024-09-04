import { FirestoreAdapter } from "@auth/firebase-adapter";
import GitHubProvider from "next-auth/providers/github";
import {cert} from "firebase-admin/app";
import GoogleProvider from 'next-auth/providers/google'
import { signIn } from "next-auth/react";

export const authOptions ={
providers: [
    GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
],
adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
      clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  }),
pages: {
    signIn :'/signin'
}
}
