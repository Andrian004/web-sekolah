import { Button } from "~/components/ui/button";
import { Layout } from "~/components/layout/layout";

export default function HomePage() {
  return (
    <Layout>
      <h1 className="text-black text-4xl font-semibold">Web Sekolah</h1>
      <Button className="bg-primary px-8">Login</Button>
    </Layout>
  );
}
