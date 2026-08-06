import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
};

export async function getUserByEmail(
  email: string
): Promise<User | null> {
    try {
        const rows = await sql`
            SELECT
            id::text AS id,
            name,
            email,
            password_hash AS "passwordHash"
            FROM users
            WHERE LOWER(email) = LOWER(${email})
            LIMIT 1
        `;

  return (rows[0] as User | undefined) ?? null;
   } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}