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
        nextUrl.pathname.includes('/edit') ||
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

  providers: [],
} satisfies NextAuthConfig;