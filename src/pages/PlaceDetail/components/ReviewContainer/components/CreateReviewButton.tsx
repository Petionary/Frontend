import Rate from '../../../../../components/Rate';

interface CreateReviewButtonProps {
  createReviewToggle: boolean;
  handleCreateReviewToggle: () => void;
}

const CreateReviewButton = ({ handleCreateReviewToggle }: CreateReviewButtonProps) => {
  return (
    <button
      onClick={handleCreateReviewToggle}
      className="flex justify-between items-center rounded-[0.25rem] min-w-[25.8125rem] h-[4.3125rem] text-left px-[1.25rem] border border-gray-20 hover:border-gray-60"
    >
      <p className="text-gray-80 text-[1rem] font-[500] leading-[1.625rem] -tracking-[0.005rem] mr-[1.75rem]">
        tmddus님의 후기도 남겨보세요.
      </p>
      <Rate rate={4.5} grade_only size="md" />
    </button>
  );
};

export default CreateReviewButton;
