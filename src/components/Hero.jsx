import React from 'react'
import Animation from './Animation'

function Hero({info}) {

  return (
    <Animation>
        <section className="banner anim">
            <div className={`banner__img`} style={{  backgroundImage: `linear-gradient(to top, rgba(201, 172, 162, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url(${info.img})` }}></div>
            <h1 className="banner__heading">{info.title}</h1>
        </section>
    </Animation>
  )
}

export default Hero