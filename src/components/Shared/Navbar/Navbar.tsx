"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import Image from "next/image";
import Logo from "@/app/assets/images/trade-hub.png";
import { useUser } from "@/context/user.provider";
import { logOutUser } from "@/services/AuthService";
import { useRouter } from "next/navigation";
import "./navbar.module.css";
import { Avatar } from "@heroui/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    await logOutUser();
    router.push("/login");
  };

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
      className=" m-0 p-0 bg-white    th-navbar"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <Image height={150} width={120} src={Logo} alt="Logo image" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarContent justify="end">
        <div className="sm:block hidden">
          {user && (
            <Dropdown>
              <DropdownTrigger>
                {user.image ? (
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                ) : (
                  <Avatar name={user.name.slice(0, 1)} />
                )}
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  <Button
                    className="w-full bg-transparent hover:text-white"
                    as={Link}
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
              size="lg"
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
