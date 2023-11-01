interface ReviewContentProps {
  imagesLen: number | undefined;
  content: string;
}

const ReviewContent = ({ imagesLen, content }: ReviewContentProps) => {
  return (
    <p
      className={`text-[1rem] text-gray-90 font-[500] leading-[1.625rem] -tracking-[0.005rem] ${
        imagesLen ? 'line-clamp-2' : 'line-clamp-5'
      }`}
    >
      {content}
    </p>
  );
};
export default ReviewContent;
