import { useEffect } from 'react';
import Animation from './Animation';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Testimonial from './Testimonial';
import { testimoniales } from '../data';


function Testimoniales() {
    // Config de swiper
    useEffect(() => {
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            effect: "fade",
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            loop: true,
            // autoplay:{
            //     delay: 3000,
            // },
        });
    }, []);

    return(
        <Animation>
            <div className="testimoniales anim">
                <h2 className="testimoniales__heading">Lo que dicen nuestros Clientes</h2>
                <section className="swiper mySwiper">
                    <Testimonial testimoniales={testimoniales}/>
                    
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-pagination"></div>
                </section>
            </div>
        </Animation>
    );
}

export default Testimoniales