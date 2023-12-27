import { Layout } from "~/components/layout/layout";
import HeaderAgenda from "~/components/shared/header-agenda";
import { NewsCard } from "~/components/shared/news-card";
import SideBarAgenda from "~/components/shared/sidebar-agenda";

export function NewsPage() {
  const list: number[] = new Array(5).fill(0);

  return (
    <Layout>
      <div className="mt-20 flex flex-col lg:flex-row w-full container">
        <section className="flex justify-end lg:hidden sticky top-20">
          <HeaderAgenda title="Berita" />
        </section>
        <section className="hidden lg:inline flex-autow-1/3 p-2">
          <SideBarAgenda />
        </section>
        <section className="flex-auto  w-full lg:w-2/3 text-center p-0 lg:p-2">
          <ul>
            {list.map((_item, index) => (
              <NewsCard key={index} data={list} />
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
