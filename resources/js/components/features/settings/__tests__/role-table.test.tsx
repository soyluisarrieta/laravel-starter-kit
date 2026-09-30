import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vite-plus/test';
import RoleTable from '@/components/features/settings/role-table';
import { UsersIcon } from '@/components/icons';

const permissionGroups = [
    {
        id: 'users' as const,
        title: 'Gestión de usuarios',
        icon: UsersIcon,
        permissions: [{ id: 1, name: 'create_users', label: 'Crear usuarios' }],
    },
];

const roles = [
    {
        id: 7,
        name: 'admin',
        label: 'Administrador',
        hex_color: '#6366F1',
        created_at: '',
        updated_at: '',
        permissionIds: [1],
    },
];

describe('RoleTable', () => {
    it('shows the permissions of a group only once it is opened', async () => {
        render(
            <RoleTable
                permissionGroups={permissionGroups}
                roles={roles}
                onChangePermission={vi.fn()}
                onEditRole={vi.fn()}
            />,
        );

        expect(screen.getByText('Gestión de usuarios')).toBeInTheDocument();
        expect(screen.queryByText('Crear usuarios')).not.toBeInTheDocument();

        await userEvent.click(screen.getByText('Gestión de usuarios'));

        expect(screen.getByText('Crear usuarios')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).toBeChecked();
    });
});
