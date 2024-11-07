import { IconBrandTabler, IconSettings, IconUserBolt } from "@tabler/icons-react";

export const links = [
    {
      label: "Dashboard",
      href: `dashboard`,
      icon: <IconBrandTabler className="text-white h-5 w-5" />,
    },
    {
      label: "Profile",
      icon: <IconUserBolt className="text-white h-5 w-5" />,
      subLinks: [
        {
          label: "Edit Profile",
          href: "/profile/edit",
          icon: <IconUserBolt className="text-white h-5 w-5" />,
        },
        { label: "View Profile", href: "/profile/view" },
      ],
    },
    {
      label: "Settings",
      href: "#",
      icon: <IconSettings className="text-white h-5 w-5" />,
    },
  ];