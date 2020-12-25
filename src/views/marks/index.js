import React, { useState } from "react";
import MarkCreateContainer from "../../containers/marks/mark-create";
import MarkListContainer from "../../containers/marks/marks-list"

export default function MarksView(props) {
  const [create, setcreate] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <MarkCreateContainer succesCreate={() => setcreate(!create)} />
      <MarkListContainer notification_create={create} />
      {/* <ProviderListContainer notification_create={create} /> */}
    </div>
  );
}
