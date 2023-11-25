import { Layout } from "~/components/layout/layout";
import { useNews } from "~/api/news/use-news";
import { NewsList } from "~/components/shared/news-card";

export function NewsPage() {
  const news = useNews();

  return (
    <Layout>
      <h1 className="text-6xl mt-20 mb-10">Newspage</h1>
      <div className="flex justify-center flex-wrap gap-2">
        {news.isLoading && (
          <div className="py-2 text-teal-900 font-bold">Loading...</div>
        )}
        {news.error instanceof Error && <div>{news.error.message}</div>}
        {news.isSuccess && <NewsList news={news.data} />}
      </div>
    </Layout>
  );
}
