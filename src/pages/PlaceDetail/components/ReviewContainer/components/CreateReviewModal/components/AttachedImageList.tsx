import { ReactComponent as Camera } from '../../../../../../../assets/icon_camera.svg';
import { ReactComponent as Cancel } from '../../../../../../../assets/cancel.svg';
import { ChangeEvent } from 'react';

interface AttachedImageListProps {
  // eslint-disable-next-line no-unused-vars
  onChangeUploadImage: (e: ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  onChnageDeleteImage: (index: number) => void;
  uploadedImages: Array<string | ArrayBuffer | undefined | null>;
}

const AttachedImageList = ({
  onChangeUploadImage,
  onChnageDeleteImage,
  uploadedImages,
}: AttachedImageListProps) => {
  return (
    <section className="flex">
      <label className="w-[4.875rem] h-[4.875rem] bg-gray-40 flex items-center justify-center rounded-[0.25rem] cursor-pointer mr-[0.75rem]">
        <input
          type="file"
          accept="image"
          name="img"
          onChange={onChangeUploadImage}
          className="sr-only peer"
          disabled={uploadedImages.length > 4}
        />
        <Camera />
      </label>
      {uploadedImages?.map((images, idx) => (
        <div
          key={idx}
          className="relative w-[4.875rem] h-[4.875rem] mr-[0.75rem] rounded-[0.25rem] overflow-hidden"
        >
          <img src={images as string} className="w-[4.875rem] h-[4.875rem]" />
          <button
            className="absolute top-[0.37rem] right-[0.37rem] cursor-pointer"
            onClick={() => onChnageDeleteImage(idx)}
          >
            <Cancel className="fill-gray-100 w-[1.5rem] h-[1.5rem]" />
          </button>
        </div>
      ))}
    </section>
  );
};

export default AttachedImageList;
