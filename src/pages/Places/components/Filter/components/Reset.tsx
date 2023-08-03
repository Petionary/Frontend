interface ResetProps {
  resetParams: () => void;
}

const Reset = ({ resetParams }: ResetProps) => {
  return (
    <div
      className="cursor-pointer text-xs mx-auto text-light hover:text-dark"
      onClick={resetParams}
    >
      필터 초기화
    </div>
  );
};

export default Reset;
