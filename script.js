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