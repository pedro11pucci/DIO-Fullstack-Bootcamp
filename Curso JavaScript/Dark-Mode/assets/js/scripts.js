const button = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];

function toggleDarkMode() {
    button.classList.toggle("dark-mode");
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

    let text = document.getElementById('page-title');
    if(body.classList.contains('dark-mode')){
        text.innerHTML = "Dark Mode ON";
        button.innerHTML = "Light Mode";
    }else{
        text.innerHTML = "Light Mode ON";
        button.innerHTML = "Dark Mode";
    }
}

button.addEventListener('click', toggleDarkMode);