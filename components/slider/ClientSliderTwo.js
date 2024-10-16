import React from "react";
const ClientSliderTwo = (slide) => {
  const data = [
    {
      img: "1.png",
    },
    {
      img: "2.png",
    },
    {
      img: "3.png",
    },
    {
      img: "4.png",
    },
    {
      img: "5.png",
    },
    {
      img: "6.png",
    },
    {
      img: "7.png",
    },
    {
      img: "8.png",
    },
    {
      img: "9.png",
    },
    {
      img: "10.png",
    },
    {
      img: "11.png",
    },
    ,
    {
      img: "12.png",
    },
    {
      img: "13.png",
    },
    {
      img: "14.png",
    },
    {
      img: "15.png",
    },
    {
      img: "16.png",
    },
  ];
  return (
    <>
    <div className="slidertwo">
      <div className="sliding-image-container">
        <div className="sliding-image-track">
          {data.map((item, i) => (
            <a href="/" key={i} >
              <img src={`images/clients/${item.img}`} className={slide} alt={`Client ${i + 1}`} />
            </a>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default ClientSliderTwo;