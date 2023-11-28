import { Layout } from "~/components/layout/layout";
import { NewsSection } from "~/components/shared/news-section";
import Hero from "~/components/shared/hero-section";

export function HomePage() {
  return (
    <Layout>
      <Hero />
      <NewsSection />
    </Layout>
  );
}
