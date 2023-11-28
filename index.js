let showall = document.querySelector("#showall");

let inner = document.querySelector(".inner");
showall.onclick = ()=>{
    inner.style.flexWrap = "wrap";
    showall.style.visibility = "hidden";
}