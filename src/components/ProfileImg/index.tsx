import { useEffect } from 'react';
import { ReactComponent as EditButton } from '../../assets/icon_edit_profile.svg';
import useUploadImage from '../../hooks/useUploadImage';
import { IPet, IUser } from '../../utils/type';

type ItemType = IUser | IPet;

interface ProfileImgProps<T> {
  editToggle: boolean;
  // eslint-disable-next-line no-unused-vars
  input: T;
  setInput: React.Dispatch<React.SetStateAction<T>>;
}

const ProfileImg = <T extends ItemType>({ editToggle, input, setInput }: ProfileImgProps<T>) => {
  const { uploadedFiles, handleUploadFiles } = useUploadImage();

  // const onChangeProfileImage = (e: ChangeEvent<HTMLInputElement>) => {
  //   handleUploadFiles(e);
  //   setInput({ ...input, profile_url: uploadedFiles[uploadedFiles.length - 1] as string });
  // };

  useEffect(() => {
    if (uploadedFiles.length)
      setInput({ ...input, profile_url: uploadedFiles[uploadedFiles.length - 1] as string });
  }, [uploadedFiles.length]);

  return (
    <div className="relative w-[10rem] h-[10rem]">
      <label>
        <input
          type="file"
          accept="image"
          name="imgSrc"
          onChange={handleUploadFiles}
          className="sr-only peer"
          disabled={!editToggle}
        />
        <img
          src={input?.profile_url ? input.profile_url : '../../../../../assets/img_pet_default.svg'}
          alt="user_profile"
          className="bg-[#D9D9D9] w-[10rem] h-[10rem] rounded-full border-none text-center cursor-pointer peer-disabled:cursor-auto"
        />
        <EditButton className="absolute bottom-[0.7rem] right-[0.85rem] cursor-pointer peer-disabled:cursor-auto" />
      </label>
    </div>
  );
};

export default ProfileImg;
