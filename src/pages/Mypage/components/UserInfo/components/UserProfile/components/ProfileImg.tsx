import { ReactComponent as EditButton } from '../../../../../../../assets/icon_edit_profile.svg';

interface ProfileImgProps {
  imgSrc?: string | undefined;
  editToggle: boolean;
}

const ProfileImg = ({ imgSrc }: ProfileImgProps) => {
  return (
    <div className="relative h-[10rem]">
      <img
        src={imgSrc ? imgSrc : ''}
        alt="img"
        className="bg-[#D9D9D9] w-[10rem] h-[10rem] rounded-full border-none text-center"
      />
      <EditButton className="absolute bottom-[0.7rem] right-[0.85rem] cursor-pointer" />
    </div>
  );
};

export default ProfileImg;
