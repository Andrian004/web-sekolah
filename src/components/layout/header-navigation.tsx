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
    <header>
      <nav>
        <ul>
          <NavigationList navItems={navPublicItems} />
        </ul>
      </nav>
    </header>
  );
}

export function NavigationList({ navItems }: { navItems: NavItem[] }) {
  return (
    <>
      {navItems.map((navItem) => {
        return <li key={navItem.text}>{navItem.text}</li>;
      })}
    </>
  );
}
