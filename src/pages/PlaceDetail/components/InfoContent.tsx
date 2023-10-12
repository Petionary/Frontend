interface InfoContentProps {
  info_header: string;
  info_content: string;
}

const InfoContent = ({ info_content, info_header }: InfoContentProps) => {
  return (
    <div className="flex py-[0.375rem]">
      <div className="text-[1rem] text-gray-60 font-[500] leading-[1.625rem] -tracking-[0.005rem] w-[5.505rem]">
        {info_header}
      </div>
      <div className="text-[1rem] text-gray-100 font-[400] leading-[1.625rem] -tracking-[0.005rem]">
        {info_content}
      </div>
    </div>
  );
};

export default InfoContent;
