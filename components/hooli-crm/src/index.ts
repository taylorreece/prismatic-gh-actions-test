import { action, component } from "@prismatic-io/spectral";

const listPosts = action({
  display: {
    label: "List Posts",
    description: "List all posts in the system",
  },
  inputs: {},
  perform: async (context, params) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return { data: posts };
  },
});

export default component({
  key: "hooli-crm",
  public: false,
  display: {
    label: "Hooli CRM",
    description:
      "Placeholder component for Hooli to demonstrate GitHub actions..",
    iconPath: "icon.png",
  },
  actions: { listPosts },
});
