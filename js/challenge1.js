document.querySelector("h1").classList.add("heading");

function getTime() {
    let today = new Date();
    let d = today.getDate();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    return [h,m,s].join(':');
}

window.onclick = event => {
    if (event.detail === 2) {
        window.alert(getTime());
    }
}

let checkBox = document.querySelector("#toggle");

if (checkBox.checked) {
    document.querySelector("#emailBox").classList.remove("hidden")
} else {
    document.querySelector("#emailBox").classList.add("hidden")
}


