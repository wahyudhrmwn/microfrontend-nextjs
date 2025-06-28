import { Metadata } from 'next';
import Users from '@/views/Users';
import BackNavigation from '@/components/BackNavigation';

export const metadata: Metadata = {
  title: 'Users | Your App',
  description: 'Manage users and their permissions',
};

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <BackNavigation currentPage="Users" />
      <Users />
    </div>
  );
} 