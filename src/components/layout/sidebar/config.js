import AdbIcon from '@material-ui/icons/Adb';
import BookIcon from '@material-ui/icons/Book';
import ViewListIcon from '@material-ui/icons/ViewList';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ViewModuleIcon from "@material-ui/icons/ViewModule";

export const config = [
    {
        title: 'Productos',
        icon: AssignmentIcon,
        color: 'rgba(85, 5, 123, 0.5)',
        routes: [
            {
                title: 'Lista de productos',
                path: '/app/products',
                icon: ViewListIcon,
            },
            {
                title: 'Crear producto',
                path: '/app/products/create',
                icon: AddBoxIcon,
            },
        ]
    },
    {
        title: 'Ventas',
        path: '/app/sales',
        icon: AttachMoneyIcon,
    },
    {
        title: 'Proveedores',
        path: '/app/providers',
        icon: AssignmentIndIcon,
    },
    {
        title: 'Marcas',
        path: '/app/marks',
        icon: ViewModuleIcon,
    },
    {
        title: 'Carrito de Compras',
        path: '/app/card-shop',
        icon: ShoppingCartIcon,
    }
]