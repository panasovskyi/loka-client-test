import { UserRole } from './user-role';

export type User = {
  id: string;
  telegra_id: number;
  full_name: string;
  phone: string | null;
  role: UserRole;
  created_at: Date;
  updated_at: Date;
}