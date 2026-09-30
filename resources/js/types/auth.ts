import type { User } from '@/types/user';
import type { Permission, Role } from './roles-and-permissions';

export type UserAuth = Omit<User, 'roles'>;

export interface Auth {
    user: UserAuth;
    roles: Role[];
    permissions: Permission['name'][];
}

export interface Passkey {
    id: number;
    name: string;
    authenticator: string | null;
    created_at_diff: string;
    last_used_at_diff: string | null;
}
