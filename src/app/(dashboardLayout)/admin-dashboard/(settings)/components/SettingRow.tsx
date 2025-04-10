import { Tooltip } from "antd";
import React from "react";
import { BsQuestionCircle } from "react-icons/bs";

const SettingRow = ({
  name,
  description,
  children
}: {
  name: string;
  description?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex shadow-sm  py-2 items-center justify-between">
      <div>
        <p className="flex items-center gap-1">
          <span>{name}</span>
          <Tooltip className="block " title={description}>
            <BsQuestionCircle />
          </Tooltip>
        </p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SettingRow;
