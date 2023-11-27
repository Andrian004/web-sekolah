import {
  HeaderNavigation,
  HeaderNavigationHome,
} from "~/components/layout/header-navigation";
import { Footer } from "~/components/layout/footer";
import { useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className="w-full font-brand">
      {isHomePage ? <HeaderNavigationHome /> : <HeaderNavigation />}
      <main className="flex flex-col items-center gap-2 min-h-screen mb-96">
        {children}
      </main>
      <Footer />
    </div>
  );
}
