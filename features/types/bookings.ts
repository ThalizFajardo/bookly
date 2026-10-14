export type Booking = {
  id: string;
  serviceId: string;
  customerName: string;
  email: string;
  date: string;
  status: "pending" | "confirmed" | "cancelled";
};