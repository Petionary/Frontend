import { ChangeEvent } from 'react';
import { TPlaceParam } from '../../..';
import SortToggle from './SortToggle';
import Location from './Location';

interface ListToolBarProps {
  params: TPlaceParam;
  // eslint-disable-next-line no-unused-vars
  handleParams: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ListToolBar = ({ params, handleParams }: ListToolBarProps) => {
  return (
    <section className="w-full flex items-center mx-auto bg-background lg:w-[81.25rem] lg:grid-cols-3">
      <Location />
      <SortToggle params={params} handleParams={handleParams} />
    </section>
  );
};

export default ListToolBar;
