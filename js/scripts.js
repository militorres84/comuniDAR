let currentIndex = 0;

function changeItem(index) {
    currentIndex = index;
    updateGallery();
}

function nextItem() {
    currentIndex = (currentIndex + 1) % 6;
    updateGallery();
}

function prevItem() {
    currentIndex = (currentIndex - 1 + 6) % 6;
    updateGallery();
}

function updateGallery() {
    const items = document.querySelectorAll('.gallery-item');
    const controls = document.querySelectorAll('.gallery-controls button');

    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });

    controls.forEach((control, index) => {
        control.classList.toggle('active', index === currentIndex);
    });
}























/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
// document.getElementById('formjs').addEventListener("submit", (e)=>{
// e.preventDefault();
// I let email = document.getElementById('inputEmail');
// let password = document.getElementById('inputPassword');
// if (email.value=='admin@mail.com' && password.value == '123456') { window.location.href = "page2.html";
// }
// else{
// alert('incorrect')
// }
// })
window.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;

    window.addEventListener('scroll', function() {
        const currentScrollTop = window.scrollY;

        if (currentScrollTop > lastScrollTop) {
            // Scrolling Down
            mainNav.classList.remove('is-visible');
            if (currentScrollTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        } else {
            // Scrolling Up
            mainNav.classList.remove('is-visible', 'is-fixed');

            // Esperar a que termine la transición y luego agregar la clase is-visible
            mainNav.addEventListener('transitionend', function() {
                mainNav.classList.add('is-visible');
            }, { once: true });
        }

        lastScrollTop = currentScrollTop;
    });
});

//! Mentores
function fetchRandomUsers() {
    fetch(`/assets/data/mentors.json`)
    .then(response => response.json())
    .then(data => {
        const users = data;
        const userContainer = document.getElementById('user-container');
        userContainer.classList.add('justify-content-center');
        
        const carouselInner = document.createElement('div');
        carouselInner.classList.add('carousel-inner');

        users.forEach(user => {
            const userName = user.name;
            const userCity = user.city;
            const userPosition = user.position;
            const userImage = user.img;

            const userCard = document.createElement('div');
            userCard.classList.add('col-md-6', 'col-lg-3', 'user-card');
            userCard.innerHTML = `
            <div class="card text-center rounded-3 overflow-hidden">
                <img src="${userImage}" class="card-img-top" alt="${userName} Image">
                <h5 class="card-header text-center">${userName}</h5>
                <div class="card-body">
                    <h6 class="card-subtitle m-2 text-secondary">🌍 ${userCity}</h6>
                    <p class="card-text small">${userPosition}</p>
                </div>
                <div class="card-footer text-body-secondary d-flex justify-content-between">
                    <button class="btn btn-outline-secondary btn-sm border-0 rounded-2 contact-btn" data-bs-toggle="modal" data-bs-target="#contactModal" data-mentor-name="${userName}">Contactar</button>
                    <div>
                        <a href="#main"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
            `;

            userContainer.appendChild(userCard);

            // Agregar evento de clic al botón "Contactar"
            const contactButton = userCard.querySelector('.contact-btn');
            contactButton.addEventListener('click', () => {
                // Obtener el nombre del mentor del atributo data-mentor-name
                const mentorName = contactButton.getAttribute('data-mentor-name');

                // Actualizar el título del modal con el nombre del mentor
                const modalTitle = document.getElementById('contactModalLabel');
                modalTitle.textContent = `Contactate con ${mentorName}`;

                // Limpiar el formulario al abrir el modal (opcional)
                const contactForm = document.getElementById('contactForm');
                contactForm.reset();

                // Ocultar el mensaje de envío satisfactorio al abrir el modal
                const successMessage = document.getElementById('successMessage');
                successMessage.style.display = 'none';
            });
        });

        // Agregar evento de envío del formulario
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

            // Simular el envío del formulario
            setTimeout(() => {
            // Mostrar el mensaje de envío satisfactorio
            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';
            }, 1000); // Simulando una demora de 1 segundo
        });
    })
    .catch(error => console.error('Error al obtener usuarios:', error));
}
// Cargar usuarios iniciales al cargar la página
fetchRandomUsers();

const mentorForm = document.getElementById('mentorForm');

mentorForm.addEventListener('submit', (event) => {
    // Evitar el envío del formulario por defecto
    event.preventDefault();

    // Simular el envío del formulario con un pequeño retraso (por ejemplo, 1 segundo)
    setTimeout(() => {
        // Mostrar el mensaje de éxito con SweetAlert2
        Swal.fire({
            icon: 'success',
            title: '<h3>¡Muchas gracias!</h3>',
            text: 'Estamos evaluando tu postulación.',
            showCloseButton: true,
            showConfirmButton: false,
            cancelButtonText: `
                <i class="fa fa-thumbs-down"></i>`,
        });

        // Restablecer el formulario (opcional)
        mentorForm.reset();
    }, 1000); // 1000 milisegundos = 1 segundo
});