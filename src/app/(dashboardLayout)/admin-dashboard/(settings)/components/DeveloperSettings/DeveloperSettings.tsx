import React from "react";
import SettingTitle from "../SettingTitle";
import SettingRow from "../SettingRow";
import { Checkbox } from "antd";

const DeveloperSettings = () => {
  return (
    <div>
      {" "}
      <SettingTitle settingTitle="Developer Settings" />
      <SettingRow
        name="Enable/Disable developer settings"
        description="Hides Quick Login buttons from the login page."
      >
        <Checkbox />
      </SettingRow>
    </div>
  );
};

export default DeveloperSettings;
