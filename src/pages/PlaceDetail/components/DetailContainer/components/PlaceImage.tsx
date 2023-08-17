import { ComponentPropsWithoutRef, useState } from 'react';
import ImagePage from './ImagePage';

// img src의 배열을 prop으로 전달

const mockImgs = ['', '', ''];

const PlaceImage = ({ ...rest }: ComponentPropsWithoutRef<'img'>) => {
  const [page, setPage] = useState(0);

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < 2) setPage(page + 1);
  };

  return (
    <section className="relative w-[37.5rem] flex overflow-hidden">
      {mockImgs.map(el => {
        return (
          <img
            {...rest}
            alt="1"
            key={el}
            src={el}
            className={`min-w-[37.5rem] h-[18.75rem] rounded-[0.25rem] bg-gray-20 duration-500 -translate-x-[${
              page * 37.5
            }rem]`}
          />
        );
      })}
      <ImagePage
        page={page}
        length={mockImgs.length}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </section>
  );
};

export default PlaceImage;
