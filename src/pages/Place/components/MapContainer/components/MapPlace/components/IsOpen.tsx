const IsOpen = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="flex flex-col items-center">
      <span
        className={`w-[0.875rem] h-[0.875rem] ${isOpen ? 'bg-primary' : 'bg-red'} rounded-full`}
      />
      <span className={`text-[0.625rem] ${isOpen ? 'text-primary' : 'text-red'}`}>
        {isOpen ? '영업중' : '영업종료'}
      </span>
    </div>
  );
};

export default IsOpen;
