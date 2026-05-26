import { connectNodeAdapter } from "@connectrpc/connect-node";
import { PriceService } from "./gen/energyprice/price_connect.js";
import { GetPriceResponse } from "./gen/energyprice/price_pb.js";

export const handler = connectNodeAdapter({
  routes: (router) => {
    router.service(PriceService, {
      async getPrice() {
        const price = Math.floor(Math.random() * 997) + 1;
        return new GetPriceResponse({ price });
      },
    });
  },
});
