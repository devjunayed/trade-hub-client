import { Tooltip } from "antd";
import { BsQuestionCircle } from "react-icons/bs";

const SettingRow = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div>
      <div>
        <p className="flex items-center gap-1">
          <span>{name}</span>
          <Tooltip className="block " title={description}>
            <BsQuestionCircle />
          </Tooltip>
        </p>
      </div>
    </div>
  );
};

export default SettingRow;
