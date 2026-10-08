import { getDictionary } from "@/app/[lang]/dictionaries";
import { getPhotoById } from "@/app/lib/image-data";
import Image from "next/image";

const PhotoDetails = async ({ id, lang }) => {
  // Get photo by dynamic route id
  const photo = getPhotoById(id);

  // Get language dictionary
  const dictionary = await getDictionary(lang);

  // If photo is not found
  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <div className="grid grid-cols-12 gap-4 2xl:gap-10">

      {/* Photo */}
      <div className="col-span-12 lg:col-span-8 border rounded-xl">
        <Image
          className="max-w-full h-full max-h-[70vh] mx-auto"
          src={photo.url}
          alt={photo.title}
          width={900}
          height={500}
        />
      </div>

      {/* Photo Information */}
      <div className="p-6 border rounded-xl col-span-12 lg:col-span-4">

        <h2 className="text-lg lg:text-2xl font-bold mb-2">
          {photo.title}
        </h2>

        {/* Tags */}
        <div className="text-xs lg:text-sm text-black/60 mb-6">
          {photo.tags.map((tag) => `#${tag} `)}
        </div>

        {/* Photo information */}
        <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">

          <div className="flex justify-between">
            <span>{dictionary.views}</span>
            <span className="font-bold">{photo.views}</span>
          </div>

          <div className="flex justify-between">
            <span>{dictionary.share}</span>
            <span className="font-bold">{photo.share}</span>
          </div>

          <div className="flex justify-between">
            <span>{dictionary.uploadedOn}</span>
            <span className="font-bold">{photo.uploaded}</span>
          </div>

        </div>

        {/* Author */}
        <div className="mt-6">

          <div className="flex justify-between items-center mb-3">

            <div className="flex items-center gap-3">

              <Image
                className="size-12 lg:size-14 rounded-full border"
                src={photo.author.avatar}
                alt={photo.author.name}
                width={50}
                height={50}
              />

              <div className="space-y-3">

                <h6 className="lg:text-lg font-bold">
                  {photo.author.name}
                </h6>

                <p className="text-black/60 text-xs lg:text-sm">
                  {photo.author.followers} {dictionary.followers}
                </p>

              </div>

            </div>

            {/* Follow button */}
            <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">

              <Image
                src="/follow.svg"
                alt="Follow"
                width={50}
                height={50}
                className="w-5 h-5"
              />

              {dictionary.follow}

            </button>

          </div>

          <p className="text-xs lg:text-sm text-black/60">
            {photo.author.bio}
          </p>

        </div>

        {/* Actions */}
        <div className="mt-6">

          <div className="flex items-stretch gap-3">

            {/* Like */}
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">

              <Image
                src="/heart.svg"
                alt="Like"
                width={50}
                height={50}
                className="w-5 h-5"
              />

              {photo.likes}

            </button>

            {/* Save */}
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">

              <Image
                src="/save.svg"
                alt="Save"
                width={50}
                height={50}
                className="w-5 h-5"
              />

              {dictionary.save}

            </button>

            {/* Share */}
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">

              <Image
                src="/share.svg"
                alt="Share"
                width={50}
                height={50}
                className="w-5 h-5"
              />

              {dictionary.share}

            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default PhotoDetails;