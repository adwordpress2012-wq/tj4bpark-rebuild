import { TourismHomePage } from "@/components/tourism/TourismHomePage";
import { TourismJsonLd } from "@/components/tourism/TourismJsonLd";
import { tj4bParkTemplate } from "@/lib/tj4b-park";

export default function Home() {
  return (
    <>
      <TourismJsonLd template={tj4bParkTemplate} />
      <TourismHomePage template={tj4bParkTemplate} />
    </>
  );
}
