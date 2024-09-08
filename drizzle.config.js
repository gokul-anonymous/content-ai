/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://contentai_owner:xM5SIHBfTbd3@ep-calm-river-a5uizcud.us-east-2.aws.neon.tech/contentai?sslmode=require',
    }
  };