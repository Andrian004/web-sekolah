export function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-full bottom-0 flex items-center justify-center bg-primary text-white py-4 text-base h-20">
      <section className="w-full max-w-6xl">
        <span>Web Sekolah. All rights reserved &copy; {year}</span>
      </section>
    </footer>
  );
}
