/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Upload, Image, message } from "antd";
import { toast } from "react-toastify";
import type { UploadFile, UploadProps } from "antd";
import { useUploadImage } from "@/hooks/image.hook";

type FileType = NonNullable<UploadFile["originFileObj"]>;

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

interface FileUploadProps {
  handleFileUpload?: (files: string[]) => void; // Accepts array of file URLs (strings)
  initialFileUrls?: string[]; // Accepts an array of initial image URLs for preview
}

const FileUpload: React.FC<FileUploadProps> = ({
  handleFileUpload,
  initialFileUrls = [],
}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<any>([]);
  const {
    mutate: handleImageUpload,
    data: imageUrl,
    isPending,
  } = useUploadImage();
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  // Update fileList to show the initial files passed via props
  useEffect(() => {
    if (initialFileUrls.length > 0) {
      const initialFiles = initialFileUrls.map((url) => ({
        uid: url,
        name: url,
        status: "done",
        url,
        thumbUrl: url,
      }));
      setFileList(initialFiles);
      setImageUrls(initialFileUrls);
    }
  }, [initialFileUrls]);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    const newList = newFileList
      .map((list) => {
        console.log(list);
        if (list.response) {
          // if (!list.response.name.includes("https://")) {
          //   return null;
          // }
          return list.response;
        }
        return list;
      })
      .filter((list)=> list.name.includes("https://") );

    const newImagesLink = newList.map((list) => list.name) || [];
      setImageUrls(newImagesLink)
    setFileList(() => [...newList]);
  };

  console.log({ fileList });

  const customRequest = async ({ file, onSuccess, onError }: any) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      handleImageUpload(formData, {
        onSuccess: (data) => {
          const uploadedFile = {
            uid: data,
            name: data,
            status: "done",
            url: data,
            thumbUrl: data,
          };

          // Update file list with the newly uploaded file
          setFileList((prevList: any) => [...prevList, uploadedFile]);
         
          if(handleFileUpload){
            handleFileUpload([...imageUrls, uploadedFile.url as string])
          }
          onSuccess(uploadedFile);
        },
      });
    } catch (error: any) {
      toast.error("image Upload failed");
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Upload
        customRequest={customRequest}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        multiple
        onRemove={(file) => {
          // Ensure the image is removed from the list
          const newFileList = fileList.filter((f: any) => f.uid !== file.uid);
          setFileList(newFileList); // Update state to remove the file
        }}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          alt=""
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};

export default FileUpload;
