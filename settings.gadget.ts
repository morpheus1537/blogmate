import type { GadgetSettings } from "gadget-server";

export const settings: GadgetSettings = {
  type: "gadget/settings/v1",
  frameworkVersion: "v1.3.0",
  plugins: {
    connections: {
      shopify: {
        apiVersion: "2024-10",
        enabledModels: [
          "shopifyApp",
          "shopifyAppCredit",
          "shopifyAppInstallation",
          "shopifyAppPurchaseOneTime",
          "shopifyAppSubscription",
          "shopifyAppUsageRecord",
          "shopifyArticle",
          "shopifyAsset",
          "shopifyBlog",
          "shopifyBulkOperation",
          "shopifyBusinessEntity",
          "shopifyComment",
          "shopifyDomain",
          "shopifyFile",
          "shopifyPage",
          "shopifyRedirect",
          "shopifyTheme",
        ],
        type: "partner",
        scopes: [
          "write_content",
          "read_content",
          "read_files",
          "write_files",
          "write_metaobjects",
          "read_metaobjects",
          "read_online_store_pages",
          "read_online_store_navigation",
          "write_themes",
          "read_themes",
          "write_translations",
          "read_translations",
          "unauthenticated_read_content",
          "unauthenticated_read_metaobjects",
        ],
      },
    },
    authentications: {
      settings: {
        redirectOnSignIn: "/signed-in",
        signInPath: "/sign-in",
        unauthorizedUserRedirect: "signInPath",
        defaultSignedInRoles: ["signed-in"],
      },
      methods: {
        emailPassword: true,
        googleOAuth: {
          scopes: ["email", "profile"],
          offlineAccess: false,
        },
      },
    },
  },
};
