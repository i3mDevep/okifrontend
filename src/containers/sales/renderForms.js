export const formOrdered = [
    {
      grid: { xs: 12 },
      component: listFields["selectField"],
      controller: {
        defaultValue: "",
        name: "type_payment",
        rules: {
          required: "Required",
        },
      },
      field: {
        select: true,
        label: "Tipo de Pago",
        fullWidth: true,
        SelectProps: {
          native: true,
        },
        helperText: "Ordenadar por: ",
        options: [],
      },
    },
  ];
  