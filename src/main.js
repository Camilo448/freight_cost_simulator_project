const principalPage = document.querySelector('.principal-page');
const simulatorPage = document.querySelector('.simulator-page');
const galeriePage = document.querySelector('.galerie-page')
const simulatorPageButton = document.querySelector('.simulator-page-button')
const principalPageButton = document.querySelector('.principal-page-button')
const galeriePageButton = document.querySelector('.galerie-page-button')
const leaveGaleriePageButton = document.querySelector('.leave-galerie-page-button')


function principal_page() {
    principalPage.style.display = 'block'
    simulatorPage.style.display = 'none'
    galeriePage.style.display = 'none'
}

function simulator_page() {
    principalPage.style.display = 'none'
    simulatorPage.style.display = 'block'
}

function galerie_page() {
    principalPage.style.display = 'none'
    galeriePage.style.display = 'flex'
}

simulatorPageButton.addEventListener('click', simulator_page);
principalPageButton.addEventListener('click', principal_page);
galeriePageButton.addEventListener('click', galerie_page);
leaveGaleriePageButton.addEventListener('click', principal_page);
