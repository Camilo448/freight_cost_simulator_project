const principalPage = document.querySelector('.principal-page');
const simulatorPage = document.querySelector('.simulator-page');
const galeriePage = document.querySelector('.galerie-page')
const howWeArePage = document.querySelector('.how-we-are-page')
const simulatorPageButton = document.querySelector('.simulator-page-button')
const galeriePageButton = document.querySelector('.galerie-page-button')
const howWeAreButton = document.querySelector('.how-we-are-button')


function principal_page() {
    principalPage.style.display = 'block'
    simulatorPage.style.display = 'none'
    galeriePage.style.display = 'none'
    howWeArePage.style.display = 'none'
}

function simulator_page() {
    principalPage.style.display = 'none'
    simulatorPage.style.display = 'block'
}

function galerie_page() {
    principalPage.style.display = 'none'
    galeriePage.style.display = 'flex'
}

function how_we_are_page() {
    principalPage.style.display = 'none'
    howWeArePage.style.display = 'flex'
}

simulatorPageButton.addEventListener('click', simulator_page);
galeriePageButton.addEventListener('click', galerie_page);
howWeAreButton.addEventListener('click', how_we_are_page)

