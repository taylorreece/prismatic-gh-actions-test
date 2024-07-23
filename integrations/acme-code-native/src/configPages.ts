import { configPage, connectionConfigVar } from "@prismatic-io/spectral";

export const configPages = {
  Connections: configPage({
    elements: {
      "connection1": connectionConfigVar({
        stableKey: "cd91b40b-d6b3-4671-a563-c66198329625",
        dataType: "connection",
        inputs: {
          username: {
            label: "Username",
            placeholder: "Username",
            type: "string",
            required: true,
            comments: "Username for my Connection",
          },
          password: {
            label: "Password",
            placeholder: "Password",
            type: "password",
            required: true,
            comments: "Password for my Connection",
          },
        },
      }),
    },
  }),
};
