import { Button } from "~/components/ui/button";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 min-h-screen">
      <h1 className="text-indigo-700 text-4xl font-semibold">Web Sekolah</h1>
      <Button className="bg-indigo-700 hover:bg-indigo-800 px-8">Login</Button>
    </div>
  );
}
