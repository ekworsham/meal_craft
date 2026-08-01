import { neon } from '@neondatabase/serverless';
import type { MyRecipes } from './types';

const sql = neon(process.env.DATABASE_URL!);

const ITEMS_PER_PAGE = 15;

export async function getRecipes(query: string = '', currentPage: number = 1): Promise<MyRecipes[]> {
  const searchTerm = `%${query}%`;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const rows = await sql`
    SELECT
      id,
      title AS "title",
      instructions AS "instructions"
    FROM recipes
    WHERE
      title ILIKE ${searchTerm}
        or instructions ILIKE ${searchTerm}
      ORDER BY id DESC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
  `;
  console.log(rows);
  return rows as unknown as MyRecipes[];
}

export async function getRecipesTotalPages(
  query: string = ''
): Promise<number> {
  const searchTerm = `%${query}%`;
  const rows = await sql`
    SELECT COUNT(*) FROM recipes
    WHERE
      title ILIKE ${searchTerm}
      OR instructions ILIKE ${searchTerm}
  `;
  return Math.ceil(Number(rows[0].count) / ITEMS_PER_PAGE);
}

export async function getRecipeById(
  id: number
): Promise<MyRecipes | null> {
  const rows = await sql`
    SELECT
      id,
        title AS "title",
        instructions AS "instructions"
    FROM recipes WHERE id = ${id}
  `;
  return (rows[0] as unknown as MyRecipes) ?? null;
}

export async function addRecipes(
  data: Omit<MyRecipes, 'id'>
): Promise<MyRecipes> {
  const rows = await sql`
      INSERT INTO recipes (
      title,
      instructions,
      userid
    )
    VALUES (
      ${data.title},
      ${data.instructions},
      1
    )
    RETURNING
        id,
        title AS "title",
        instructions AS "instructions"
  `;

  return rows[0] as MyRecipes;
}


export async function updateRecipe(
  id: number,
  data: Partial<MyRecipes>
): Promise<MyRecipes| null> {
  const rows = await sql`
    UPDATE recipes
    SET
      title = ${data.title},
      instructions = ${data.instructions}
    WHERE id = ${id}
    RETURNING
        id,
        title AS "title",
        instructions AS "instructions";
  `;

  return (rows[0] as MyRecipes) ?? null;
}

export async function deleteRecipe(id: number): Promise<void> {
  await sql`
    DELETE FROM recipes
    WHERE id = ${id};
  `;
}