/** This file contains all public configuration variables for different environments. */

const config = {
  development: {
    firebase: {
      apiKey: "AIzaSyB6jICg__HEdtZRcSoIoeUMau41jvKNwvU",
      authDomain: "setwithfriends-dev.web.app",
      databaseURL: "https://setwithfriends-dev.firebaseio.com",
      projectId: "setwithfriends-dev",
      storageBucket: "setwithfriends-dev.appspot.com",
      appId: "1:369319422608:web:b9038b38a1bd598048c615",
    },
    stripe: null,
    serverUrl: "http://localhost:3000", // Local dev server
  },
  preview: {
    firebase: {
      apiKey: "AIzaSyB6jICg__HEdtZRcSoIoeUMau41jvKNwvU",
      authDomain: "setwithfriends-dev.web.app",
      databaseURL: "https://setwithfriends-dev.firebaseio.com",
      projectId: "setwithfriends-dev",
      storageBucket: "setwithfriends-dev.appspot.com",
      messagingSenderId: "369319422608",
      appId: "1:369319422608:web:b9038b38a1bd598048c615",
      measurementId: "G-GN0204W8F7",
    },
    stripe: {
      publishableKey: "pk_test_51I0VxyCWK9K42cLJfn9bVu57liV6yS9BP1iS6hKCMvtZ3ObTGcYDxz544z2P9CPkN1a0T3VTYbpUcBO1AUDLwTGz00KDNytNhW",
      priceId: "price_1I2Wi2CWK9K42cLJMyY0yzKT",
    },
    serverUrl: "https://setwithfriends.vercel.app", // Adjust if you deploy preview differently
  },
  production: {
    firebase: {
      apiKey: "AIzaSyCeKQ4rauZ_fq1rEIPJ8m5XfppwjtmTZBY",
      authDomain: "setwithfriends.com",
      databaseURL: "https://setwithfriends.firebaseio.com",
      projectId: "setwithfriends",
      storageBucket: "setwithfriends.appspot.com",
      messagingSenderId: "970544876139",
      appId: "1:970544876139:web:06295fe4079007f76abf2e",
      measurementId: "G-QDX193SN7R",
    },
    stripe: {
      publishableKey: "pk_live_51I0VxyCWK9K42cLJX34X6lIqsuZSWQX6I8WuOgmvEGANYlNyCsZDl2MmWGXQhuM5QnVciouCiYZ9lWq5Ope68aSj00bllKdnRr",
      priceId: "price_1I2QWcCWK9K42cLJFp2sUkSh",
    },
    serverUrl: "https://setwithfriends-production.up.railway.app", // 👈 your Railway backend
  },
};

/** The environment of the application. */
export const env = import.meta.env.MODE || "development";

/** Indicates whether the app is running in development, on emulator. */
export const isDev = env === "development";

/** The version number (A.B.C) of the application, set by CI in production builds. */
export const version = import.meta.env.VITE_SWF_VERSION ?? null;

export const configForEnv = config[env];
export default configForEnv;