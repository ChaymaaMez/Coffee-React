import React from 'react'
import Wrapper from "../wrapper/Wrapper"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Img1 from "../../assets/pasty-1.png"
import Img2 from "../../assets/pasty-2.png"
import Img3 from "../../assets/pasty-3.png"
import Img4 from "../../assets/pasty-4.png"
import Img5 from "../../assets/pasty-5.png"
import Img6 from "../../assets/pasty-6.png"
import Img7 from "../../assets/pasty-7.png"
import Img8 from "../../assets/pasty-8.png"
import Img9 from "../../assets/pasty-9.png"
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const data =[
    {
      name: "Donut",
      price:"6$",
      img : Img1,
    },
    {
      name: "Caramel bun",
      price:"16$",
      img : Img2,
    },
    {
      name: "Chocolate cookies",
      price:"8$",
      img : Img3,
    },
    {
      name: "Cream cake",
      price:"12$",
      img : Img4,
    },
    {
      name: "Bun with kiwi",
      price:"6$",
      img : Img5,
    },
    {
      name: "Croissant",
      price:"5$",
      img : Img6,
    },
    {
      name: "Three donuts",
      price:"7$",
      img : Img7,
    },
    {
      name: "sugar bun",
      price:"11$",
      img : Img8,
    },
    {
      name: "cinnamon bun",
      price:"12$",
      img : Img9,
    },
  ]
const Pastries = () => {
  return <section className="flower">
    <Wrapper>
        <div className="flower__text">
            <h2>Pastries</h2>
            <p>
            they are very soft and don't leave anywhere there is any pain. 
         He likes to take care of his family. The exercise will come to fruition.
            </p>
        </div>
        <Carousel responsive={responsive} infinite={true} 
      removeArrowOnDeviceType={["tablet"]} autoPlay={true}>
  {data.map(({name,price, img})=>(
    <div className="flower__card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  ))}
</Carousel>
<div className="flower btn">
  <button className="button-primary">Go To Menu</button>
</div>
    </Wrapper>
  </section>
}

export default Pastries