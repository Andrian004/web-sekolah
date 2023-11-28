import { Link } from "react-router-dom";
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
          <Card className="group h-full shadow-none p-2 border-none">
            <div className="w-full relative overflow-hidden rounded-t-lg">
              <img
                className="w-full hover:scale-125 transition-transform duration-500 object-cover border"
                width={350}
                height={250}
                src="https://picsum.photos/350/250"
                alt={item.judulberita}
              />
            </div>

            <div className="mt-5 space-y-4">
              <h3 className="font-semibold">{item.judulberita}</h3>
              <p className="text-muted-foreground">{item.deskripsi}</p>
              <p className="text-xs">
                <time>{formatDateTime(item.tanggalBerita)}</time>
              </p>
              <p className="text-base font-semibold hover:text-primary transition duration-100 w-fit">
                <Link to={"/"}> READ MORE</Link>
              </p>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}
