import type { VercelConfig } from "@vercel/config/v1";

export const config: VercelConfig = {
  git: {
    deploymentEnabled: {
      "renovate/*": false, // * は任意の文字列を表します。
    },
  },
};
