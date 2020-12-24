import { FieldController } from "./FieldController";

export const RenderFieldsFields = ({ render, control }) =>
  render.map((field) => {
    let data = field;
    data.controller["control"] = control;
    return (
      <FieldController key={data.controller.name} {...data}>
        {data.children}
      </FieldController>
    );
  });
