interface SelectedRateProps {
  rate: number;
}

const SelectedRate = ({ rate }: SelectedRateProps) => {
  return (
    <div className="flex">
      <p className="text-[1rem] font-[500] leading-[1.625rem] -tracking-[0.005rem] text-gray-100">
        {rate.toFixed(1)}
      </p>
      <p className="text-[1rem] font-[500] leading-[1.625rem] -tracking-[0.005rem] text-gray-50">
        /5.0
      </p>
    </div>
  );
};

export default SelectedRate;
