import { useEffect, useState } from "react";

const Use_Slider = (image:string[]) => {
    const [currentIndex,setcurrentIndex] = useState<number>(0)
    useEffect(()=>{

        const interval = setInterval(() => {
            setcurrentIndex((perv)=>perv === image.length-1?0:perv+1)
        }, 5000);
        return()=>clearInterval(interval)
    },[image])
    const nextSlide = () => {
    setcurrentIndex((prev) =>
      prev === image.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setcurrentIndex((prev) =>
      prev === 0 ? image.length - 1 : prev - 1
    );
  }
    return {currentIndex,nextSlide,prevSlide}
}
 
export default Use_Slider;