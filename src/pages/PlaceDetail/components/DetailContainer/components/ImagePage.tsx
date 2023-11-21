import { ReactComponent as Arrow } from '../../../../../assets/Arrow.svg';

interface ImagePageProps {
  handlePrev: () => void;
  handleNext: () => void;
  page: number;
  length: number;
}

const ImagePage = ({ handleNext, handlePrev, page, length }: ImagePageProps) => {
  return (
    <div className="absolute flex justify-between items-center bottom-[1.25rem] right-[1.56rem] h-[1.625rem]">
      <span onClick={handlePrev}>
        <Arrow className="stroke-gray-70 w-[1rem] h-[0.5rem] -rotate-90" />
      </span>
      <span className="text-[1.125rem] px-[0.38rem] text-gray-70">{`${page + 1} / ${length}`}</span>
      <span onClick={handleNext}>
        <Arrow className="stroke-gray-70 w-[1rem] h-[0.5rem] rotate-90" />
      </span>
    </div>
  );
};

export default ImagePage;
