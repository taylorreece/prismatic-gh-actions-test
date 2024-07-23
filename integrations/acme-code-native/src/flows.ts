import { flow } from "@prismatic-io/spectral";

export const flow1 = flow({
  name: "Flow 1",
  stableKey: "3346012d-b3e3-4588-9858-43537fe8f4d0",
  description: "This is the first flow",
  onExecution: async (context, params) => {
    const { logger, configVars } = context;

    logger.info(`Action context: ${JSON.stringify(context)}`);
    logger.info(`Action params: ${JSON.stringify(params)}`);

    return { data: null };
  },
});

export default [flow1];
