import Button from '../../../../components/Button';

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
    <section className="flex items-center w-[30rem] justify-between">
      <Button onClick={handleSaveEdit}>저장</Button>
      <Button onClick={handleCancelEdit}>취소</Button>
      <div
        className="text-xs text-light text-center hover:font-bold cursor-pointer"
        onClick={handleDisableAccount}
      >
        회원탈퇴
      </div>
    </section>
  );
};

export default EditButton;
