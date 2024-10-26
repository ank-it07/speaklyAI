// import { neon } from "@neondatabase/serverless";

// export default async function getDbConnection() {
//   if (!process.env.DATABASE_URL) {
//     throw new Error("Neon Database URL is not defined");
//   }
//   try {
//     const sql = neon(process.env.DATABASE_URL);
//     console.log("Database connection established");
//     return sql;
//   } catch (error) {
//     console.error("Database connection error:", error);
//     throw error;
//   }
// }


import { neon } from "@neondatabase/serverless";

export default async function getDbConnection() {
  if (!process.env.DATABASE_URL) {
    throw new Error("Neon Database URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  return sql;
}
