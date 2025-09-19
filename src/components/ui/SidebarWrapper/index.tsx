/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { ReactNode, useState } from "react";
import {} from "@tabler/icons-react";
import { cn } from "@/utils/utils";
import { Sidebar, SidebarBody, SidebarLink } from "../Sidebar";
import { TLinkItem } from "@/types";
import { BiLogOut } from "react-icons/bi";
import { logOutUser } from "@/services/AuthService";
import { useRouter } from "next/navigation";

export function SidebarWrapper({
  children,
  links,
}: {
  children: ReactNode;
  links: TLinkItem[];
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await logOutUser();
    router.push("/login");
  };

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row w-full bg-gray-100  flex-1 mx-auto border border-neutral-200 overflow-hidden ",
        "h-[calc(100vh-66px)]"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between bg-black">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLinkWithNested key={idx} link={link} />
              ))}
              <SidebarLink
                link={{
                  href: "/",
                  label: "Logout",
                  icon: <BiLogOut color="white" className="h-5 w-5" />,
                }}
                onClick={handleLogout}
              />
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard>{children}</Dashboard>
    </div>
  );
}

// Component for handling nested links
const SidebarLinkWithNested = ({ link }: { link: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <SidebarLink
        isOpen={isOpen}
        link={link}
        onClick={() => link.subLinks && setIsOpen(!isOpen)}
      />
      {link.subLinks && isOpen && (
        <div className="p-2 pl-8 rounded-lg bg-gray-900">
          {link.subLinks.map((subLink: any, idx: number) => (
            <SidebarLink
              onClick={() => setIsOpen(!isOpen)}
              key={idx}
              link={{
                label: subLink.label,
                href: subLink.href,
                icon: subLink.icon,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Dashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-black rounded-lg flex justify-center w-full shadow-xl">
      {children}
    </div>
  );
};
