import { services } from "@/features/data/services";
import Services from "@/features/components/Services";
import Filters from "@/features/components/Filters";

type ServicesPageProps = {
  searchParams: Promise<{
    category?: string;
    search?: string;
  }>;
};

export default async function ServicesPage({
  searchParams,
}: ServicesPageProps) {
  const params = await searchParams;

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      !params.category ||
      service.category === params.category;

    const matchesSearch =
      !params.search ||
      service.name
        .toLowerCase()
        .includes(params.search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Filters />
      <Services services={filteredServices} />
    </>
  );
}