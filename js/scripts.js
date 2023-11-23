/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})
//! Consumir API para usuarios random
let userCount = 8;

function fetchRandomUsers() {
    fetch(`https://randomuser.me/api/?results=${userCount}`)
    .then(response => response.json())
    .then(data => {
        const users = data.results;
        const userContainer = document.getElementById('user-container');
        
        users.forEach(user => {
        const userName = `${user.name.first} ${user.name.last}`;
        const userImage = user.picture.large;
        const userCity = user.location.city;

        const userCard = document.createElement('div');
        userCard.classList.add('col-md-6', 'col-lg-3', 'user-card');
        userCard.innerHTML = `
        <div class="card rounded-2">
            <img src="${userImage}" class="card-img-top" alt="${userName} Image">
            <div class="card-body">
                <h5 class="card-subtitle">${userName}</h5>
                <p class="card-text small">Ciudad: ${userCity}</p>
            </div>
        </div>
        `;

        userContainer.appendChild(userCard);
        });
    })
    .catch(error => console.error('Error al obtener usuarios:', error));
}

function fetchMoreUsers() {
    userCount += 4;
    fetchRandomUsers();
}

// Cargar usuarios iniciales al cargar la página
fetchRandomUsers();