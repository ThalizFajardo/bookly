import { services } from "@/features/data/services";

export async function GET() {
  return Response.json(services);
}
