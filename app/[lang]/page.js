import PhotoList from "../components/PhotList";
import { getAllPhotos } from "@/app/lib/image-data";

export default function Home() {
  const photos = getAllPhotos();

  return <PhotoList photos={photos} />;
}
