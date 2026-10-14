"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilter = (key : string,value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`/services?${params.toString()}`);
  };

  return (
    <select
      onChange={(e) =>
        updateFilter("category",e.target.value)
      }
    >
      <option value="">Todas</option>
      <option value="Fitness">Fitness</option>
      <option value="Fotografía">Fotografía</option>
      <option value="Diseño">Diseño</option>
    </select>
  );
}