import Link from "next/link";
import type { Service } from "../types/services";

type Props = {
  services: Service[];
};

export default function Services({ services }: Props) {
  return (
    <div>
      {services.map((service) => (
        <div key={service.id}>
        <p >
          {service.name} - {service.category}
        </p>
        <Link href={`/services/${service.id}`}>Detail</Link>
        </div>
      ))}
    </div>
  );
}