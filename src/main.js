const principalPage = document.querySelector('principal-page');
const simulatorPage = document.querySelector('simulator-page');
const simulatorPageButton = document.querySelector('simulator-page-button')





simulatorPageButton.addEventListener('click', simulator_page);



function simulator_page() {
    simulatorPage.classList.toggle('active')
}