document.addEventListener("DOMContentLoaded", function (){
    const hourglass = document.querySelector(".hourglass");
    const search = document.querySelector(".search-bar");

    hourglass.addEventListener("click", function (){
        search.focus();
    });
});