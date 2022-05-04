
let ModeBtn = document.getElementById("themeChangingBtn");
ModeBtn.addEventListener("click", darkMode);

function darkMode(){
    let iconColor = document.getElementById("changeIcon");
    let span = document.getElementById("changeIcon");
    console.log(span);
    
    if (span.innerText == 'dark_mode') {
        span.innerText = 'light_mode';
        iconColor.style.color = "rgba(255, 255, 255, 1)";
    } 
    else {
        span.innerText = 'dark_mode';
        iconColor.style.color = "rgba(0, 0, 0, 1)";
    }
    document.body.classList.toggle("darkTheme");
}