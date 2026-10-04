import { getDictionary } from "./dictionaries";

export default async function Home({ params }) {
  const { lang } = await params;

  const dictionary = await getDictionary(lang);

  return (
    <div>{dictionary.followers}</div>
  );
}