import React from 'react'
import ReviewCard from './ReviewCard';


import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true,
      },
      x: '-1000'
    })
  })

  const reviews = [
  {
    content: '',
    name: '',
    imgSrc: '/images/',
  },
];
  return (
    <section
    id="reviews"
    className="section overflow-hidden">
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
        What our customers say
        </h2>
 
        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {
           reviews.map(({ content, name, imgSrc}, key) => (
            <ReviewCard
            key={key}
            name={name}
            imgSrc={imgSrc}
            content={content} />
           )) 
          }
        </div>
      </div>
    </section>
  )
}

export default Review