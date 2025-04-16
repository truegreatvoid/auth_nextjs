'use client';

import { useRouter } from 'next/navigation';
import { logout } from '@/lib/auth';
import { Button } from '@/components/ui/button';

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  return (
    <Button onClick={handleLogout} variant="destructive">
      Sair
    </Button>
  );
}
