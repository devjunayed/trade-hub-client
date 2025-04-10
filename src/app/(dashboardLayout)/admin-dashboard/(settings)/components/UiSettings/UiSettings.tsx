"use client"
import React from "react";
import SettingTitle from "../SettingTitle";
import SettingRow from "../SettingRow";
import FileUpload from "@/components/ui/FileUpload/file-upload";

const UiSettings = () => {
  
  const handleFileUpload = (file: any) => {

  }
  return (
    <div>
      <SettingTitle settingTitle="UI Settings" />
      <SettingRow name="Upload Logo" description="Logo for the websites.">
        <div>
          <FileUpload handleFileUpload={handleFileUpload}/>
        </div>
      </SettingRow>
    
      <SettingRow name="Upload Logo For Dark Mode" description="Logo for the websites.">
        <div>
          <FileUpload handleFileUpload={handleFileUpload}/>
        </div>
      </SettingRow>
    
    </div>
  );
};

export default UiSettings;
