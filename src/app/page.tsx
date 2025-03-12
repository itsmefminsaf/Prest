import Header from "@/components/Header";
import {
  Copyleft,
  Facebook,
  Instagram,
  MessageCircle,
  Youtube,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="relative flex flex-col items-center gap-5 px-2 pt-20 pb-5 sm:flex-col-reverse sm:justify-end sm:pt-32 md:h-auto md:flex-row-reverse md:justify-between md:pt-20">
        <div className="grid sm:grid-cols-2 sm:grid-rows-2 md:w-1/2 md:grid-cols-[3fr_1fr] md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-[3fr_1fr] xl:grid-cols-2 xl:grid-rows-2">
          <img src="/assets/front.jpg" className="front-img-large" />
          <img src="/assets/front2.jpg" className="front-img" />
          <img src="/assets/front3.jpg" className="front-img" />
          <img src="/assets/front4.jpg" className="front-img" />
        </div>
        <h1 className="text-fg-secondary text-center text-3xl font-extrabold md:w-1/2">
          Welcome to the <br />
          <span className="text-fg text-4xl">Great 5 star Hotel</span>
        </h1>
      </section>
      <footer
        className="bg-fg-secondary text-bg flex w-screen flex-wrap items-center justify-around gap-y-2 p-5"
        id="footer"
      >
        <ul className="flex items-center justify-center gap-3">
          <li>
            <a href="https://instagram.com">
              <Instagram />
            </a>
          </li>
          <li>
            <a href="https://whataspp.com">
              <MessageCircle />
            </a>
          </li>
          <li>
            <a href="https://facebook.com">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="https://youtube.com">
              <Youtube />
            </a>
          </li>
        </ul>
        <h4 className="flex items-center justify-center gap-2">
          <Copyleft />
          Insaf
        </h4>
      </footer>
    </main>
  );
}
