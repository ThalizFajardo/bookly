//detalle | info | precio| disponibilidad
export default async function serviceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = await params;

  return (
    <>
      <h2>esta es la de detalle </h2>
    </>
  );
}
