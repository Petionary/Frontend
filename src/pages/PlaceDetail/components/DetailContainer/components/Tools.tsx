import { ReactComponent as Pick } from '../../../../../assets/Pick.svg';
import { ReactComponent as Copy } from '../../../../../assets/copy.svg';

interface ToolsProps {
  reviews: any;
}

const Tools = ({ reviews }: ToolsProps) => {
  const rateSum = reviews.reduce((a: any, c: any) => a?.rate + c?.rate);
  return (
    <div className="flex justify-between">
      <div className="w-[13.38rem] flex justify-between items-center">
        <span className="w-[6.75rem] h-[1.25rem] bg-gray-20">rate</span>
        <span className="text-[1.5rem] text-gray-70 font-[600] tracking-[0.06rem]">
          {rateSum / reviews?.length} ({reviews?.length})
        </span>
      </div>
      <div className="flex justify-between w-[6.25rem]">
        <Copy className="cursor-pointer" />
        <Pick className="cursor-pointer hover:fill-red" />
      </div>
    </div>
  );
};

export default Tools;
