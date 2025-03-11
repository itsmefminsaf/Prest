import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="relative flex h-screen flex-col items-center gap-5 px-2 pt-20 pb-5 sm:h-auto sm:flex-row-reverse sm:justify-between">
        <img src="/assets/front.jpg" className="rounded-4xl p-2 sm:w-1/2" />
        <h1 className="text-fg-secondary text-center text-3xl font-extrabold sm:w-1/2">
          Welcome to the <br />
          <span className="text-fg text-4xl">Great 5 star Hotel</span>
        </h1>
      </section>
    </main>
  );
}
