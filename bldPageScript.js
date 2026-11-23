// for button color change
const clickBtn = document.querySelectorAll(".btns");


clickBtn.forEach((clickBtn) => {

    clickBtn.addEventListener("click", () => {
        // makes btn interactive
        clickBtn.classList.toggle("active")

    });

});

function resetingAllIntelBtns(){

    // reseting families btn

    rstFamiliesBtn.forEach((rstFamiliesBtn) => {
        rstFamiliesBtn.classList.remove("active")
    })

    //  reseting series btn also
    rstSeriesBtn.forEach((rstSeriesBtn) => {
        rstSeriesBtn.classList.remove("active")
    })

    // resting gene btn also
    rstGeneBtn.forEach((rstGeneBtn) => {
        rstGeneBtn.classList.remove("active")
    })

    // reseting suffix btn also

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

    console.log("hi")
}

function removActiveFrAllInfo(){

    // series deactivate
    showIntelSeries.classList.remove("active")

    // gene deactivate
    showIntelGene.classList.remove("active")

    //suffix deactivate
    showIntelSuffix.classList.remove("active")

}

// reseting children button (series child)

const rstFamiliesBtn = document.querySelectorAll("#intel-families-choose .btns")

// to show intel famliy section

const intelBtn = document.getElementById("intelBtn")
const showSubSection = document.getElementById("intel-families-choose")

intelBtn.addEventListener("click", () => {

    amdBtn.classList.remove("active")

    if(showSubSection.classList.contains("active")){
        
        showSubSection.classList.toggle("active")
        amdBtn.classList.remove("active")

        setTimeout(() => {
            showSubSection.classList.toggle("active")
        }, 100);
    } else {
        showSubSection.classList.toggle("active")
    }

    // reseting families btn

    rstFamiliesBtn.forEach((rstFamiliesBtn) => {
        rstFamiliesBtn.classList.remove("active")
    })

    //  reseting series btn also
    rstSeriesBtn.forEach((rstSeriesBtn) => {
        rstSeriesBtn.classList.remove("active")
    })

    // resting gene btn also
    rstGeneBtn.forEach((rstGeneBtn) => {
        rstGeneBtn.classList.remove("active")
    })

    // reseting suffix btn also

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })
    
});

// to show amd ...

const amdBtn = document.getElementById("amdBtn")

amdBtn.addEventListener("click" , () => {

    removActiveFrAllInfo()
    intelBtn.classList.remove("active")
    showSubSection.classList.remove("active")
    resetingAllIntelBtns()

})



// reseting children button (series child)

const rstSeriesBtn = document.querySelectorAll("#intel-series-choose .btns")

// to show intel core series 

const showIntelSeries = document.getElementById("intel-series-choose")
const intelCoreBtn = document.getElementById("intelCoreBtn")

intelCoreBtn.addEventListener("click", () => {

    if(showIntelSeries.classList.contains("active")){
        
        showIntelSeries.classList.toggle("active")
        intelUltraBtn.classList.remove("active")

        setTimeout(() => {
            showIntelSeries.classList.toggle("active")
        }, 100);
    } else {
        showIntelSeries.classList.toggle("active")
    }

    rstSeriesBtn.forEach((rstSeriesBtn) => {
        rstSeriesBtn.classList.remove("active")
    })

    // resting gene btn also
    rstGeneBtn.forEach((rstGeneBtn) => {
        rstGeneBtn.classList.remove("active")
    })

    // reseting suffix btn also

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})

// to show intel ultra series

const intelUltraBtn = document.getElementById("intelUltraBtn")

intelUltraBtn.addEventListener("click", () => {

    if(showIntelSeries.classList.contains("active")){
        
        showIntelSeries.classList.toggle("active")
        intelCoreBtn.classList.remove("active")

        setTimeout(() => {
            showIntelSeries.classList.toggle("active")
        }, 100);
    } else {
        showIntelSeries.classList.toggle("active")
    }

    rstSeriesBtn.forEach((rstSeriesBtn) => {
        rstSeriesBtn.classList.remove("active")
    })

    // resting gene btn also
    rstGeneBtn.forEach((rstGeneBtn) => {
        rstGeneBtn.classList.remove("active")
    })

    // reseting suffix btn also

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})

// reseting children button (generation child)

const rstGeneBtn = document.querySelectorAll("#intel-gene-choose .btns")

// to show intel i3 genration

const showIntelGene = document.getElementById("intel-gene-choose")
const intelI3Btn = document.getElementById("intelI3Btn")

intelI3Btn.addEventListener("click", () => {
    
    if(showIntelGene.classList.contains("active")){
        
        showIntelGene.classList.toggle("active")
        intelI5Btn.classList.remove("active")
        intelI7Btn.classList.remove("active")
        intelI9Btn.classList.remove("active")
        
        setTimeout(() => {
            showIntelGene.classList.toggle("active")
        }, 100);
    } else {
        showIntelGene.classList.toggle("active")
    }

    rstGeneBtn.forEach((rstGeneBtn) => {
        rstGeneBtn.classList.remove("active")
    })

    // reseting suffix btn also

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})

// to show intel i5 generation

const intelI5Btn = document.getElementById("intelI5Btn")

intelI5Btn.addEventListener("click" , () => {

    if(showIntelGene.classList.contains("active")){
        
        showIntelGene.classList.toggle("active")
        intelI3Btn.classList.remove("active")
        intelI7Btn.classList.remove("active")
        intelI9Btn.classList.remove("active")
        
        setTimeout(() => {
            showIntelGene.classList.toggle("active")
        }, 100);
    } else {
        showIntelGene.classList.toggle("active")
    }

    rstGeneBtn.forEach((rstGeneBtn) => {
        rstGeneBtn.classList.remove("active")
    })

    // reseting suffix btn also

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})

// to show intel i7 generation

const intelI7Btn = document.getElementById("intelI7Btn")

intelI7Btn.addEventListener("click" , () => {

    if(showIntelGene.classList.contains("active")){
        
        showIntelGene.classList.toggle("active")
        intelI5Btn.classList.remove("active")
        intelI3Btn.classList.remove("active")
        intelI9Btn.classList.remove("active")
        
        setTimeout(() => {
            showIntelGene.classList.toggle("active")
        }, 100);
    } else {
        showIntelGene.classList.toggle("active")
    }

    rstGeneBtn.forEach((rstGeneBtn) => {
        rstGeneBtn.classList.remove("active")
    })

    // reseting suffix btn also

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})

// to show intel i9 generation

const intelI9Btn = document.getElementById("intelI9Btn")

intelI9Btn.addEventListener("click" , () => {

    if(showIntelGene.classList.contains("active")){
        
        showIntelGene.classList.toggle("active")
        intelI3Btn.classList.remove("active")
        intelI7Btn.classList.remove("active")
        intelI5Btn.classList.remove("active")
        
        setTimeout(() => {
            showIntelGene.classList.toggle("active")
        }, 100);
    } else {
        showIntelGene.classList.toggle("active")
    }

    rstGeneBtn.forEach((rstGeneBtn) => {
        rstGeneBtn.classList.remove("active")
    })

    // reseting suffix btn also

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})

// reseting children button (suffix child)

const rstSuffixBtn = document.querySelectorAll("#suffixCardContainer .btns")

// to show 12th gen suffix

const showIntelSuffix = document.getElementById("suffix-choose")
const intel12GenBtn = document.getElementById("intel12Btn")

intel12GenBtn.addEventListener("click" , () => {

    if(showIntelSuffix.classList.contains("active")){
        
        showIntelSuffix.classList.toggle("active")
        intel13GenBtn.classList.remove("active")
        intel14GenBtn.classList.remove("active")
        
        setTimeout(() => {
            showIntelSuffix.classList.toggle("active")
        }, 100);
    } else {
        showIntelSuffix.classList.toggle("active")
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
        
        showIntelSuffix.classList.toggle("active")
        intel14GenBtn.classList.remove("active")
        intel12GenBtn.classList.remove("active")
        
        setTimeout(() => {
            showIntelSuffix.classList.toggle("active")
        }, 100);
    } else {
        showIntelSuffix.classList.toggle("active")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})

// to show 14 gen suffix

const intel14GenBtn = document.getElementById("intel14Btn")

intel14GenBtn.addEventListener("click" , () => {

    if(showIntelSuffix.classList.contains("active")){
        
        showIntelSuffix.classList.toggle("active")
        intel13GenBtn.classList.remove("active")
        intel12GenBtn.classList.remove("active")
        
        setTimeout(() => {
            showIntelSuffix.classList.toggle("active")
        }, 100);
    } else {
        showIntelSuffix.classList.toggle("active")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})



// them intel pop info elements 
const iseriesInfoPop = document.getElementById("iseries")
const igenInfoPop = document.getElementById("igen")
const iskuInfoPop = document.getElementById("isku")
const isuffixInfoPop = document.getElementById("isuffix")

const hoverBtns = document.querySelectorAll(".parts")

hoverBtns.forEach((hoverBtns) => {

    hoverBtns.addEventListener("mouseenter" , () => {

        if(hoverBtns.id === "btnISeries"){

            iseriesInfoPop.classList.add("active")

        } else if(hoverBtns.id === "btnIGen"){

            igenInfoPop.classList.add("active")

        } else if(hoverBtns.id === "btnISku"){

            iskuInfoPop.classList.add("active")

        } else if(hoverBtns.id === "btnISuffix"){

            isuffixInfoPop.classList.add("active")

        }

    })

    hoverBtns.addEventListener("mouseleave" , () => {

        if(hoverBtns.id === "btnISeries"){

            iseriesInfoPop.classList.remove("active")

        } else if(hoverBtns.id === "btnIGen"){

            igenInfoPop.classList.remove("active")

        } else if(hoverBtns.id === "btnISku"){

            iskuInfoPop.classList.remove("active")

        } else if(hoverBtns.id === "btnISuffix"){

            isuffixInfoPop.classList.remove("active")

        }

    })

})

// them amd pop info elements 
const aseriesInfoPop = document.getElementById("aseries")
const agenInfoPop = document.getElementById("agen")
const askuInfoPop = document.getElementById("asku")
const asuffixInfoPop = document.getElementById("asuffix")

hoverBtns.forEach((hoverBtns) => {

    hoverBtns.addEventListener("mouseenter" , () => {

        if(hoverBtns.id === "btnASeries"){

            aseriesInfoPop.classList.add("active")

        } else if(hoverBtns.id === "btnAGen"){

            agenInfoPop.classList.add("active")

        } else if(hoverBtns.id === "btnASku"){

            askuInfoPop.classList.add("active")

        } else if(hoverBtns.id === "btnASuffix"){

            asuffixInfoPop.classList.add("active")

        }

    })

    hoverBtns.addEventListener("mouseleave" , () => {

        if(hoverBtns.id === "btnASeries"){

            aseriesInfoPop.classList.remove("active")

        } else if(hoverBtns.id === "btnAGen"){

            agenInfoPop.classList.remove("active")

        } else if(hoverBtns.id === "btnASku"){

            askuInfoPop.classList.remove("active")

        } else if(hoverBtns.id === "btnASuffix"){

            asuffixInfoPop.classList.remove("active")

        }

    })

})
