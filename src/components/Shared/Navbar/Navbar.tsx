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
import {  usePathname, useRouter } from "next/navigation";
import "./navbar.module.css";
import { Avatar } from "@heroui/react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function NavBar() {
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

  const menusItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Shop",
      href: "/products",
    },
  ];

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
  ];

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="2xl"
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

      {/* Large screen menu */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menusItems.map((item) => (
          <NavbarItem key={item?.label} className="">
            <Link
              className={`${
                (pathname.includes(item?.href) && item?.href !== "/") ||
                (pathname === item?.href)
                  ? "text-primary"
                  : "text-black"
              }`}
              href={item?.href}
            >
              {item?.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <div className="sm:block hidden">
          {user && (
          //    <div className="dropdown dropdown-end">
          //    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          //      <div className="w-10 rounded-full">
          //      {user?.image ? (
          //        <Avatar src={user?.image} />
          //       ) : (
          //        <Avatar name={user?.name?.slice(0, 1)} />
          //      )}
          //      </div>
          //    </div>
          //    <ul
          //      tabIndex={0}
          //      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          //      <li>
          //        <a className="justify-between">
          //          Profile
          //          <span className="badge">New</span>
          //        </a>
          //      </li>
          //      <li><a>Settings</a></li>
          //      <li><a>Logout</a></li>
          //    </ul>
          //  </div>
            <Dropdown>
              <DropdownTrigger>
                {user?.image ? (
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                ) : (
                  <Avatar name={user?.name?.slice(0, 1)} />
                )}
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new" className="text-black">
                  <Link
                    className={`${
                      theme === "light" ? "text-black" : "text-white"
                    }`}
                    href={`${
                      user?.role === "admin"
                        ? "admin-dashboard"
                        : "user-dashboard"
                    }`}
                  >
                    Dashboard
                  </Link>
                </DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  <Button
                    className="w-full bg-transparent hover:text-white"
                    onPress={handleLogout}
                  >
                    Logout
                  </Button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
        </div>

        {!user && (
          <>
            <NavbarItem className="flex">
              <Link href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem className="flex">
              <Button as={Link} color="primary" href="/register" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      {/* Navbar Menu in small device 🔽*/}
      <NavbarMenu className="bg-gray-200 text-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="" key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full "
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          {" "}
          {user && (
            <NavbarItem className="flex">
              <Button
                className="w-full"
                as={Link}
                color="danger"
                onPress={handleLogout}
                variant="flat"
              >
                Logout
              </Button>
            </NavbarItem>
          )}
        </NavbarMenuItem>
      </NavbarMenu>
      {/* Navbar Menu in small device  🔼*/}
    </Navbar>
  );
}
