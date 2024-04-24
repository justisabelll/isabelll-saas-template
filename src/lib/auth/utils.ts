import { auth, useAuth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export type AuthSession = {
  session: {
    user: {
      id: string;
      name: string;
      email: string;
    };
  } | null;
};

export const getUserAuth = async () => {
  const { userId, sessionClaims } = auth();
  if (!userId) {
    return {
      session: {
        user: {
          id: userId,
          name: `${sessionClaims?.firstName} ${sessionClaims?.lastName}`,
          email: sessionClaims?.email,
        },
      },
    } as AuthSession;
  } else {
    return { session: null };
  }
};

export const checkAuth = async () => {
  const { userId } = auth();
  if (!userId) redirect('/sign-in');
};

export const checkAuthClient = () => {
  const { userId } = useAuth();

  if (!userId) return false;
  else return true;
};
