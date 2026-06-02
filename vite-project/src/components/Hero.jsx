import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'
const slides = [
  {
    title: 'IRON MAN',
    desc: `A visionary mind wrapped in cutting-edge armor. Powered by intellect, not superpowers. Tony Stark builds solutions where others see limits. Innovation, sacrifice, and responsibility define him. A hero forged by choice, not destiny.`,
    bg: 'linear-gradient(135deg, #1a0000, #3b0a0a, #090000)',
    image: './images/a1.png',
    offsetX: 0,            
  },
  {
    title: 'THOR',
    desc: `Born a god, tempered by humility. Wielder of Mjolnir and protector of realms. Strength guided by honor and loyalty. Thunder follows his command. A warrior learning what it truly means to be worthy.`,
    bg: 'linear-gradient(135deg, #020a18, #071d3a, #010409)',
    image: './images/a2.png',
    offsetX: 60,             
  },
  {
    title: 'SPIDER MAN',
    desc: `A friendly neighborhood hero with a heavy heart. Gifted with power, bound by responsibility. Balances courage, doubt, and sacrifice. Every fall teaches resilience. Proof that even ordinary lives can become extraordinary.`,
    bg: 'linear-gradient(135deg, #050505, #1a0000, #020b14)',
    image: './images/a3.png',
    offsetX: 210,            
  },
  {
    title: 'CAPTAIN AMERICA',
    desc: `A symbol of hope in the face of chaos. Strength rooted in unwavering morals. Leads not by force, but by example. Loyal to truth, justice, and humanity. A soldier who never stops standing for what’s right.`,
    bg: 'linear-gradient(135deg, #020f08, #06301a, #010805)',
    image: './images/a4.png',
    offsetX: 250,
  },
]

const Hero = () => {
  const [index, setIndex] = useState(0)

  const next = () => {
    if (index < slides.length - 1) {
      setIndex((prev) => prev + 1)
    }
  }

  return (
    <section className="hero" style={{ background: slides[index].bg }}>

      <div className="left-stack">
        {slides.slice(0, index).map((slide) => (
          <motion.div
            key={slide.image}
            className="stack-image"
            layoutId={slide.image}
            layout="position"
            style={{ background: slide.bg }}
          >
            <img src={slide.image} alt="" />
          </motion.div>
        ))}
      </div>

      <div className="main-slide">
      <AnimatePresence mode="wait">
  <motion.div
    key={slides[index].title}
    className="hero-text"
    initial={{ y: 40, opacity: 0 }}   
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -20, opacity: 0 }}
    transition={{
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    }}

  >
    <h1>{slides[index].title}</h1>
    <p>{slides[index].desc}</p>
  </motion.div>
</AnimatePresence>


        <div
  className={`hero-image ${index === slides.length - 1 ? 'center-image' : ''}`}
>        <AnimatePresence mode="wait" initial={false}>
<motion.img
  key={slides[index].image}
  layoutId={slides[index].image}
  layout="position"
  src={slides[index].image}
  alt=""
  initial={{
    opacity: 0,
    x: 120 + (slides[index].offsetX || 0),
    scale: 1,
  }}
  animate={{
    opacity: 1,
    x: slides[index].offsetX || 0,   
    scale: 1,
  }}
  exit={{
    scale: 0.35,
    opacity: 1,
    transformOrigin: 'right center',
  }}
  transition={{
    layout: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
    x: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
    scale: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  }}
/>


</AnimatePresence>

</div>

      </div>

   
      <button className="arrow right" onClick={next}>
        ›
      </button>
    </section>
  )
}

export default Hero
