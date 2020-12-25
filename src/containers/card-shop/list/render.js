import { listFields } from "../../../components/common/templeate-forms/list-fields";

export const render = [
  {
    grid: { xs: 12, sm: 7 },
    component: listFields["textField"],
    controller: {
      name: "barcode",
      defaultValue: "",
    },
    field: {
      label: "Codigo de barras",
      fullWidth: true,
      variant:"outlined",
    },
  },
  {
    grid: { xs: 12, sm: 3 },
    component: listFields["textField"],
    controller: {
      name: "count",
      defaultValue: "",
      rules: {
        required: "Required",
        min: 1,
      },
    },
    field: {
      required: true,
      label: "Cantidad",
      fullWidth: true,
      type: "number",
      variant:"outlined",
      InputLabelProps: {
        shrink: true,
      },
    },
  },
];
