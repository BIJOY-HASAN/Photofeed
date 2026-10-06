import PhotoList from "../components/PhotList";


export default async function Home() {
  const response = await fetch(`${process.env.BASE_API_URL}`);
  const photos = await response.json();

  return <PhotoList photos={photos} />;
}
