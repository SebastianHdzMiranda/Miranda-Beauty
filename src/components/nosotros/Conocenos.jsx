import nosotrosImg from '../../assets/img/manicure.jpg';


function Conocenos() {
    return (
        <div className="nosotros contenedor">
            <h2 className="nosotros__heading">Conoce</h2>
            <h2 className="nosotros__subHeading">Nuestra Historia</h2>
            <p className="nosotros__texto">Juniper was founded in 2015 in a 1930’s historic studio. After 3 years Leah and Alexis decided to expand in Midtown Phoenix. We wanted to create a space where you feel like home, except you have built in caregivers to release the tensions of day to day stress. Self care is important and we want it to be easy for you to have a place to recharge your energy and well-being. Our aesthetic incorporates raw elements and natural materials. We carry a wide variety of products like organic and medical skincare for all skin types, chinese herbal medicine, essential oils and CBD.</p>
            <div className="nosotros__img">
                <img loading="lazy" decoding="async" src={nosotrosImg} width="500" height="300" alt="img nosotros"></img>
            </div>

        </div>
    )
}

export default Conocenos;