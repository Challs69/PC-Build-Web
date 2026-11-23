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

// to show intel core series 

const showIntelSeries = document.getElementById("intel-series-choose")
const intelCoreBtn = document.getElementById("intelCoreBtn")

intelCoreBtn.addEventListener("click", () => {
    showIntelSeries.classList.toggle("active")
    console.log("hi1")
})

// to show intel i3 genration

const showIntelGene = document.getElementById("intel-gene-choose")
const intelI3Btn = document.getElementById("intelI3Btn")

intelI3Btn.addEventListener("click", () => {
    showIntelGene.classList.toggle("active")
})


// reseting children button (suffix child)

const rstSuffixBtn = document.querySelectorAll("#suffixCardContainer .btns")

// rstSuffixBtn.forEach((rstSuffixBtn) => { })

// to show 12th gen suffix

let isIntel12GenActive = false

const showIntelSuffix = document.getElementById("suffix-choose")
const intel12GenBtn = document.getElementById("intel12Btn")

intel12GenBtn.addEventListener("click" , () => {

    console.log(isIntel12GenActive)

    if(showIntelSuffix.classList.contains("active")){
        //console.log("contains")
        showIntelSuffix.classList.toggle("active")
        intel13GenBtn.classList.remove("active")
        intel14GenBtn.classList.remove("active")
        //console.log("removed")
        setTimeout(() => {
            showIntelSuffix.classList.toggle("active")
            //console.log("added")
        }, 100);
    } else {
        showIntelSuffix.classList.toggle("active")
        isIntel12GenActive = true
        console.log(isIntel12GenActive)
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})

// to show 13 gen suffix

const intel13GenBtn = document.getElementById("intel13Btn")

intel13GenBtn.addEventListener("click" , () => {
    isIntel12GenActive = false
    console.log(isIntel12GenActive)

    if(showIntelSuffix.classList.contains("active")){
        // console.log("contains")
        showIntelSuffix.classList.toggle("active")
        intel14GenBtn.classList.remove("active")
        intel12GenBtn.classList.remove("active")
        // console.log("removed")
        setTimeout(() => {
            showIntelSuffix.classList.toggle("active")
            //console.log("added")
        }, 100);
    } else {
        showIntelSuffix.classList.toggle("active")
        // console.log("notContains")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})

// to show 14 gen suffix

const intel14GenBtn = document.getElementById("intel14Btn")

intel14GenBtn.addEventListener("click" , () => {

    if(showIntelSuffix.classList.contains("active")){
        // console.log("contains")
        showIntelSuffix.classList.toggle("active")
        intel13GenBtn.classList.remove("active")
        intel12GenBtn.classList.remove("active")
        // console.log("removed")
        setTimeout(() => {
            showIntelSuffix.classList.toggle("active")
            //console.log("added")
        }, 100);
    } else {
        showIntelSuffix.classList.toggle("active")
        // console.log("notContains")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})

// model num hover effect

const modelNumHover = document.getElementById("intel-example")

// them pop info elements 
const iseriesInfoPop = document.getElementById("iseries")
const igenInfoPop = document.getElementById("igen")
const iskuInfoPop = document.getElementById("isku")
const isuffixInfoPop = document.getElementById("isuffix")

modelNumHover.addEventListener("mouseover" , (event) => {

    if(event.target.classList.contains("parts")){

        if(event.target.id === "btnISeries" && !event.target.contains(event.relatedTarget)){
            iseriesInfoPop.classList.add("active")
        } else if(event.target.id === "btnIGen" && !event.target.contains(event.relatedTarget)){
            igenInfoPop.classList.add("active")
        }else if(event.target.id === "btnISku" && !event.target.contains(event.relatedTarget)){
            iskuInfoPop.classList.add("active")
        }else if(event.target.id === "btnISuffix" && !event.target.contains(event.relatedTarget)){
            isuffixInfoPop.classList.add("active")
        }

    }

})

modelNumHover.addEventListener("mouseout" , (event) => {

    if(event.target.classList.contains("parts")){

        if(event.target.id === "btnISeries" && !event.target.contains(event.relatedTarget)){
            iseriesInfoPop.classList.remove("active")
        } else if(event.target.id === "btnIGen" && !event.target.contains(event.relatedTarget)){
            igenInfoPop.classList.remove("active")
        }else if(event.target.id === "btnISku" && !event.target.contains(event.relatedTarget)){
            iskuInfoPop.classList.remove("active")
        }else if(event.target.id === "btnISuffix" && !event.target.contains(event.relatedTarget)){
            isuffixInfoPop.classList.remove("active")
        }

    }

})
