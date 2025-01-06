import Animation from "../Animation"

function Banner() {
  return (
    <Animation>
        <section className="banner anim">
            <div className="banner__img banner__img--nosotros"></div>
            <h1 className="banner__heading">Sobre nosotros</h1>
        </section>
    </Animation>
  )
}

export default Banner;