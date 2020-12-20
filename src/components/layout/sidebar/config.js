import AdbIcon from '@material-ui/icons/Adb';

export const config = [
    {
        title: 'Productos',
        icon: AdbIcon,
        color: 'rgba(85, 5, 123, 0.5)',
        routes: [
            {
                title: 'Lista de productos',
                path: '/app/products',
                icon: AdbIcon,
            },
            {
                title: 'Crear producto',
                path: '/app/products/create',
                icon: AdbIcon,
            },
        ]
    },
    {
        title: 'Ventas',
        path: '/app/sales',
        icon: AdbIcon,
    },
    {
        title: 'Pedidos en curso',
        path: '/app/car-shop',
        icon: AdbIcon,
    }
]