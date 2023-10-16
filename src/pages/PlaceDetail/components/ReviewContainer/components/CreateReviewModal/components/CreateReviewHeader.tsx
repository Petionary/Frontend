interface CreateReviewHeaderProps {
  placeName: string;
  handleCreateReviewToggle: () => void;
}

const CreateReviewHeader = ({ placeName, handleCreateReviewToggle }: CreateReviewHeaderProps) => {
  return (
    <section className="w-full flex justify-between">
      <button
        className="text-[1.25rem] text-gray-50 font-[600] leading-[2rem] -tracking-[0.00652rem]"
        onClick={handleCreateReviewToggle}
      >
        취소
      </button>
      <h3 className="text-[1.25rem] font-[600] leading-[2rem] -tracking-[0.00625rem]">
        {placeName}
      </h3>
      <button
        className="text-[1.25rem] text-primary font-[600] leading-[2rem] -tracking-[0.00652rem]"
        onClick={handleCreateReviewToggle}
      >
        등록
      </button>
    </section>
  );
};

export default CreateReviewHeader;
