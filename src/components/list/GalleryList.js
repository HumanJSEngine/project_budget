import GalleryLayout from '../gallerylist/GalleryLayout';
import GalleryListImg from '../gallerylist/GalleryListImg';
const GalleryList = ({ list }) => {
  const IMAGE_PATH = process.proccess.REACT_APP_IMAGE_URL;
  return (
    <GalleryLayout>
      {list.map(({ ehSeq, ehImgFile, ehPrice }) => (
        <GalleryListImg
          key={ehSeq}
          src={`${IMAGE_PATH}/${ehImgFile}`}
          price={ehPrice}
        />
      ))}
    </GalleryLayout>
  );
};

export default GalleryList;
