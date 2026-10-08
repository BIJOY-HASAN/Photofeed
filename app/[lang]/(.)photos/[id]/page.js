import Modal from "@/app/components/Modal";
import PhotoDetails from "@/app/components/PhotoDetails";

const PhotoModal = async ({ params }) => {
  const { id, lang } = await params;
  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />
    </Modal>
  );
};
export default PhotoModal;
