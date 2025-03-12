import { capitalize } from "@/utils/capitalize";

const OrderStatus = ({orderStatus}: {orderStatus: string}) => {
  return (
    <div className="flex items-center gap-2 justify-center">
      {orderStatus === "processing" && (
        <span className="bg-[#FACC15] rounded-full block w-1 h-1 p-2"></span>
      )}
      {orderStatus === "shipping" && (
        <span className="bg-[#3882F6] rounded-full block w-1 h-1 p-2"></span>
      )}
      {orderStatus === "canceled" && (
        <span className="bg-[#EF4444] rounded-full block w-1 h-1 p-2"></span>
      )}
      {orderStatus === "completed" && (
        <span className="bg-[#22C55E] rounded-full block w-1 h-1 p-2"></span>
      )}
      {capitalize(orderStatus)}
    </div>
  );
};

export default OrderStatus;
