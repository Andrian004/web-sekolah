import { getCurrentYear } from "~/utils/datetime";

export function Footer() {
  const year = getCurrentYear();

  return (
    <footer className="w-full bottom-0 flex flex-col items-center justify-center bg-primary text-white text-base px-2">
      <div className="w-full max-w-6xl grid grid-cols-3 py-16 items-center">
        <ProfileSiteFooter />
      </div>
      <section className="w-full border-t-[1px] border-green-500 flex flex-col items-center justify-center bg-primarytext-base h-20">
        <div className="w-full max-w-6xl">
          <span>Web Sekolah. All rights reserved &copy; {year}</span>
        </div>
      </section>
    </footer>
  );
}

function ProfileSiteFooter() {
  return (
    <section className="w-80 flex flex-col items-center justify-center gap-4">
      <h2>SMA Negeri 1 Surakarta</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vitae
        voluptate commodi eos maxime doloremque dolore reiciendis laudantium
        accusamus architecto.
      </p>
    </section>
  );
}
