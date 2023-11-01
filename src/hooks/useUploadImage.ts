import { ChangeEvent, useState } from 'react';

const useUploadImage = () => {
  const [uploadedFiles, setUploadedFiles] = useState<
    Array<string | ArrayBuffer | undefined | null>
  >([]);

  const handleUploadFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;
    const uploadedFile = files[0];
    const reader = new FileReader();

    reader.onload = e => {
      setUploadedFiles([...uploadedFiles, e.target?.result]);
    };

    reader.readAsDataURL(uploadedFile);
  };

  const handleDeleteFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, idx) => idx !== index);
    setUploadedFiles(newFiles);
  };

  return { uploadedFiles, handleUploadFiles, handleDeleteFile };
};

export default useUploadImage;
