import { Layout } from "~/components/layout/layout";
import PlanCard from "~/components/shared/plan-card";

export function PlanPage() {
  const list: number[] = new Array(5).fill(0);
  return (
    <Layout>
      <div className="mt-20 flex w-full container">
        <section className="flex-auto w-1/3 bg-primary">
          <div className="search">search</div>
          <div className="search">filter by date</div>
          <div className="search">social media</div>
        </section>
        <section className="flex-auto w-2/3 text-center p-2">
          {list.map((item, index) => (
            <PlanCard key={index} />
          ))}
        </section>
      </div>
    </Layout>
  );
}
