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
    {
      label: "Cart",
      href: "/cart",
    },
  ];

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

      {/* Large screen menu */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menusItems.map((item) => (
          <NavbarItem key={item?.label} className="">
            <Link
              className={`${
                (pathname.includes(item?.href) && item?.href !== "/") ||
                pathname === item?.href
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
            <NavbarItem className="hidden md:flex">
              <Link href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem className="hidden md:flex">
              <Button color="primary" href="/register" variant="flat">
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

      {/* Navbar Menu in small device 🔽 */}
      <NavbarMenu className="bg-black flex  justify-center min-h-screen text-white w-full">
        <NavbarMenuItem className="flex flex-col space-y-4 overflow-y-auto max-h-[80vh]">
          {menusItems.map((item, index) => (
            <NavbarItem className="" key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menusItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className={`${
                  pathname === item.href && "border-b-2 border-white"
                }w-full py-2`}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}

          {!user && (
            <>
              <NavbarItem className="flex items-center my-2 gap-4">
                <Link
                  className={`${
                    pathname === "/login" && "border-b-2 border-white"
                  }w-full py-2`}
                  href="/login"
                >
                  Login
                </Link>
              </NavbarItem>
              <NavbarItem className="flex items-center my-2 gap-4">
                <Link
                  className={`${
                    pathname === "/register" && "border-b-2 border-white"
                  } w-full py-2`}
                  href="/register"
                >
                  Register
                </Link>
              </NavbarItem>
            </>
          )}

          {user && (
            <>
              <NavbarItem className="flex items-center my-2 gap-4">
                <Link
                  className={`${
                    (pathname === "admin-dashboard" ||
                      pathname === "user-dashboard") &&
                    "border-b-2 border-white"
                  }w-full py-2`}
                  href={
                    user.role === "admin" ? "admin-dashboard" : "user-dashboard"
                  }
                >
                  Dashboard
                </Link>
              </NavbarItem>
              <NavbarItem className="flex items-center my-2 gap-4">
                {user?.image ? (
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                ) : (
                  <Avatar name={user?.name?.slice(0, 1)} />
                )}
                {user.name}
              </NavbarItem>
              <NavbarItem className="flex">
                <Button
                  className="w-full"
                  color="danger"
                  onPress={handleLogout}
                  variant="flat"
                >
                  Logout
                </Button>
              </NavbarItem>
            </>
          )}
        </NavbarMenuItem>
      </NavbarMenu>
      {/* Navbar Menu in small device 🔼 */}
    </Navbar>
  );
}
