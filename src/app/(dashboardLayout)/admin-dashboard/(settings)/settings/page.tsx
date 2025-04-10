import React from "react";
import { BsGear } from "react-icons/bs";

import DeveloperSettings from "../components/DeveloperSettings/DeveloperSettings";
import { Button } from "antd";

const SettingsPage = () => {
  return (
    <div className="m-6  p-4 shadow-xl w-full">
      <div className="md:mx-20">
        <h1 className="text-center relative font-bold text-xl flex gap-1 items-center justify-center">
          <BsGear />
          Settings
          <Button className="absolute right-0">Save</Button>
        </h1>
        {/* Developer Settings */}
        <DeveloperSettings />
      </div>
    </div>
  );
};

export default SettingsPage;
