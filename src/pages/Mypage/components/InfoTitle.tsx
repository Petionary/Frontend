import { ReactComponent as TitleIcon } from '../../../assets/icon_infotitle.svg';

interface InfoTitleProps {
  title: string;
}

const InfoTitle = ({ title }: InfoTitleProps) => {
  return (
    <h2 className="text-[1.5rem] text-gray-90 font-[700] leading-[2rem] tracking-[0.06rem] flex">
      <TitleIcon className="mr-[0.37rem]" />
      <span>{title}</span>
    </h2>
  );
};

export default InfoTitle;
