import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TbBaselineDensityMedium, TbCaretDownFilled } from "react-icons/tb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

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
  { text: "BERANDA", path: "/", dropdown: false },
  { text: "BERITA", path: "/news", dropdown: false },
  { text: "AGENDA", path: "/plan", dropdown: false },
  {
    text: "STAFF",
    dropdown: true,
    dropdownItems: [
      { text: "PENDIDIK", path: "/staff" },
      { text: "NON PENDIDIK", path: "/staff" },
    ],
  },
  {
    text: "TENTANG",
    dropdown: true,
    dropdownItems: [
      { text: "SEJARAH", path: "/about" },
      { text: "CONTACT", path: "/about" },
    ],
  },
];

export function HeaderNavigation() {
  return (
    <header className="z-10 w-full fixed top-0 flex items-center justify-center bg-primary text-white py-4 text-sm px-2">
      <nav className="w-full flex max-w-6xl items-center justify-between">
        <span className="text-2xl font-semibold">Web Sekolah</span>
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
    <>
      {/* md and above */}
      <ul className="hidden md:flex gap-6">
        {navItems.map((navItem, index) => {
          return (
            <li key={index} className="px-4 py-2 rounded-md font-semibold">
              {!navItem.dropdown ? (
                <NavLink
                  to={navItem.path ? navItem.path : ""}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-green-700 px-4 py-2 rounded-full"
                      : "text-white"
                  }
                  end>
                  {navItem.text}
                </NavLink>
              ) : (
                <HoverCard
                  openDelay={50}
                  closeDelay={100}
                  onOpenChange={(e) => {
                    setIsOpen(e);
                    setListIndex(index);
                  }}>
                  <HoverCardTrigger className="hover:cursor-pointer flex items-center gap-1">
                    {navItem.text}
                    <TbCaretDownFilled
                      className={
                        isOpen && index === listIndex
                          ? "rotate-180 ease-linear duration-300"
                          : "ease-linear duration-300"
                      }
                    />
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
                                ? "mb-2 px-4 py-2 rounded-full hover:bg-primary hover:text-white bg-primary"
                                : "mb-2 px-4 py-2 rounded-full hover:bg-primary hover:text-white"
                            }
                            end>
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

      {/* under md */}
      <Sheet>
        <SheetTrigger className="md:hidden text-3xl p-1">
          <TbBaselineDensityMedium />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="text-left">
            <SheetTitle>Web Sekolah</SheetTitle>
            <div className="flex flex-col gap-2">
              {navItems.map((navItem, index) => {
                return (
                  <div key={index}>
                    {!navItem.dropdown ? (
                      <NavLink
                        to={navItem.path ? navItem.path : ""}
                        className={({ isActive }) =>
                          isActive
                            ? "w-full p-1 font-semibold text-primary rounded"
                            : "w-full p-1 font-semibold"
                        }>
                        {navItem.text}
                      </NavLink>
                    ) : (
                      <Accordion type="single" collapsible>
                        <AccordionItem className="border-b-0" value="item-1">
                          <AccordionTrigger className="p-1 focus:no-underline">
                            {navItem.text}
                          </AccordionTrigger>
                          {navItem.dropdownItems?.map((item, index) => {
                            return (
                              <AccordionContent key={index}>
                                <NavLink to={item.path}>{item.text}</NavLink>
                              </AccordionContent>
                            );
                          })}
                        </AccordionItem>
                      </Accordion>
                    )}
                  </div>
                );
              })}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
