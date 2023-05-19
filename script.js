const DARK_THEME = "dark";
const LIGHT_THEME = "light";
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Dark or Light Images
const imageSwitch = (color) => {
    image1.src = `img/analysis_${color}.svg`;
    image2.src = `img/mindfulness_${color}.svg`;
    image3.src = `img/healthy_habit_${color}.svg`;
};

const toggleTheme = (DARK_THEME) => {
    nav.style.backgroundColor = DARK_THEME
        ? "rgb(0 0 0 / 50%)"
        : "rgb(255 255 255 / 50%)";
    textBox.style.backgroundColor = DARK_THEME
        ? "rgb(255 255 255 / 50%"
        : "rgb(0 0 0 / 50%)";
    toggleIcon.children[0].textContent = DARK_THEME
        ? "Dark Mode"
        : "Light Mode";
    DARK_THEME
        ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
        : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
    DARK_THEME ? imageSwitch(DARK_THEME) : imageSwitch(LIGHT_THEME);
};

// Switch Theme
const switchTheme = (event) => {
    // console.log(event);
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", DARK_THEME);
        localStorage.setItem("theme", DARK_THEME);
        toggleTheme(DARK_THEME);
    } else {
        document.documentElement.setAttribute("data-theme", LIGHT_THEME);
        localStorage.setItem("theme", LIGHT_THEME);
        toggleTheme(LIGHT_THEME);
    }
};

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage in google console(application) for Theme - It reloads the previous theme used that is saved in the browser's local storage
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        toggleTheme(DARK_THEME);
    } else {
        toggleSwitch.checked = false;
        toggleTheme(LIGHT_THEME);
    }
}

// Dark Mode
// const darkMode = () => {
//     nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
//     textBox.style.backgroundColor = "rgb(255 255 255 / 50%";
//     // console.log(toggleIcon.children);
//     toggleIcon.children[0].textContent = "Dark Mode";
//     toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
//     imageSwitch("dark");
// };

// Light Mode
// const lightMode = () => {
//     nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
//     textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
//     toggleIcon.children[0].textContent = "Light Mode";
//     toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
//     imageSwitch("light");
// };
