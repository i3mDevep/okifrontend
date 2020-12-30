import { listFields } from "../../common/templeate-forms/list-fields";
import FormHelperText from '@material-ui/core/FormHelperText';

export const formSearch = [
  {
    grid: { xs: 6 },
    component: listFields["textField"],
    controller: {
      name: "search",
      defaultValue: "",
    },
    field: {
      label: "codigo o #factura",
      required: false,
      autoComplete: "off",
    },
    extras: <FormHelperText>Seleccion orden de datos</FormHelperText>
  },
];


