function popup() {
    if (document.querySelector(".button").style.display !== "none") {
        document.querySelector(".button").style.display = "none";
        document.querySelector(".popup").classList.add("visible");
    } else {
        document.querySelector(".button").style.display = "block";
        document.querySelector(".popup").classList.remove("visible");
    }
};