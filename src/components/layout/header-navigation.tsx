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
  { text: "Artikel", path: "/news", dropdown: false },
  {
    text: "Staff",
    dropdown: true,
    dropdownItems: [
      { text: "Pendidik", path: "/news" },
      { text: "Non Pendidik", path: "/news" },
    ],
  },
  {
    text: "Tentang",
    dropdown: true,
    dropdownItems: [
      { text: "Sejarah", path: "/news" },
      { text: "Contact", path: "/news" },
    ],
  },
];

export function HeaderNavigation() {
  return (
    <header className="z-10 sticky top-0 flex items-center justify-center bg-primary text-white py-4 text-lg">
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
  return (
    <ul className="flex gap-8">
      {navItems.map((navItem) => {
        return (
          <li key={navItem.text} className="px-4 py-2 rounded-md">
            {!navItem.dropdown ? (
              <NavLink to={navItem.path ? navItem.path : ""}>
                {navItem.text}
              </NavLink>
            ) : (
              <HoverCard openDelay={300} closeDelay={150}>
                <HoverCardTrigger className="hover:cursor-pointer">
                  {navItem.text}
                </HoverCardTrigger>
                <HoverCardContent className="mt-6">
                  <ul>
                    {navItem.dropdownItems?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="mb-2 p-1 rounded hover:bg-primary hover:text-white"
                        >
                          <NavLink to={item.path}>{item.text}</NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </HoverCardContent>
              </HoverCard>
            )}
          </li>
        );
      })}
    </ul>
  );
}
