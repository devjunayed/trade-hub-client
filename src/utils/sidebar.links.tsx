import {
  IconBox,
  IconBrandTabler,
  IconPackageImport,
  IconSettings,
} from "@tabler/icons-react";
import { AiFillProduct } from "react-icons/ai";

export const adminLinks = [
  {
    label: "Dashboard",
    href: `dashboard`,
    icon: <IconBrandTabler className="text-white h-5 w-5" />,
  },
  {
    label: "Products",
    icon: <AiFillProduct className="text-white h-5 w-5" />,
    subLinks: [
      {
        label: "Add Product",
        href: "/add-product",
        icon: <IconPackageImport className="text-white h-5 w-5" />,
      },
      {
        label: "Manage Product",
        href: "/manage-product",
        icon: <IconBox className="text-white h-5 w-5" />,
      },
    ],
  },
  {
    label: "Settings",
    href: "#",
    icon: <IconSettings className="text-white h-5 w-5" />,
  },
];
export const userLinks = [
  {
    label: "Dashboard",
    href: `dashboard`,
    icon: <IconBrandTabler className="text-white h-5 w-5" />,
  },

  {
    label: "Settings",
    href: "#",
    icon: <IconSettings className="text-white h-5 w-5" />,
  },
];
