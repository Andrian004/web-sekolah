type NavItem = {
  text: string;
};

const navPublicItems: NavItem[] = [
  { text: "Beranda" },
  { text: "Artikel" },
  { text: "Tentang" },
  { text: "Kontak" },
];

export function HeaderNavigation() {
  return (
    <header className="z-10 sticky top-0 flex items-center justify-center bg-indigo-500 text-white py-4 text-lg">
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
          <li
            key={navItem.text}
            className="hover:bg-indigo-600 px-4 py-2 rounded-md">
            {navItem.text}
          </li>
        );
      })}
    </ul>
  );
}
