/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import Image from "next/image";
import Logo from "@/app/assets/images/trade-hub.png";
import { useUser } from "@/context/user.provider";
import { logOutUser } from "@/services/AuthService";
import { usePathname, useRouter } from "next/navigation";
import "./navbar.module.css";
import { Avatar } from "@heroui/react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function DashboardNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, [user]);

  if (!mounted) return null;

  const handleLogout = async () => {
    await logOutUser();
    router.push("/login");
  };

  return (
    <Navbar
      maxWidth="full"
      shouldHideOnScroll
      className={`${
        theme === "light" ? "bg-white" : "bg-black"
      } m-0 p-0     th-navbar shadow-md`}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link
            className={`${
              theme === "dark" && "bg-white px-4 py-1"
            }  rounded-sm`}
            href="/"
          >
            <Image height={150} width={120} src={Logo} alt="Logo image" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <div className="">
          {user && (
            <div className="flex md:gap-2 gap-1  items-center">
              <p className="md:block hidden"> Hello, {user.name}</p>
              {user?.image ? (
                <Avatar  src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              ) : (
                <Avatar name={user?.name?.slice(0, 1)} />
              )}
            </div>
          )}
        </div>
      </NavbarContent>
    </Navbar>
  );
}
