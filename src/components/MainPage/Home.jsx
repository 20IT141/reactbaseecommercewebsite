import React from "react"
import Categories from "./Categories"
import "./Home.css"
import SlideCard from "./SlideCard"
import Slider from "./Slider"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
         <Categories/>
        <Slider/>
        {/* <SliderHome/> */}
        </div>
      </section>
    </>
  )
}

export default Home