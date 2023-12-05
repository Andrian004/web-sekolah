import { useState } from "react";
import { Button } from "~/components/ui/button";
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
import { cn } from "~/utils/cn";

type Socmed = {
  icon: React.ReactNode;
  onHover: string;
  link: string;
  tooltip: string;
};

const SocmedList: Socmed[] = [
  {
    icon: <TbBrandFacebookFilled />,
    onHover: "hover:text-blue-600",
    link: "https://github.com/Andrian004",
    tooltip: "Facebook",
  },
  {
    icon: <TbBrandYoutubeFilled />,
    onHover: "hover:text-red-600 ",
    link: "https://github.com/Andrian004",
    tooltip: "Youtube",
  },
  {
    icon: <TbBrandInstagram />,
    onHover: "hover:text-pink-700 ",
    link: "https://github.com/Andrian004",
    tooltip: "Instagram",
  },
  {
    icon: <TbBrandX />,
    onHover: "hover:text-black",
    link: "https://github.com/Andrian004",
    tooltip: "X (aja)",
  },
];

export default function SideBarAgenda() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
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
                    className={cn(
                      `border-2 border-primary text-emerald-900 p-2 rounded-full transition duration-300`,
                      item.onHover
                    )}
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
    </>
  );
}
