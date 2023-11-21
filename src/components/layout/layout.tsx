import { HeaderNavigation } from "~/components/layout/header-navigation";
import { Footer } from "~/components/layout/footer";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="w-full font-brand">
      <HeaderNavigation />
      <main className="flex flex-col justify-center items-center gap-2 min-h-screen mb-96">
        {children}
      </main>
      <Footer />
    </div>
  );
}
