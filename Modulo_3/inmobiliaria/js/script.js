const propiedades_venta = [
    {
        nombre: 'Casa en la playa',
        src: 'https://images.adsttc.com/media/images/5a58/a7ca/f197/cc1f/8600/0182/newsletter/S3_CDS-5766.jpg?1515759553',
        descripcion: 'Hermosa casa frente al mar con acceso directo a la playa.',
        ubicacion: 'Playa del Sol',
        habitaciones: 3,
        costo: 250000,
        smoke: false,  
        pets: true    
    },
    {
        nombre: 'Departamento en el centro',
        src: 'https://llosaedificaciones.com/img/blog/nota_4_interna_170323.jpg',
        descripcion: 'Moderno departamento en el centro de la ciudad.',
        ubicacion: 'Ciudad Capital',
        habitaciones: 2,
        costo: 150000,
        smoke: true,   
        pets: false    
    },
];

const propiedades_alquiler = [
    {
        nombre: 'Casa campestre',
        src: 'https://images.adsttc.com/media/images/5a32/5167/b22e/385c/9e00/00ad/large_jpg/CASA_CAMPESTRE_5_CA01ME.jpg?1513247048',
        descripcion: 'Amplia casa en el campo, ideal para familias.',
        ubicacion: 'Valle Verde',
        habitaciones: 4,
        costo: 1200,
        smoke: false,  
        pets: true     
    },
    {
        nombre: 'Departamento estudio',
        src: 'https://media-front.elmostrador.cl/2020/03/interior-monoambiente-27-metros-1-750x500-1.jpg',
        descripcion: 'Pequeño departamento ideal para una persona.',
        ubicacion: 'Ciudad Jardín',
        habitaciones: 1,
        costo: 600,
        smoke: true,   
        pets: false    
    },
];

function renderizarPropiedades(propiedades, contenedor, limite = 3) {
    let html = '';  
    propiedades.slice(0, limite).forEach(propiedad => {
        html += `
            <div class="propiedad">
                <img src="${propiedad.src}" alt="${propiedad.nombre}">
                <h2>${propiedad.nombre}</h2>
                <p>${propiedad.descripcion}</p>
                <p>Ubicación: ${propiedad.ubicacion}</p>
                <p>Habitaciones: ${propiedad.habitaciones}</p>
                <p>Costo: $${propiedad.costo}</p>
                <p class="${propiedad.smoke ? 'permitido' : 'prohibido'}">
                    ${propiedad.smoke ? '✔️ Se permite fumar' : '❌ No se permite fumar'}
                </p>
                <p class="${propiedad.pets ? 'permitido' : 'prohibido'}">
                    ${propiedad.pets ? '✔️ Se permiten mascotas' : '❌ No se permiten mascotas'}
                </p>
            </div>
        `;
    });
    document.getElementById(contenedor).innerHTML = html; 
}


renderizarPropiedades(propiedades_venta, 'propiedades-venta');
renderizarPropiedades(propiedades_alquiler, 'propiedades-alquiler');
