import PhotoDetails from "@/app/components/PhotoDetails"

const PhotoDetailsPage =async({params}) => {
    const {id,lang} =await params;
    return(
        <PhotoDetails  id={id} lang={lang}/>
    )
}
export default PhotoDetailsPage;