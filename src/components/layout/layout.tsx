import { HeaderNavigation } from "~/components/layout/header-navigation";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="w-full">
      <HeaderNavigation />
      <main className="flex flex-col justify-center items-center gap-2 min-h-screen">
        {children}
      </main>
    </div>
  );
}
