// work btn hover info
const workerInfoHover = document.getElementById("workInfo")
const workerBtn = document.getElementById("workerBtn")

workerBtn.addEventListener("mouseenter", () => {
    workerInfoHover.classList.add("show");
});

workerBtn.addEventListener("mouseleave", () => {
    workerInfoHover.classList.remove("show");
});

//student btn hover info
const studentInfoHover = document.getElementById("studentInfo")
const studentBtn = document.getElementById("studentBtn")

studentBtn.addEventListener("mouseenter", () => {
    studentInfoHover.classList.add("show")
});

studentBtn.addEventListener("mouseleave", () => {
    studentInfoHover.classList.remove("show")
});

//gamer btn hover info
const gamerInfoHover = document.getElementById("gamerInfo")
const gamerBtn = document.getElementById("gamerBtn")

gamerBtn.addEventListener("mouseenter", () => {
    gamerInfoHover.classList.add("show")
    console.log("hi")
});

gamerBtn.addEventListener("mouseleave", () => {
    gamerInfoHover.classList.remove("show")
});

// casual btn hover info
const casualInfoHover = document.getElementById("casualInfo")
const casualBtn = document.getElementById("casualBtn")

casualBtn.addEventListener("mouseenter" , () => {
    casualInfoHover.classList.add("show")
});

casualBtn.addEventListener("mouseleave" , () => {
    casualInfoHover.classList.remove("show")
});

// pc info hover
const pcInfoHover = document.getElementById("pcInfo")
const pcBtn = document.getElementById("pcBldBtn")

pcBtn.addEventListener("mouseenter", () => {
    pcInfoHover.classList.add("show")
});

pcBtn.addEventListener("mouseleave", () => {
    pcInfoHover.classList.remove("show")
});

// laptop info hover
const laptopInfoHover = document.getElementById("laptopInfo")
const laptopBtn = document.getElementById("laptopBldBtn")

laptopBtn.addEventListener("mouseenter", () => {
    laptopInfoHover.classList.add("show")
});

laptopBtn.addEventListener("mouseleave", () => {
    laptopInfoHover.classList.remove("show")
});