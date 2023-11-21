import { ReactComponent as Pick } from '../../../../../assets/Pick.svg';
import { ReactComponent as Copy } from '../../../../../assets/copy.svg';
import Rate from '../../../../../components/Rate';

interface ToolsProps {
  rate: number;
  reviews: object[];
}

const Tools = ({ rate, reviews }: ToolsProps) => {
  return (
    <div className="flex justify-between">
      <div className="relative w-[13.38rem] flex justify-between items-center">
        <Rate rate={rate} reviews={reviews} />
      </div>
      <div className="flex justify-between w-[6.25rem]">
        <Copy className="cursor-pointer" />
        <Pick className="cursor-pointer hover:fill-red" />
      </div>
    </div>
  );
};

export default Tools;
