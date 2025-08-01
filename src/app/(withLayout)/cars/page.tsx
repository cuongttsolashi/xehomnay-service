import { getSearchedCars } from "@/actions/carAction";
import CarsPageLayout from "@/app/components/cars";
interface CarDetailsPageProps {
  searchParams: any;
}

export const dynamic = "force-dynamic";

export default async function CarsPage({ searchParams }: CarDetailsPageProps) {
  const cars = await getSearchedCars(searchParams);

  return <CarsPageLayout cars={cars} />;
}
