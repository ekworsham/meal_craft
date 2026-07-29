type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RecipePage({ params }: PageProps) {
  const { id } = await params;

  return (
    <main>
      <h1>Recipe {id}</h1>
    </main>
  );
}