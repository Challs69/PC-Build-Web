const workerInfoHover = document.getElementById("workInfo")
const workerBtn = document.getElementById("workerBtn")

workerBtn.addEventListener("mouseenter", () => {
    workerInfoHover.classList.add("show");
    console.log(workerInfoHover);
    console.log(workerBtn);
});

workerBtn.addEventListener("mouseleave", () => {
    workerInfoHover.classList.remove("show");
});