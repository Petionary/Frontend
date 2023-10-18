import { ChangeEvent } from 'react';
import AttachedImageList from './AttachedImageList';

interface CreateReviewContentProps {
  uploadedImages: Array<string | ArrayBuffer | undefined | null>;
  content: string;
  // eslint-disable-next-line no-unused-vars
  onChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  // eslint-disable-next-line no-unused-vars
  onChangeUploadImage: (e: ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  onChnageDeleteImage: (index: number) => void;
}

const CreateReviewContent = ({
  content,
  onChangeContent,
  uploadedImages,
  onChangeUploadImage,
  onChnageDeleteImage,
}: CreateReviewContentProps) => {
  return (
    <section className="bg-gray-20 w-[39.375rem] h-[33.75rem] px-[1.5rem] pt-[1.5rem] border border-gray-40 rounded-[0.5rem]">
      <textarea
        name="content"
        value={content}
        onChange={onChangeContent}
        className="w-[36.375rem] h-[24.5rem] bg-inherit resize-none text-[0.875rem] font-[400] leading-[1.625rem] focus:outline-none"
        placeholder="작성 내용은 장소 상세에 노출되며 매장주를 포한한 다른 사용자들이 볼 수 있으니 서로를 배려하는 마음을 담아 작성해주세요. 작성한 후기는 마이페이지에서 볼 수 있어요."
      />
      <AttachedImageList
        uploadedImages={uploadedImages}
        onChangeUploadImage={onChangeUploadImage}
        onChnageDeleteImage={onChnageDeleteImage}
      />
    </section>
  );
};

export default CreateReviewContent;
