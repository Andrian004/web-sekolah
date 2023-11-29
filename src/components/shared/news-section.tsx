import { useNews } from "~/api/news/use-news";
import { NewsList } from "~/components/shared/news-card";

export function NewsSection() {
  const news = useNews();

  return (
    <>
      <h2 className="my-10 font-bold text-emerald-800">Berita Terbaru</h2>
      <div className="flex justify-between items-center flex-wrap">
        {news.isLoading && <div className="py-2 font-bold">Loading...</div>}
        {news.error instanceof Error && <div>{news.error.message}</div>}
        {news.isSuccess && <NewsList news={news.data} />}
      </div>
    </>
  );
}
