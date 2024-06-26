'use server';
import { getSession } from '@/services/auth';
import Unauthorized from './errors/unauthorized';

export default async function ProtectedRoute({
  children,
  authorizedRoles,
}: {
  children: React.ReactNode;
  authorizedRoles: string[] | undefined;
}) {
  if (!authorizedRoles || authorizedRoles?.length === 0) return <>{children}</>;

  const session = await getSession();

  return (
    <>
      {session?.user.roles.some((role: any) =>
        authorizedRoles.some(
          authorizedRole => authorizedRole == role.role.name,
        ),
      ) ? (
        children
      ) : (
        <Unauthorized roles={authorizedRoles} />
      )}
    </>
  );
}
