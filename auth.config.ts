// auth.config.ts  (project root)
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      const isProtected =
        nextUrl.pathname.startsWith('/recipes/new') ||
        /\/recipes\/[^/]+\/edit$/.test(nextUrl.pathname) ||
        nextUrl.pathname.startsWith('/profile');

      if (isProtected) {
        return isLoggedIn;
      }

      if (isLoggedIn && nextUrl.pathname === '/login') {
        return Response.redirect(new URL('/recipes', nextUrl));
      }

      return true;
    },
  },
  providers: [], // providers are added in auth.ts
} satisfies NextAuthConfig;