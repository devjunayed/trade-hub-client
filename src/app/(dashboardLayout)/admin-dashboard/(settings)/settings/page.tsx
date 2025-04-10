import React from "react";
import { BsGear } from "react-icons/bs";
import SettingTitle from "../components/SettingTitle";
import SettingRow from "../components/SettingRow";

const SettingsPage = () => {
  return (
    <div className="m-6 p-4 shadow-xl w-full">
      <h1 className="text-center font-bold text-xl flex gap-1 items-center justify-center">
        <BsGear />
        Settings
      </h1>
      {/* Developer Settings */}
      <SettingTitle settingTitle="Developer Settings" />
      <SettingRow
        name="Enable/Disable developer settings"
        description="Hides Quick Login buttons from the login page."
      />
    </div>
  );
};

export default SettingsPage;
