interface InfoTitleProps {
  type: 'basic' | 'contact';
}

const InfoTitle = ({ type }: InfoTitleProps) => {
  return (
    <span className="text-sm text-dark w-full py-3 border-b">
      {type === 'basic' ? '✦ 기본정보' : '✦ 연락처정보'}
    </span>
  );
};

export default InfoTitle;
