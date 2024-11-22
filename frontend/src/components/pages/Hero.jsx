import { useState, useEffect } from "react";

import bg1 from "/bg1.jpg";
import bg2 from "/bg2.jpg";
import bg3 from "/bg3.jpg";
import bg4 from "/bg4.jpg";

const Hero = () => {
  const imageArray = [
    { id: 0, src: bg1 },
    { id: 1, src: bg2 },
    { id: 2, src: bg3 },
    { id: 3, src: bg4 },
  ];
  const [active, setActive] = useState(0);
  const [currImg, setCurrImg] = useState(imageArray[active].src);

  const changeImg = (id) => {
    const newImg = imageArray.find((img) => img.id === id).src;
    setCurrImg(newImg);
    setActive(id);
  };

  const goLeft = () => {
    if (imageArray[active].id === 0) {
      setActive((prev) => prev + imageArray.length - 1);
    } else {
      setActive((prev) => (prev -= 1));
    }
  };

  const goRight = () => {
    if (imageArray[active].id === imageArray.length - 1) {
      setActive((prev) => prev - prev);
    } else {
      setActive((prev) => (prev += 1));
    }
  };

  useEffect(() => {
    setCurrImg(imageArray[active].src);
  }, [active]);

  return (
    <section className="h-dvh max-sm:h-auto w-full flex flex-col gap-2 justify-start items-center px-20 max-sm:px-2 pt-28 pb-20">
      <div className="w-full h-full bg-black rounded-2xl relative shadow-xl">
        {/* <div className={`bg-bg1 w-full h-full bg-center bg-cover rounded-2xl shadow-[inset_4px_4px_5px_0px_rgba(0,_0,_0,_0.1)]`}></div> */}
        <img
          src={currImg}
          alt="bg1"
          className="w-full h-full bg-center bg-cover rounded-2xl shadow-[inset_4px_4px_5px_0px_rgba(0,_0,_0,_0.1)]"
        />
      </div>
      {/* <div className="flex justify-center items-center gap-10"></div> */}
      <div className="flex justify-center items-center gap-5 ">
        <button
          onClick={goLeft}
          className="px-4 py-1 font-bold text-xl text-white rounded-full bg-black hover:bg-inactive active:bg-black"
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <div className="flex gap-2">
          {imageArray.map((item) => {
            let css = "w-2 h-2 rounded-full bg-inactive cursor-pointer";
            if (item.id === active) {
              css = "w-2 h-2 rounded-full bg-active cursor-pointer";
            }
            return (
              <div
                key={item.id}
                className={css}
                onClick={() => changeImg(item.id)}
              ></div>
            );
          })}
        </div>
        <button
          onClick={goRight}
          className="px-4 py-1 font-bold text-xl text-white rounded-full bg-black hover:bg-inactive active:bg-black"
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Hero;
