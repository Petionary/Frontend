import Button from '../../../../../components/Button';

interface EditButtonProps {
  handleSaveEdit: () => void;
  handleCancelEdit: () => void;
  handleDisableAccount: () => void;
}

const EditButton = ({
  handleCancelEdit,
  handleDisableAccount,
  handleSaveEdit,
}: EditButtonProps) => {
  return (
    <section className="flex items-center w-[30rem] justify-between sm:flex-col">
      <div className="w-[25rem] flex justify-around">
        <Button onClick={handleSaveEdit}>저장</Button>
        <Button onClick={handleCancelEdit}>취소</Button>
      </div>
      <div
        className="text-xs text-light text-center hover:font-bold cursor-pointer mt-5"
        onClick={handleDisableAccount}
      >
        회원탈퇴
      </div>
    </section>
  );
};

export default EditButton;
