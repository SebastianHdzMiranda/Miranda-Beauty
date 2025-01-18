import { generateImageUrl } from "./generateImageUrls";

const nailsImg = generateImageUrl('servicio_1_osfbhx');
const lashesImg = generateImageUrl('servicio_2_cho05u');
const eyebrowsImg = generateImageUrl('servicio_3_a7f4lw');

export const enlaces = [
    {titulo: 'Home', to: '/'},
    {titulo: 'Nosotros', to:'/nosotros'},
    {titulo: 'Servicios', to:'/servicios'},
    // {titulo: 'Productos'},
    {titulo: 'Reservar', to:'https://wa.me/message/PT6DTZPIUFYNJ1'},
] 

export const servicios = [
    {titulo: 'Uñas', to:'/servicio_nails', img: nailsImg},
    {titulo: 'Pestañas', to:'/servicio_lashes', img: lashesImg},
    {titulo: 'Cejas', to:'/servicio_eyebrows', img: eyebrowsImg},
]; 

export const testimoniales = [
    {nombre:'Andrea Martínez' , testimonio: '"La primera vez que me puse pestañas aquí, me explicaron todo y fue muy fácil. Quedé contenta con el resultado y desde entonces siempre regreso."'},
    {nombre:'Daniela Torres' , testimonio: '"Siempre me atienden bien en este salón. Son detallistas con el trabajo y el ambiente es agradable. Mis uñas y pestañas siempre quedan como quiero."'},
    {nombre:'Paula Delgado' , testimonio: '"Me gusta mucho venir a este salón. Siempre me dejan las uñas bien hechas y las pestañas se ven naturales. El personal es amable y el lugar es cómodo."'},
]

export const sociales = [
    { nombre: 'Telefono', href: 'tel:5626864988'},
    { nombre: 'Facebook', href: 'https://www.facebook.com/miranda.cruz.9849'},
    { nombre: 'Instagram', href: 'https://www.instagram.com/'},
]

export const equipo = [
    { nombre: 'Luz Miranda', presentacion: 'Con una pasión por el cuidado personal y la belleza, Luz Miranda es una profesional dedicada con años de experiencia como lashista y manicurista. Su compromiso con la calidad y el detalle la han llevado a especializarse en técnicas innovadoras para resaltar la belleza única de cada cliente. Luz cree firmemente en la importancia de una atención personalizada y siempre se asegura de que cada visita sea una experiencia satisfactoria. Con estudios y formación continua en el arte de las uñas y las extensiones de pestañas, está constantemente actualizándose para ofrecer los mejores servicios y resultados. Su enfoque amable y profesional hace que cada cliente se sienta cuidado y en buenas manos.'}
]

export const listadoServicioNails = [
    {heading:"Vegan manicure", price:"$66", description:"Experience the best of organic and vegan body care with SpaRituals harmonizing tonic soak. We exfoliate with Indonesian ginger scrub and moisturize with our hydrating eucalyptus lotion. This luxury manicure is guaranteed bliss...well wake you up when were done."},
    {heading:"milk & honey manicure", price:"$66", description:"We invite our clients to experience our detailed manicure with added benefits of fresh milk, pure raw honey and honey granules. Cleopatra's beauty secrets revealed. Fresh milk and raw honey are known to naturally exfoliate, cleanse and fully hydrate the deepest layer of skin leaving hands silky and supple."},
    {heading:"gel polish manicure", price:"$66", description:"Cuticles Nail Spa carries gel polish from CND and OPI in a variety of colors. It goes on like polish and wears like gel."},
]

export const listadoServicioLashes = [
    {heading:"Vegan pestañas", price:"$66", description:"Experience the best of organic and vegan body care with SpaRituals harmonizing tonic soak. We exfoliate with Indonesian ginger scrub and moisturize with our hydrating eucalyptus lotion. This luxury manicure is guaranteed bliss...well wake you up when were done."},
    {heading:"milk & honey manicure", price:"$66", description:"We invite our clients to experience our detailed manicure with added benefits of fresh milk, pure raw honey and honey granules. Cleopatra's beauty secrets revealed. Fresh milk and raw honey are known to naturally exfoliate, cleanse and fully hydrate the deepest layer of skin leaving hands silky and supple."},
    {heading:"gel polish manicure", price:"$66", description:"Cuticles Nail Spa carries gel polish from CND and OPI in a variety of colors. It goes on like polish and wears like gel."},
]

export const listadoServicioEyebrows = [
    {heading:"Vegan cejas", price:"$66", description:"Experience the best of organic and vegan body care with SpaRituals harmonizing tonic soak. We exfoliate with Indonesian ginger scrub and moisturize with our hydrating eucalyptus lotion. This luxury manicure is guaranteed bliss...well wake you up when were done."},
    {heading:"milk & honey manicure", price:"$66", description:"We invite our clients to experience our detailed manicure with added benefits of fresh milk, pure raw honey and honey granules. Cleopatra's beauty secrets revealed. Fresh milk and raw honey are known to naturally exfoliate, cleanse and fully hydrate the deepest layer of skin leaving hands silky and supple."},
    {heading:"gel polish manicure", price:"$66", description:"Cuticles Nail Spa carries gel polish from CND and OPI in a variety of colors. It goes on like polish and wears like gel."},
]


export const imageUrls= [
    'https://res.cloudinary.com/dfxi2xyyw/image/upload/v1736566647/serviciosHero_h5ch0i.jpg',
]