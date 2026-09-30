import {
    createExpandedRowModel,
    flexRender,
    rowExpandingFeature,
    tableFeatures,
    useTable,
} from '@tanstack/react-table';
import type { ColumnDef, ExpandedState } from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import type { IconType } from '@/components/icons';
import { ChevronRightIcon, ShieldCheckIcon } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Spinner } from '@/components/ui/spinner';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import type {
    GroupedPermission,
    GroupedPermissionId,
    onChangePermissionProps,
    Permission,
    PermissionId,
    Role,
} from '@/types';

interface BaseRow {
    roleValues: Record<number, boolean>;
}

interface GroupRow extends BaseRow {
    isGroup: true;
    id: GroupedPermissionId;
    title: string;
    icon: IconType;
    subRows: PermissionRow[];
}

interface PermissionRow extends BaseRow {
    isGroup: false;
    id: PermissionId;
    name: string;
    label: string;
    permission: Permission;
}

type RowData = GroupRow | PermissionRow;

const features = tableFeatures({
    rowExpandingFeature,
    expandedRowModel: createExpandedRowModel(),
});

interface RoleTableProps {
    permissionGroups: GroupedPermission[];
    roles: Array<Role & { permissionIds: PermissionId[] }>;
    onChangePermission: (data: onChangePermissionProps) => Promise<void>;
    onEditRole: (role: Role) => void;
}

export default function RoleTable({
    permissionGroups,
    roles,
    onChangePermission,
    onEditRole,
}: RoleTableProps) {
    const [expanded, setExpanded] = useState<ExpandedState>({});
    const [loadingPermissions, setLoadingPermissions] = useState<Set<string>>(
        new Set(),
    );

    // Data for table
    const data: RowData[] = useMemo(() => {
        const rolePermissionMap: Record<number, Set<number>> = {};

        roles.forEach((role) => {
            rolePermissionMap[role.id] = new Set(role.permissionIds ?? []);
        });

        return permissionGroups.map((group) => ({
            isGroup: true,
            id: group.id,
            title: group.title,
            icon: group.icon,
            roleValues: {},
            subRows: group.permissions.map((permission) => {
                const roleValues: Record<number, boolean> = {};

                roles.forEach((role) => {
                    roleValues[role.id] = rolePermissionMap[role.id].has(
                        permission.id,
                    );
                });

                return {
                    isGroup: false,
                    id: permission.id,
                    name: permission.name,
                    label: permission.label,
                    permission,
                    roleValues,
                };
            }),
        }));
    }, [permissionGroups, roles]);

    const handlePermissionChange = async (
        permission: Permission,
        role: Role,
        value: boolean,
    ) => {
        const key = `${role.id}-${permission.id}`;
        setLoadingPermissions((prev) => new Set(prev).add(key));

        try {
            await onChangePermission({
                permission,
                role,
                value,
            });
        } finally {
            setLoadingPermissions((prev) => {
                const next = new Set(prev);
                next.delete(key);
                return next;
            });
        }
    };

    // Columns for roles
    const roleColumns: ColumnDef<typeof features, RowData>[] = roles.map(
        (role) => ({
            id: role.id.toString(),
            header: () => (
                <Badge
                    onClick={() => onEditRole(role)}
                    className="cursor-pointer border-none hover:bg-muted"
                    variant="outline"
                    style={{
                        backgroundColor: role.hex_color + '1A',
                        color: role.hex_color,
                    }}
                >
                    <ShieldCheckIcon />
                    {role.label}
                </Badge>
            ),
            cell: ({ row }) => {
                const original = row.original;
                const permission = original.isGroup
                    ? null
                    : original.permission;
                if (!permission) return null;

                const value = original.roleValues[role.id];
                const isLoading = loadingPermissions.has(
                    `${role.id}-${permission.id}`,
                );

                return (
                    <div className="flex items-center justify-center">
                        {isLoading ? (
                            <Spinner className="ml-2" />
                        ) : (
                            <Checkbox
                                checked={value}
                                onCheckedChange={(checked) =>
                                    handlePermissionChange(
                                        permission,
                                        role,
                                        checked as boolean,
                                    )
                                }
                            />
                        )}
                    </div>
                );
            },
        }),
    );

    // Columns definition
    const columns: ColumnDef<typeof features, RowData>[] = [
        {
            id: 'actions',
            header: 'Acciones',
            cell: ({ row }) => {
                if (row.original.isGroup) {
                    const Icon = row.original.icon;
                    return (
                        <div className="flex w-full min-w-80 cursor-pointer items-center gap-2 px-2 py-4 text-left font-semibold">
                            <ChevronRightIcon
                                className={cn(
                                    'h-4 w-4 transition-transform',
                                    row.getIsExpanded() && 'rotate-90',
                                )}
                            />
                            <Icon className="size-4 text-blue-500" />
                            {row.original.title}
                        </div>
                    );
                }

                return (
                    <div className="py-2 pr-4 pl-6">
                        <span className="font-medium">
                            {row.original.label}
                        </span>
                    </div>
                );
            },
        },
        ...roleColumns,
    ];

    const table = useTable({
        features,
        data: data,
        columns,
        state: { expanded },
        onExpandedChange: setExpanded,
        getSubRows: (row) => (row as GroupRow).subRows,
    });

    return (
        <Table>
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <TableHead
                                key={header.id}
                                className={cn(
                                    'border-b bg-muted/50',
                                    header.id !== 'actions' && 'text-center',
                                )}
                            >
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext(),
                                      )}
                            </TableHead>
                        ))}
                    </TableRow>
                ))}
            </TableHeader>

            <TableBody>
                {table.getRowModel().rows.map((row) => {
                    const isGroup = row.original.isGroup;
                    return (
                        <TableRow
                            key={row.id}
                            className={cn(
                                isGroup
                                    ? 'cursor-pointer bg-muted/20 hover:bg-muted/40'
                                    : 'cursor-auto hover:bg-muted/20',
                            )}
                            onClick={() => isGroup && row.toggleExpanded()}
                        >
                            {row.getAllCells().map((cell) => (
                                <TableCell
                                    key={cell.id}
                                    className={cn('py-3', isGroup && 'p-0')}
                                >
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext(),
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}
