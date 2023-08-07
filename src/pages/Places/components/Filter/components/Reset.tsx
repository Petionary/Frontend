import { ReactComponent as ResetIcon } from '../../../../../assets/reset.svg';

interface ResetProps {
  resetParams: () => void;
}

const Reset = ({ resetParams }: ResetProps) => {
  return (
    <div
      className="cursor-pointer text-xs mx-auto w-[5rem] text-gray-60 hover:text-gray-100 flex items-center justify-between"
      onClick={resetParams}
    >
      {/* <ResetIcon className="w-[24px] h-[24px]" />
      <span className="text-lg">Reset</span> */}
      필터 모두 초기화
    </div>
  );
};

export default Reset;
