import React from "react";

interface TSummaryCard {
  icon: JSX.Element;
  count: number;
  title: string;
  endIcon?: JSX.Element;
}

const SummaryCard = ({ icon, count, title, endIcon }: TSummaryCard) => {
  return (
    <div className="shadow-xl w-56 py-6 px-10 bg-white rounded-lg">
      <div className="flex gap-2 text-md font-semibold items-center justify-center">
        <span>{icon}</span>
        <span className="flex items-center">
          {new Intl.NumberFormat("en-IN").format(count)} {endIcon}
        </span>
      </div>
      <div className="text-md mt-2 font-semibold text-center">{title}</div>
    </div>
  );
};

export default SummaryCard;
