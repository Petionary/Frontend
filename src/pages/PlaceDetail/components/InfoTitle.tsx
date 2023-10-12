interface InfoTitleProps {
  title: string;
}

const InfoTitle = ({ title }: InfoTitleProps) => {
  return (
    <h2 className="w-full text-[1.5rem] font-[700] leading-[2rem] tracking-[0.06rem] pb-[1.675rem]">
      {title}
    </h2>
  );
};

export default InfoTitle;
