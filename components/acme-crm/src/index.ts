import { action, component } from "@prismatic-io/spectral";

const listUsers = action({
  display: {
    label: "List Users",
    description: "List all users in the system",
  },
  inputs: {},
  perform: async (context, params) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return { data: users };
  },
});

export default component({
  key: "acme-crm",
  public: false,
  display: {
    label: "Acme CRM",
    description: "Placeholder component for Acme to demonstrate GitHub actions",
    iconPath: "icon.png",
  },
  actions: { listUsers },
});
