import { action, component, input, util } from "@prismatic-io/spectral";

const listUsers = action({
  display: {
    label: "List Users",
    description: "List all users in the system",
  },
  inputs: {
    endpoint: input({
      type: "string",
      label: "Users Endpoint",
      default: "https://jsonplaceholder.typicode.com/users/",
      clean: util.types.toString,
    }),
  },
  perform: async (context, params) => {
    const response = await fetch(params.endpoint);
    const users = await response.json();
    return { data: users };
  },
});

export default component({
  key: "acme-crm",
  public: false,
  display: {
    label: "Acme CRM",
    description:
      "Placeholder component for Acme to demonstrate GitHub actions.....",
    iconPath: "icon.png",
  },
  actions: { listUsers },
});
