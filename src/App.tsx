import { Button } from "~/components/ui/button";
import { Layout } from "~/components/layout/layout";

export default function App() {
  return (
    <Layout>
      <h1 className="text-indigo-700 text-4xl font-semibold">Web Sekolah</h1>
      <Button className="bg-indigo-500 hover:bg-indigo-800 px-8">Login</Button>
    </Layout>
  );
}
