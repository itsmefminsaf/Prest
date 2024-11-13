import sunlounger from "../assets/sunlounger.png";

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-gradient-to-br from-sky-100 to-emerald-100"
    >
      <div className="absolute bottom-0 right-0">
        <img src={sunlounger} alt="hotel" className="h-full w-full" />
      </div>
      <h1 className="absolute top-1/3 w-3/4 text-center text-7xl font-extrabold">
        Looking for a place to spend your night <br />
        <span className="bg-gradient-to-br from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Prest is here
        </span>
      </h1>
    </section>
  );
};

export default Home;
