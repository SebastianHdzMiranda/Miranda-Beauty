import { generateImageUrl } from "./generateImageUrls";

const nailsImg = generateImageUrl('servicio_1_osfbhx');
const lashesImg = generateImageUrl('kiamil5jr98te9aqyy5s');
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
    // { nombre: 'Facebook', href: 'https://www.facebook.com/miranda.cruz.9849'},
    { nombre: 'Instagram', href: 'https://www.instagram.com/miranda_beauty13/'},
]

export const equipo = [
    { nombre: 'Luz Miranda', presentacion: 'Con una pasión por el cuidado personal y la belleza, Luz Miranda es una profesional dedicada con años de experiencia como lashista y manicurista. Su compromiso con la calidad y el detalle la han llevado a especializarse en técnicas innovadoras para resaltar la belleza única de cada cliente. Luz cree firmemente en la importancia de una atención personalizada y siempre se asegura de que cada visita sea una experiencia satisfactoria. Con estudios y formación continua en el arte de las uñas y las extensiones de pestañas, está constantemente actualizándose para ofrecer los mejores servicios y resultados. Su enfoque amable y profesional hace que cada cliente se sienta cuidado y en buenas manos.'}
]

export const listadoServicioNails = [
    {heading:"Punta Diamante", description:"Este estilo de uñas combina elegancia y sofisticación. La forma de punta afilada y el acabado brillante hacen que las uñas Punta Diamante sean ideales para quienes buscan un look llamativo y glamuroso. Perfectas para ocasiones especiales o para agregar un toque de lujo a tu estilo diario."},
    {heading:"Decoración", description:"Ofrecemos una amplia gama de opciones de decoración para personalizar tus uñas según tu estilo y ocasión. Desde diseños minimalistas hasta elaborados detalles con pedrería, glitter, estampados y arte a mano alzada. Cada decoración se realiza con precisión para darle a tus uñas un toque único y especial."},
    {heading:"Relieves", description:"El servicio de relieves agrega textura y dimensión a tus uñas con diseños en 3D. Utilizamos técnicas y materiales especializados para crear detalles sobresalientes como flores, figuras geométricas, y otros patrones. Ideal para quienes buscan un estilo original y llamativo que destaca al tacto y a la vista."},
    {heading:"Acrilico frances", description:"El Acrílico Francés es una opción clásica y elegante que combina la durabilidad del acrílico con el estilo atemporal de la manicura francesa. Las uñas se construyen con una base natural y puntas blancas perfectamente definidas, logrando un acabado limpio y sofisticado, ideal para cualquier ocasión."},
    {heading:"Naturaleza", description:"Este servicio se inspira en elementos naturales para crear diseños frescos y delicados. Incluye motivos como flores, hojas, y paisajes, utilizando tonos suaves y detalles orgánicos. Perfecto para quienes buscan un look relajado y armonioso que refleje la belleza de la naturaleza."},
    {heading:"Glitter", description:"El servicio de Glitter añade un toque de brillo y glamour a tus uñas. Ofrecemos una variedad de opciones, desde detalles sutiles hasta diseños completamente cubiertos de glitter en diferentes colores y tamaños. Ideal para quienes quieren destacar y agregar un poco de destello a su estilo diario o para ocasiones especiales."},
    {heading:"Cristales", description:"El servicio de Cristales añade un toque de lujo y elegancia a tus uñas. Utilizamos cristales de alta calidad para crear diseños brillantes y sofisticados. Pueden aplicarse como acentos sutiles o en patrones más elaborados, perfectos para destacar en cualquier ocasión."},
    {heading:"Figuras", description:"Este servicio incluye la creación de diversos diseños de figuras en tus uñas, desde formas geométricas hasta personajes y símbolos. Utilizamos técnicas precisas para lograr detalles nítidos y personalizados, permitiendo expresar tu estilo y creatividad con cada diseño."},
]

export const listadoServicioLashes = [
    {heading:"Clasicas", description:"Las extensiones de pestañas clásicas ofrecen un look natural y elegante. Se aplica una extensión por cada pestaña natural, realzando su longitud y curvatura sin perder la apariencia sutil. Perfectas para quienes buscan un realce discreto que destaque la belleza natural de sus ojos."},
    {heading:"Híbrida", description:"Las extensiones de pestañas híbridas combinan la técnica clásica con la de volumen para un resultado equilibrado. Se mezclan extensiones individuales y abanicos de varias pestañas, logrando un look más lleno y definido que el clásico, pero sin llegar a ser tan denso como el volumen completo. Perfectas para quienes buscan un estilo intermedio con un toque extra de dramatismo."},
    {heading:"Volumen", description:"Las extensiones de pestañas de volumen crean un look más dramático y denso al aplicar múltiples extensiones ligeras en cada pestaña natural. Esto da como resultado un efecto más lleno, con más profundidad y definición en la mirada. Ideal para quienes buscan un estilo más atrevido, con pestañas gruesas y voluminosas."},
]

export const listadoServicioEyebrows = [
    {heading:"Laminado de Cejas", description:"El laminado de cejas es un tratamiento de belleza que moldea y fija los vellos en su lugar, logrando un acabado más ordenado y voluminoso. Se aplica un gel especializado que alisa, eleva y define cada vello de las cejas, dándoles una forma más simétrica y con mayor intensidad. Este tratamiento también ayuda a domar cejas rebeldes o dispersas, proporcionando un look natural y perfectamente peinado que puede durar varias semanas. Es ideal para quienes buscan cejas más estructuradas, sin tener que recurrir al uso constante de productos de maquillaje."},
]


export const imageUrls= [
    'https://res.cloudinary.com/dfxi2xyyw/image/upload/v1736566647/serviciosHero_h5ch0i.jpg',
]