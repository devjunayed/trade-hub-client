import {
  IconBox,
  IconBrandTabler,
  IconPackageImport,
  IconSettings,
} from "@tabler/icons-react";
import { AiFillFolder, AiFillFolderAdd, AiFillProduct, AiOutlineFolderView } from "react-icons/ai";
import { BiPhotoAlbum } from "react-icons/bi";

export const adminLinks = [
  {
    label: "Dashboard",
    href: `admin-dashboard`,
    icon: <IconBrandTabler className="text-white h-5 w-5" />,
  },
  {
    label: "Category",
    icon: <AiFillFolder className="text-white h-5 w-5" />,
    subLinks: [
      {
        label: "Add Categroy",
        href: "admin-dashboard/add-category",
        icon: <AiFillFolderAdd className="text-white h-5 w-5" />,
      },
      {
        label: "Manage Category",
        href: "admin-dashboard/manage-category",
        icon: <AiOutlineFolderView className="text-white h-5 w-5" />,
      },
    ],
  },
  {
    label: "Products",
    icon: <AiFillProduct className="text-white h-5 w-5" />,
    subLinks: [
      {
        label: "Add Product",
        href: "admin-dashboard/add-product",
        icon: <IconPackageImport className="text-white h-5 w-5" />,
      },
      {
        label: "Manage Product",
        href: "admin-dashboard/manage-product",
        icon: <IconBox className="text-white h-5 w-5" />,
      },
    ],
  },
  {
    label: "Media",
    icon: <BiPhotoAlbum  className="text-white h-5 w-5" />,
    href: "admin-dashboard/manage-image"
  },
  {
    label: "Settings",
    href: "admin-dashboard/settings",
    icon: <IconSettings className="text-white h-5 w-5" />,
  },
];
export const userLinks = [
  {
    label: "Dashboard",
    href: `user-dashboard`,
    icon: <IconBrandTabler className="text-white h-5 w-5" />,
  },

  {
    label: "Settings",
    href: "#",
    icon: <IconSettings className="text-white h-5 w-5" />,
  },
];
