import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="w-full h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
      <h1 className="text-white text-7xl font-semibold drop-shadow">
        SMA N 1 SURAKARTA
      </h1>
      <form className="flex w-2/3 rounded-md mt-16 bg-white rounded-full shadow-inner p-1">
        <input
          className="w-full h-full rounded-l-full focus:border-none focus:outline-none text-xl px-5 py-3"
          type="text"
          placeholder="Cari apa bang?"
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
