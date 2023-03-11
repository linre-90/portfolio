/** Attach close listener to backdrop */
const backdropAction = document.getElementById("backdrop");
backdropAction.addEventListener("click", function (){
    const mobilenavbar = document.getElementById("mobilenavbar");
    const backdrop = document.getElementById("backdrop");
    if(!mobilenavbar.classList.contains("hidden") && !backdrop.classList.contains("hidden")){
        mobilenavbar.classList.add("hidden");
        backdrop.classList.add("hidden");
    }
});

/** Floating action button onclick displays mobile navbar */
function displayMobileNav(){
    const mobilenavbar = document.getElementById("mobilenavbar");
    const backdrop = document.getElementById("backdrop");
    if(mobilenavbar.classList.contains("hidden") && backdrop.classList.contains("hidden")){
        mobilenavbar.classList.remove("hidden");
        backdrop.classList.remove("hidden");
    }
}

/** Toggles theme */
function setTheme(mode){
    if(mode === "light"){
        if(!document.body.classList.contains("light")){
            document.body.classList.add("light");
            localStorage.setItem("theme", "light");
        }
    }
    if(mode === "dark"){
        if(document.body.classList.contains("light")){
            document.body.classList.remove("light");
            localStorage.setItem("theme", "dark")
        }
    }
}

/** Try to load selected theme from local storage */
function getTheme(){
    const theme = localStorage.getItem("theme");
    if(theme === null){
        setTheme("dark");
        return;
    }

    setTheme(theme);
}

getTheme();