import { ComponentPropsWithoutRef, useState } from 'react';
import ImagePage from './ImagePage';

interface PlaceImageProps extends ComponentPropsWithoutRef<'img'> {
  images: string[];
}

const PlaceImage = ({ images, ...rest }: PlaceImageProps) => {
  const [page, setPage] = useState(0);

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < 2) setPage(page + 1);
  };

  return (
    <section className="relative w-[31vw] flex overflow-hidden">
      {images?.map((el, idx) => {
        return (
          <img
            {...rest}
            alt="image"
            key={idx}
            src={el}
            className={`min-w-[37.5rem] h-[18.75rem] rounded-[0.25rem] bg-gray-20 duration-500 -translate-x-[${
              page * 37.5
            }rem]`}
          />
        );
      })}
      <ImagePage
        page={page}
        length={images?.length}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </section>
  );
};

export default PlaceImage;
