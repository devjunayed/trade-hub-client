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
} from "@nextui-org/react";
import Image from "next/image";
import Logo from "@/app/assets/images/trade-hub.png";
import { useUser } from "@/context/user.provider";
import { logOutUser } from "@/services/AuthService";
import { useRouter } from "next/navigation";

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
    "Log Out",
  ];

  return (
    <Navbar className="m-0 p-0 bg-background" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image height={150} width={120} src={Logo} alt="Logo image" />
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
        {user && (
          <NavbarItem className="flex">
            <Button
              as={Link}
              color="primary"
              onClick={handleLogout}
              variant="flat"
            >
              Logout
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
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
      </NavbarMenu>
    </Navbar>
  );
}
