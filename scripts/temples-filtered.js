const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const cards = document.querySelector('#cards');

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California",
        dedicated: "1993, April, 30",
        area: 72000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-39445.jpg"
    },
    {
        templeName: "Boise Idaho",
        location: "Boise, Idaho",
        dedicated: "1984, May, 25",
        area: 35868,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/boise-idaho-temple/boise-idaho-temple-3851.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Quezon City, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-42957.jpg"
    }
];





const templeCards = (temples) => {
    document.querySelector('#cards').innerHTML = '';
    temples.forEach((temple) => {

        let card = document.createElement('section');
        let tName = document.createElement('h2');
        let loc = document.createElement('p');
        let date = document.createElement('p');
        let templeArea = document.createElement('p');
        let img = document.createElement('img');

        tName.textContent = `${temple.templeName}`;
        loc.textContent = `Location: ${temple.location}`;
        date.textContent = `Dedicated: ${temple.dedicated}`;
        templeArea.textContent = `Size: ${temple.area} sq ft`;

        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', `${temple.templeName} Temple`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '250');
        img.setAttribute('height', '100');

        card.appendChild(tName);
        card.appendChild(img);
        card.appendChild(loc);
        card.appendChild(date);
        card.appendChild(templeArea);

        cards.appendChild(card);
    });

}


const home = document.querySelector('#home');
const old = document.querySelector('#old');
const newTemples = document.querySelector('#new');
const large = document.querySelector('#large');
const small = document.querySelector('#small');

home.addEventListener('click', () => {
    templeCards(temples);
});

old.addEventListener('click', () => {
    let oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    templeCards(oldTemples);
});

newTemples.addEventListener('click', () => {
    let newT = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    templeCards(newT);
});

large.addEventListener("click", () => {
    const LargeTemples = temples.filter(temple => temple.area > 90000)
    templeCards(LargeTemples);

});
small.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => temple.area < 10000)
    templeCards(smallTemples);
});





