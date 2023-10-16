import useInput from '../../../../../../hooks/useInput';
import { IReview } from '../../../../../../utils/type';
import CreateReviewHeader from './components/CreateReviewHeader';
import CreateReviewRate from './components/CreateReviewRate';

interface CreateReviewModalProps {
  createReviewToggle: boolean;
  handleCreateReviewToggle: () => void;
}

const initialReview: IReview = {
  author: 'tmddus',
  profile_img: '',
  date: new Date().toDateString(),
  content: '',
  rate: 0.0,
};

const CreateReviewModal = ({
  createReviewToggle,
  handleCreateReviewToggle,
}: CreateReviewModalProps) => {
  const { input, handleInputChange, setInput } = useInput<IReview>(initialReview);
  return (
    <>
      {createReviewToggle && (
        <div className="w-[100vw] h-[100vh] bg-gray-100 fixed top-0 left-0 opacity-[0.5]" />
      )}
      <dialog
        open={createReviewToggle}
        className="w-[52.875rem] h-[85vh] bg-background fixed top-[6vh] p-[1.75rem] rounded-[0.25rem]"
      >
        <CreateReviewHeader
          placeName="장소이름"
          handleCreateReviewToggle={handleCreateReviewToggle}
        />
        <CreateReviewRate review={input} setReview={setInput} />
        open
      </dialog>
    </>
  );
};

export default CreateReviewModal;
