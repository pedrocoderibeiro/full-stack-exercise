import { z } from "zod";

const gridQueryParamResquest = z.object({
  letter: z.string().max(1).optional(),
});

type GridQueryParams = z.infer<typeof gridQueryParamResquest>;

export type { GridQueryParams };
export { gridQueryParamResquest };
