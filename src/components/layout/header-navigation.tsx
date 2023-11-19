import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";

type DropdownItem = {
  text: string;
  path: string;
};

type NavItem = {
  text: string;
  dropdown: boolean;
  dropdownItems?: DropdownItem[];
  path?: string;
};

const navPublicItems: NavItem[] = [
  { text: "Beranda", path: "/", dropdown: false },
  { text: "Berita", path: "/news", dropdown: false },
  { text: "Agenda", path: "/plan", dropdown: false },
  {
    text: "Staff",
    dropdown: true,
    dropdownItems: [
      { text: "Pendidik", path: "/staff" },
      { text: "Non Pendidik", path: "/staff" },
    ],
  },
  {
    text: "Tentang",
    dropdown: true,
    dropdownItems: [
      { text: "Sejarah", path: "/about" },
      { text: "Contact", path: "/about" },
    ],
  },
];

export function HeaderNavigation() {
  return (
    <header className="z-10 w-full fixed top-0 flex items-center justify-center bg-primary text-white py-4 text-lg">
      <nav className="w-full flex max-w-6xl items-center justify-between">
        <span>Web Sekolah</span>
        <div className="flex justify-between">
          <NavigationList navItems={navPublicItems} />
        </div>
      </nav>
    </header>
  );
}

export function NavigationList({ navItems }: { navItems: NavItem[] }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [listIndex, setListIndex] = useState<number>(0);

  return (
    <ul className="flex gap-8">
      {navItems.map((navItem, index) => {
        return (
          <li key={index} className="px-4 py-2 rounded-md">
            {!navItem.dropdown ? (
              <NavLink
                to={navItem.path ? navItem.path : ""}
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-white"
                }
                end
              >
                {navItem.text}
              </NavLink>
            ) : (
              <HoverCard
                openDelay={200}
                closeDelay={100}
                onOpenChange={(e) => {
                  setIsOpen(e);
                  setListIndex(index);
                }}
              >
                <HoverCardTrigger className="hover:cursor-pointer flex gap-1">
                  {navItem.text}
                  <div
                    className={
                      isOpen && index === listIndex
                        ? "rotate-180 ease-linear duration-300"
                        : "ease-linear duration-300"
                    }
                  >
                    <i className={`bi bi-caret-down-fill`}></i>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="mt-6">
                  <div className="flex flex-col">
                    {navItem.dropdownItems?.map((item, index) => {
                      return (
                        <NavLink
                          to={item.path}
                          key={index}
                          className={({ isActive }) =>
                            isActive
                              ? "mb-2 p-1 rounded hover:bg-primary hover:text-white bg-primary"
                              : "mb-2 p-1 rounded hover:bg-primary hover:text-white"
                          }
                          end
                        >
                          {item.text}
                        </NavLink>
                      );
                    })}
                  </div>
                </HoverCardContent>
              </HoverCard>
            )}
          </li>
        );
      })}
    </ul>
  );
}
