'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const preloaderVar = document.getElementById("loader-wrapper");
    setTimeout(function () {
        preloaderVar.style.display = "none";
       }, 5000);
});