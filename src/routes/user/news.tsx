import { useQuery } from "@tanstack/react-query";
import { Layout } from "~/components/layout/layout";
import axios from "axios";

interface NewsGroup {
  id: number;
  judulberita: string;
  deskripsi: string;
  image: string;
  kategori: string;
  tanggal: string;
  tanggalBerita: string;
  created: string;
}

export function NewsPage() {
  const { isPending, error, data } = useQuery({
    queryKey: ["newsData"],
    queryFn: async (): Promise<NewsGroup[]> => {
      const { data } = await axios.get(
        "https://web-sekolah-production.up.railway.app/berita/all"
      );
      return data;
    },
  });

  if (error) console.log("An error has occurred: " + error.message);

  return (
    <Layout>
      <h1 className="text-6xl mt-20 mb-10">Newspage</h1>
      <div className="flex justify-center flex-wrap gap-2">
        {isPending ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error bro!</p>
        ) : (
          data?.map((newsItem) => (
            <NewsCard key={newsItem.id} newsItem={newsItem} />
          ))
        )}
      </div>
    </Layout>
  );
}

function NewsCard({ newsItem }: { newsItem: NewsGroup }) {
  function formatTgl(tgl: string) {
    return tgl.replace(/^(\d+)([a-zA-Z]+)(\d+)$/, "$1 $2 $3").trim();
  }

  return (
    <div className="p-2 rounded-lg bg-gray-700 w-[200px] text-white">
      <h1 className="text-xl font-semibold text-center mb-3">
        {newsItem.judulberita}
      </h1>
      <p> kategori: {newsItem.kategori}</p>
      <p className="text-md p-1 bg-white text-black my-2">
        {newsItem.deskripsi}
      </p>
      <p>tgl: {formatTgl(newsItem.tanggal)}</p>
    </div>
  );
}
