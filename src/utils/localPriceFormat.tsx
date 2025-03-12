import { IconCurrencyTaka } from "@tabler/icons-react";

export function localPriceFormat(price: number) {
  const localPrice = new Intl.NumberFormat("en-IN").format(price);
  return (
    <span className="flex items-center ">
      {localPrice} <IconCurrencyTaka size={14} />
    </span>
  );
}
