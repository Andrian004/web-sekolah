import { useState } from "react";
import { Layout } from "~/components/layout/layout";
import { Button } from "~/components/ui/button";
import PlanCard from "~/components/shared/plan-card";
import { Input } from "~/components/ui/input";
import { Calendar } from "~/components/ui/calendar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import {
  TbBrandFacebookFilled,
  TbBrandInstagram,
  TbBrandX,
  TbBrandYoutubeFilled,
  TbSearch,
} from "react-icons/tb";

type Socmed = {
  icon: React.ReactNode;
  textColor: string;
  link: string;
  tooltip: string;
};

const SocmedList: Socmed[] = [
  {
    icon: <TbBrandFacebookFilled />,
    textColor: "text-blue-600",
    link: "https://github.com/Andrian004",
    tooltip: "Facebook",
  },
  {
    icon: <TbBrandYoutubeFilled />,
    textColor: "text-red-600 ",
    link: "https://github.com/Andrian004",
    tooltip: "Youtube",
  },
  {
    icon: <TbBrandInstagram />,
    textColor: "text-pink-700 ",
    link: "https://github.com/Andrian004",
    tooltip: "Instagram",
  },
  {
    icon: <TbBrandX />,
    textColor: "text-black",
    link: "https://github.com/Andrian004",
    tooltip: "X (aja)",
  },
];

export function PlanPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const list: number[] = new Array(5).fill(0);

  return (
    <Layout>
      <div className="mt-20 flex w-full container">
        <section className="flex-auto w-1/3 p-2">
          <div className="mb-3">
            <h4 className="w-fit text-emerald-900 font-semibold border-b-2 border-primary mb-2">
              Search
            </h4>
            <form className="w-full flex gap-1 py-2">
              <Input
                type="text"
                placeholder="Search"
                className="w-full bg-slate-200 text-lg rounded-full px-3 py-1"
              />
              <Button type="submit" className="text-2xl rounded-full">
                <TbSearch />
              </Button>
            </form>
            <hr />
          </div>
          <div className=" mb-3">
            <h4 className="w-fit text-emerald-900 font-semibold border-b-2 border-primary mb-2">
              Tanggal
            </h4>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-fit rounded-md border mb-2"
            />
            <hr />
          </div>
          <div className="socmed mb-3">
            <h4 className="w-fit text-emerald-900 font-semibold border-b-2 border-primary mb-2">
              Sosial Media
            </h4>
            <ul className="flex gap-2">
              {SocmedList.map((item, index) => (
                <TooltipProvider key={index} delayDuration={300}>
                  <Tooltip>
                    <TooltipTrigger>
                      <li
                        className={`border-2 border-primary text-emerald-900 p-2 rounded-full hover:${item.textColor} transition duration-300`}
                      >
                        <a href={item.link} className="text-3xl">
                          {item.icon}
                        </a>
                      </li>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>{item.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </ul>
          </div>
        </section>
        <section className="flex-auto w-2/3 text-center p-2">
          {list.map((_item, index) => (
            <PlanCard key={index} />
          ))}
        </section>
      </div>
    </Layout>
  );
}
