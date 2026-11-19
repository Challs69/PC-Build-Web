// for button color change
const clickBtn = document.querySelectorAll(".btns");


clickBtn.forEach((clickBtn) => {

    clickBtn.addEventListener("click", () => {
        // makes btn interactive
        clickBtn.classList.toggle("active")

    });

});

// to show intel famliy section

const intelBtn = document.getElementById("intelBtn")
const showSubSection = document.getElementById("intel-families-choose")

intelBtn.addEventListener("click", (event) => {
    showSubSection.classList.toggle("active")
    console.log("hi")
    
});

// to show intel series

const showIntelSeries = document.getElementById("intel-series-choose")
const intelCoreBtn = document.getElementById("intelCoreBtn")

intelCoreBtn.addEventListener("click", () => {
    showIntelSeries.classList.toggle("active")
    console.log("hi1")
})