// HeliosSync.tsx
import { useEffect } from "react";
import { createHeliosProvider } from "./lib.ts";

export const HeliosSync = () => {
  useEffect(() => {
    const syncHelios = async () => {
      const config = {
        executionRpc:
          "https://ethereum-mainnet.core.chainstack.com/220dbc1d5a6d872072403f0aa23e2ace",
        consensusRpc:
          "https://ethereum-mainnet.core.chainstack.com/beacon/220dbc1d5a6d872072403f0aa23e2ace",
        checkpoint:
          "0x3f692997a0c0c66baa549ba3b1897f705b44f36b412fc70ff0e78fdef647bbc3",
      };

      const heliosProvider = await createHeliosProvider(config);
      await heliosProvider.sync();
      console.log("SYNCED");

      // Now you can use window.provider as the synced
    };
    syncHelios();
  });
  return <div>Syncing...</div>;
};
