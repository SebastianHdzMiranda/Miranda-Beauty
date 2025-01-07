import React from 'react'
import Animation from './Animation'

function Hero({info}) {
  return (
    <Animation>
        <section className="banner anim">
            <div className={`banner__img banner__img--${info.img}`}></div>
            <h1 className="banner__heading">{info.title}</h1>
        </section>
    </Animation>
  )
}

export default Hero