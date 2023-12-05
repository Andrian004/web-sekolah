import { Link } from "react-router-dom";
import { Card } from "../ui/card";
import { formatDateOnly } from "~/utils/datetime";

export default function PlanCard() {
  const date: Date = new Date();
  return (
    <Card className="group shadow-none p-2 border-none mb-11">
      <div className="mt-5 space-y-4 text-start mb-2">
        <Link
          to={"/"}
          className="font-semibold text-xl lg:text-3xl hover:text-primary transition duration-300"
        >
          ワンピースも忘れずに見てね
        </Link>
        <h6>{formatDateOnly(date)}</h6>
        <p className="text-muted-foreground line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          sunt ipsam voluptas fuga in modi dignissimos voluptatem, enim corporis
          possimus cupiditate assumenda illo eum suscipit similique. Non tempora
          ullam similique.
        </p>

        <p className="text-base font-semibold hover:text-primary transition duration-100 w-fit">
          <Link to={"/"}> READ MORE</Link>
        </p>
      </div>
      <hr />
    </Card>
  );
}
