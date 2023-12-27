import { Link } from "react-router-dom";
import { Card } from "~/components/ui/card";
// import { News } from "~/types/news";
import { formatDateTime } from "~/utils/datetime";

interface NewsCardProps {
  data: number[];
}

export function NewsCard({ data }: NewsCardProps) {
  console.log(data);

  return (
    <li className="mb-2">
      <Card className="group h-full shadow-none p-2 border-none">
        <div className="w-full overflow-hidden rounded-t-lg">
          <img
            className="w-full h-[400px] hover:scale-125 transition-transform duration-500 object-cover border"
            width={350}
            height={250}
            src="https://picsum.photos/350/250"
            alt="..."
          />
        </div>

        <div className="mt-5 space-y-4 text-start">
          <h3 className="font-semibold">Thi is the title</h3>
          <p className="text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            distinctio corporis sunt obcaecati recusandae! Quae deleniti aliquam
            tempore provident. Facere eveniet dicta soluta ut alias error minima
            recusandae, rerum optio?
          </p>
          <p className="text-xs">
            <time>{formatDateTime(new Date())}</time>
          </p>
          <p className="text-base font-semibold hover:text-primary transition duration-100 w-fit">
            <Link to={"/"}> READ MORE</Link>
          </p>
        </div>
        <hr className="m-2" />
      </Card>
    </li>
  );
}
