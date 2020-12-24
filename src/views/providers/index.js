import React, { useState } from "react";
import ProviderCreateContainer from "../../containers/providers/provider-create";
import ProviderListContainer from "../../containers/providers/providers-list";

export default function ProvidersView(props) {
  const [create, setcreate] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <ProviderCreateContainer succesCreate={() => setcreate(!create)} />
      <ProviderListContainer notification_create={create} />
    </div>
  );
}
