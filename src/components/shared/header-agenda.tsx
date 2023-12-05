import { useEffect, useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { AiOutlineClose } from "react-icons/ai";
import {
  TbMessageCircle,
  TbSearch,
  TbBrandFacebookFilled,
  TbBrandInstagram,
  TbBrandX,
  TbBrandYoutubeFilled,
  TbChevronsUp,
} from "react-icons/tb";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Input } from "../ui/input";
import { cn } from "~/utils/cn";
import debounce from "~/utils/debounce";

export default function () {
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const SCROLL_OFFSET: number = 100;

  const handleSetScrollHeight = debounce(() => {
    setIsScroll(window.scrollY > SCROLL_OFFSET);
  }, 50);

  useEffect(() => {
    window.addEventListener("scroll", handleSetScrollHeight);

    return () => {
      window.removeEventListener("scroll", handleSetScrollHeight);
    };
  }, [handleSetScrollHeight]);

  return (
    <div
      className={cn(
        "relative bg-primary text-white duration-300 overflow-x-hidden rounded",
        isDrop && !isScroll ? "h-[110px]" : "h-[50px]",
        isScroll ? "w-[50px]" : "w-full"
      )}
    >
      <div className="flex justify-between items-center w-full h-[50px] absolute top-0 z-20 bg-primary p-2 rounded">
        {isScroll ? (
          <Button
            type="button"
            className="text-xl m-0 p-2"
            onClick={() => window.scrollTo(0, 0)}
          >
            <TbChevronsUp />
          </Button>
        ) : (
          <h1 className="text-xl">Agenda</h1>
        )}
        <div className="flex">
          <Button
            type="button"
            className="text-xl p-2"
            onClick={() => setIsDrop(!isDrop)}
          >
            {isDrop ? <AiOutlineClose /> : <TbSearch />}
          </Button>
          <DatePicker />
          <SocmedPicker />
        </div>
      </div>
      <div className="absolute bottom-0 w-full z-10 p-2">
        <form className="w-full flex">
          <Input
            type="text"
            placeholder="Search"
            className="w-full bg-slate-200 text-lg text-black rounded-l-full px-3 py-1 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            type="submit"
            variant="outline"
            className="text-2xl rounded-r-full text-emerald-900"
          >
            <TbSearch />
          </Button>
        </form>
      </div>
    </div>
  );
}

function DatePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Popover open={isOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          className="p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CalendarIcon className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 mr-2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(e) => {
            setDate(e);
            setIsOpen(false);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

function SocmedPicker() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="button" className="text-xl p-2">
          <TbMessageCircle />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex gap-3 w-auto p-2 mr-2">
        <a href="https://github.com/Andrian004">
          <TbBrandFacebookFilled />
        </a>
        <a href="https://github.com/Andrian004">
          <TbBrandInstagram />
        </a>
        <a href="https://github.com/Andrian004">
          <TbBrandYoutubeFilled />
        </a>
        <a href="https://github.com/Andrian004">
          <TbBrandX />
        </a>
      </PopoverContent>
    </Popover>
  );
}
