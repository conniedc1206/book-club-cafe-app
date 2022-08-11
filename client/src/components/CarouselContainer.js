import React from 'react';
import { Carousel } from 'react-carousel-minimal';

const CarouselContainer = () => {
  const data = [
      {
        image: "https://images-na.ssl-images-amazon.com/images/I/51zD8-wh1sL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      },
      {
        image: "https://images-na.ssl-images-amazon.com/images/I/51PSLKlvl6L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      },
      {
        image: "https://images-na.ssl-images-amazon.com/images/I/51ZEoen1UKL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      },
      {
        image: "https://images-na.ssl-images-amazon.com/images/I/51FUHvwk0ZL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      },
      {
        image: "https://images-na.ssl-images-amazon.com/images/I/51i6+67taoL._SX375_BO1,204,203,200_.jpg",
      }
    ];


  return (
      <div>
          <div style={{ textAlign: "center" }}>
              <div style={{padding: "0 20px", justifyContent:'center'}}>
                  <Carousel
                      data={data}
                      time={3000}
                      width="850px"
                      height="500px"
                      radius="10px"
                      automatic={true}
                      dots={true}
                      pauseIconColor="white"
                      pauseIconSize="40px"
                      slideBackgroundColor="black"
                      slideImageFit="contain"
                      thumbnails={false}
                      thumbnailWidth="100px"
                      style={{
                      textAlign: "center",
                      maxWidth: "850px",
                      maxHeight: "500px",
                      margin: "20px auto",
                      }}
                  />
              </div>
          </div>
      </div>
  );
}

export default CarouselContainer