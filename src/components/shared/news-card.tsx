import { Card } from "~/components/ui/card";
import { News } from "~/types/news";
import { formatDateTime } from "~/utils/datetime";

export function NewsList({ news }: { news: News[] }) {
  if (news.length <= 0) {
    return <p>No news or still in planning.</p>;
  }

  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {news.map((item) => (
        <li key={item.id}>
          <Card className="group h-full rounded-xl p-6">
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                className="aspect-video w-full rounded-lg"
                src="https://picsum.photos/300/200"
                alt={item.judulberita}
              />
              <div className="absolute left-0 top-0 flex h-full w-full translate-y-44 cursor-pointer items-center justify-center bg-secondary/50 text-lg font-bold text-secondary-foreground opacity-0 transition duration-100 group-hover:translate-y-0 group-hover:opacity-100">
                Read More
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <h3>{item.judulberita}</h3>
              <p className="text-muted-foreground">{item.deskripsi}</p>
              <p>
                <time>{formatDateTime(item.tanggalBerita)}</time>
              </p>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}
