import { ButtonText } from "../ui/Buttons";

const HomePage = () => {
  return (
    <section className="w-dvw h-dvh flex justify-center items-center px-20 max-sm:px-2 py-2">
      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <div className="flex justify-start items-start w-full">
          <h1 className="text-3xl font-bold text-inactive">
            Adventure Waiting Ahead!
          </h1>
        </div>
        <div className="w-full flex justify-between items-center max-sm:flex-wrap">
          <div className="flex justify-center items-center gap-4">
            <ButtonText>International Tours</ButtonText>
            <ButtonText>Indian Tours</ButtonText>
          </div>
          <div className="relative">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Places"
              className="outline-none border border-inactive rounded-md px-2 py-1 focus:border-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
