import { listFields } from "../../../common/templeate-forms/list-fields";

export const form = [
  {
    grid: { xs: 12, sm: 6 },
    component: listFields["textField"],
    controller: {
      name: "name",
      defaultValue: "",
      rules: {
        required: "Required",
      },
    },
    field: {
      required: true,
      label: "Nombre del producto",
      fullWidth: true,
    },
  },
  {
    grid: { xs: 12, sm: 6 },
    component: listFields["textField"],
    controller: {
      name: "barcode",
      defaultValue: "",
      rules: {
        required: "Required",
      },
    },
    field: {
      required: true,
      label: "Codigo",
      fullWidth: true,
    },
  },
  {
    grid: { xs: 12, sm: 5 },
    component: listFields["numberFormart"],
    controller: {
      fullWidth: true,
      name: "price",
      label: "Precio de producto",
      defaultValue: "",
      required: true,
      rules: {
        required: "Required",
      },
    },
    field: {
      customInput: listFields["textField"],
      thousandSeparator: true,
      prefix: "$ ",
    },
  },
  {
    grid: { xs: 12, sm: 5 },
    component: listFields["numberFormart"],
    controller: {
      fullWidth: true,
      name: "cost",
      label: "Costo de producto",
      defaultValue: "",
      required: true,
      rules: {
        required: "Required",
      },
    },
    field: {
      customInput: listFields["textField"],
      thousandSeparator: true,
      prefix: "$ ",
    },
  },
  {
    grid: { xs: 12, sm: 2 },
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
      InputLabelProps: {
        shrink: true,
      },
    },
  },
  {
    grid: { xs: 12, sm: 4 },
    component: listFields["selectField"],
    controller: {
      defaultValue: "",
      name: "provider",
      rules: {
        required: "Required",
      },
    },
    field: {
      id: "provider",
      select: true,
      label: "Proveedor",
      fullWidth: true,
      SelectProps: {
        native: true,
      },
      helperText: "Por favor selecciona un proveedor",
      options: [{ label: "puto", value: 1 }],
    },
  },
  {
    grid: { xs: 12, sm: 4 },
    component: listFields["selectField"],
    controller: {
      defaultValue: "",
      name: "marca",
      rules: {
        required: "Required",
      },
    },
    field: {
      select: true,
      label: "Marca",
      fullWidth: true,
      SelectProps: {
        native: true,
      },
      helperText: "Por favor selecciona una marca",
      options: [{ label: "puto", value: 1 }],
    },
  },
  {
    grid: { xs: 12, sm: 4 },
    component: listFields["selectField"],
    controller: {
      defaultValue: "",
      name: "unit",
      rules: {
        required: "Required",
      },
    },
    field: {
      select: true,
      label: "Unidad",
      fullWidth: true,
      SelectProps: {
        native: true,
      },
      helperText: "Por favor selecciona una unidad",
      options: [{ label: "puto", value: 1 }],
    },
  },
];
