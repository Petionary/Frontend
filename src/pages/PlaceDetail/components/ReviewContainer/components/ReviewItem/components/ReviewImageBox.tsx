interface ReviewImageBoxProps {
  imageURLs: string[];
}

const ReviewImageBox = ({ imageURLs }: ReviewImageBoxProps) => {
  return (
    <div className="flex mb-[0.5rem]">
      {imageURLs?.map((url, idx) => (
        <img
          key={url}
          src={url}
          alt={idx.toString()}
          className="w-[5rem] h-[5rem] bg-gray-40 rounded-[0.13rem] mr-[0.5rem]"
        />
      ))}
    </div>
  );
};

export default ReviewImageBox;
