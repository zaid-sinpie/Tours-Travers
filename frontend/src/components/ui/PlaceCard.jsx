import { ButtonPlaneBlack } from "./Buttons";

const PlaceCard = ({ tour }) => {
  return (
    <div className="w-full bg-white border border-inactive rounded-md flex max-sm:flex-col max-xl:flex-col justify-start gap-20 max-sm:gap-5 items-center px-20 max-sm:px-4 py-4">
      <img
        src={tour.image}
        alt=""
        className="w-[40%] max-sm:w-full max-xl:w-full cursor-pointer"
      />
      <div className="flex flex-col justify-center items-start gap-16 max-sm:gap-5 w-full">
        <div className="flex flex-col justify-between items-start">
          <div className="flex flex-col justify-center items-start gap-2">
            {/* <h1 className="text-4xl font-bold">Inazuma</h1> */}
            <h1 className="text-4xl font-bold">{tour.name}</h1>
            {/* <p>A place protected by Almighty Narukami Ogosho God of Thunder.</p> */}
            <p>{tour.description}</p>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-lg font-bold text-inactive">Tags</h1>
            <p>
              Best scenery | Fresh Atmosphere | Greenery | Lakes | Mountains.
            </p>
            <p className="text-inactive">
              From: <strong>{tour.from}</strong>
            </p>
            <p className="text-inactive">
              To: <strong>{tour.to}</strong>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-end w-full">
          <div className="flex flex-col justify-center items-start gap-1">
            <h4 className="text-sm text-inactive">Just at /Person</h4>
            <h1 className="text-xl">{tour.price}₹</h1>
            <ButtonPlaneBlack>Book Now</ButtonPlaneBlack>
          </div>
          <div className="flex justify-center items-center gap-4">
            <h2 className="text-inactive">Rating</h2>
            <div className="flex justify-center items-center gap-2">
              <p>s</p>
              <p>s</p>
              <p>s</p>
              <p>s</p>
              <p>s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
