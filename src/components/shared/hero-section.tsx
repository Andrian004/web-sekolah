import { FormEvent, useState } from "react";
import { Button } from "../ui/button";

export default function Hero() {
  const [searchValue, setSearchValue] = useState<string>();

  function handleSearch(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(searchValue);
  }

  return (
    <div className="w-full h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4 md:px-0">
      <h1 className="text-slate-100 text-center text-5xl md:text-7xl font-semibold drop-shadow">
        SMA N 1 SURAKARTA
      </h1>
      <form
        onSubmit={handleSearch}
        className="flex w-full md:w-2/3 rounded-full mt-16 bg-white rounded-full shadow-inner p-1"
      >
        <input
          className="w-full h-full rounded-l-full focus:border-none focus:outline-none text-xl px-5 py-3"
          type="text"
          placeholder="Cari apa bang?"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button
          type="submit"
          className="h-full text-xl px-5 rounded-full shadow-md"
        >
          Cari
        </Button>
      </form>
    </div>
  );
}
