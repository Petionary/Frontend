import { ChangeEvent } from 'react';
import { TPlaceParam } from '../../..';
import SortItem from './SortItem';

interface SortToggleProps {
  params: TPlaceParam;
  // eslint-disable-next-line no-unused-vars
  handleParams: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SortToggle = ({ params, handleParams }: SortToggleProps) => {
  return (
    // 리덕스 스토에서 쿼리스트링 변경을 통해 정렬 옵션 반영
    <div className="flex items-center justify-between w-[15rem] text-xs text-light">
      <SortItem sort="distance" checked={params.sort === 'distance'} onChange={handleParams} />
      <SortItem sort="review" checked={params.sort === 'review'} onChange={handleParams} />
      <SortItem sort="heart" checked={params.sort === 'heart'} onChange={handleParams} />
    </div>
  );
};

export default SortToggle;
