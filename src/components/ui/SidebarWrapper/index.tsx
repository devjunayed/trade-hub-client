/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { ReactNode,  useState } from "react";
import {} from "@tabler/icons-react";
import { cn } from "@/lib/utils/utils";
import { Sidebar, SidebarBody, SidebarLink } from "../Sidebar";
import { links } from "@/lib/utils/sidebar.links";

export function SidebarWrapper({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 w-full flex-1 mx-auto border border-neutral-200 overflow-hidden",
        "h-[84vh]"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLinkWithNested key={idx} link={link} />
              ))}
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
        <div className="p-2 pl-8 rounded-lg bg-gray-800">
          {link.subLinks.map((subLink: any, idx: number) => (
            <SidebarLink
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
  return <div className="text-black m-4">{children}</div>;
};
