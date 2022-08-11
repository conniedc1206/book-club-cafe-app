import React from 'react';
import { Carousel } from 'react-carousel-minimal';

const CarouselContainer = () => {
    const data = [
        {
          image: "https://images-na.ssl-images-amazon.com/images/I/51zD8-wh1sL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          caption: "Cam Jansen: The Mystery of the Dinosaur Bones"
        },
        {
          image: "https://images-na.ssl-images-amazon.com/images/I/51PSLKlvl6L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          caption: "Magic Tree House"
        },
        {
          image: "https://images-na.ssl-images-amazon.com/images/I/51ZEoen1UKL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
          caption: "Because of Winn Dixie"
        },
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
          caption: "San Francisco"
        },
        {
          image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
          caption: "Scotland"
        }
      ];

      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <div style={{padding: "0 20px", justifyContent:'center'}}>
                    <Carousel
                        data={data}
                        time={3000}
                        width="850px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={false}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="lightgrey"
                        slideImageFit="contain"
                        thumbnails={false}
                        thumbnailWidth="100px"
                        style={{
                        textAlign: "center",
                        maxWidth: "850px",
                        maxHeight: "500px",
                        margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default CarouselContainer