const principalPage = document.querySelector('.principal-page');
const simulatorPage = document.querySelector('.simulator-page');
const simulatorPageButton = document.querySelector('.simulator-page-button')
const principalPageButton = document.querySelector('.principal-page-button')


function simulator_page() {
    principalPage.style.display = 'none'
    simulatorPage.style.display = 'block'
}

function principal_page() {
    principalPage.style.display = 'block'
    simulatorPage.style.display = 'none'
}

simulatorPageButton.addEventListener('click', simulator_page);
principalPageButton.addEventListener('click', principal_page)
