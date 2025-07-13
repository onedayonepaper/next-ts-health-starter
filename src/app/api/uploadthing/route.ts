import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";
import { uploadthingConfig } from "@/lib/config";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: {
    token: uploadthingConfig.token,
  },
});