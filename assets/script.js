// Tableau des slides
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Sélectionner les éléments du DOM
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');
const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');

// Index de la slide actuelle
let currentSlideIndex = 0;

// Fonction pour mettre à jour le carrousel
function updateCarousel(index) {
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`; // Mettre à jour l'image
    bannerText.innerHTML = slides[index].tagLine; // Mettre à jour le texte
    document.querySelector('.dot_selected').classList.remove('dot_selected'); // Mettre à jour les bullet points
    dotsContainer.children[index].classList.add('dot_selected');
}

// Fonction pour créer et ajouter les bullet points dynamiquement
function createBullets(slides) {
    slides.forEach((slide, index) => { // Pour itérer sur chaque élément du tableau. 
        const dot = document.createElement('div'); // Crée un nouvel élément div pour chaque bullet point.
        dot.classList.add('dot'); // Ajoute la classe dot à ce nouvel élément div.
        if (index === 0) { // Si l'élément est le premier du tableau (index 0).
            dot.classList.add('dot_selected'); // Marquer le premier point comme sélectionné
        }
        dotsContainer.appendChild(dot); // Ajoute le nouvel élément div dans le conteneur dotsContainer.
    });
}
// Appeler la fonction pour créer les bullet points en passant le tableau "slides" en argument
createBullets(slides);

// -------- Ajouter des écouteurs d'événements sur les flèches
arrowLeft.addEventListener('click', () => {
    //console.log('Flèche gauche cliquée'); 
    // Décrémenter l'index, en boucle si on atteint le début
    currentSlideIndex = (currentSlideIndex > 0) ? currentSlideIndex - 1 : slides.length - 1;
    updateCarousel(currentSlideIndex);
});

arrowRight.addEventListener('click', () => {
    // console.log('Flèche de droite cliquée');
    // Incrémenter l'index, en boucle si on atteint la fin
    currentSlideIndex = (currentSlideIndex < slides.length - 1) ? currentSlideIndex + 1 : 0;
    updateCarousel(currentSlideIndex);
});

// Initialiser le carrousel avec la première slide
updateCarousel(currentSlideIndex);


