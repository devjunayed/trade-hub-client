"use client";
import { BiPlus } from "react-icons/bi";
import SettingTitle from "../SettingTitle";
import { useState } from "react";
import { Input, Modal } from "antd";
import FileUpload from "@/components/ui/FileUpload/file-upload";

export interface IBanner {
  imageUrl: string;
  link: string;
  title: string;
  description: string;
}

const BannerSettings = () => {
  const [banners, setBanners] = useState<IBanner>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <SettingTitle settingTitle="Manage banners" />
      <div
        onClick={() => setIsModalOpen(true)}
        className="border-2 border-dashed rounded-md w-full flex-col gap-2 flex  text-gray-500 items-center justify-center py-6"
      >
        <BiPlus size={24} />
        <p>Add Banner</p>
      </div>
      <Modal
        okText={"Submit"}
        onCancel={() => setIsModalOpen(false)}
        open={isModalOpen}
      >
        <div>
          <div className="flex justify-center ">
            <FileUpload />
          </div>
          <div>
            <Input />
            <Input />
            <Input />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BannerSettings;
