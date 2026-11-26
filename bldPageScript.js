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

    // removing amd sec on click
    removeAmdSec()

    // removing child of child (seires)
    showIntelSeries.classList.remove("active")

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
const showAmdSeries = document.getElementById("amd-series-choose")
const amdBtn = document.getElementById("amdBtn")

amdBtn.addEventListener("click" , () => {

    removActiveFrAllInfo()
    intelBtn.classList.remove("active")
    showSubSection.classList.remove("active")
    resetingAllIntelBtns()

    if(showAmdSeries.classList.contains("active")){
        
        showAmdSeries.classList.toggle("active")
        amdBtn.classList.remove("active")

        setTimeout(() => {
            showAmdSeries.classList.toggle("active")
        }, 100);
    } else {
        showAmdSeries.classList.toggle("active")
    }

})


// reseting children button (series child)

const rstSeriesBtn = document.querySelectorAll("#intel-series-choose .btns")

// to show intel core series 

const showIntelSeries = document.getElementById("intel-series-choose")
const intelCoreBtn = document.getElementById("intelCoreBtn")

intelCoreBtn.addEventListener("click", () => {

    // removing child of child (gen)
    showIntelGene.classList.remove("active")

    //removing ultra section
    removeUltraSec()

    //removing ultra btn effect
    intelUltraBtn.classList.remove("active")

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

    // reseting ultra series
    rstUltraTier.forEach((rstUltraTier) => {
        rstUltraTier.classList.remove("active")
    })

})

// to show intel ultra series

const showIntelUTiers = document.getElementById("intel-ultra-tier-choose")
const intelUltraBtn = document.getElementById("intelUltraBtn")

intelUltraBtn.addEventListener("click", () => {

    // removing child of child (gen)
    showIntelGene.classList.remove("active")

    //removing core sec
    removeCoreSec()

    //removing intel btn effect
    intelCoreBtn.classList.remove("active")

    if(showIntelUTiers.classList.contains("active")){
        
        showIntelUTiers.classList.toggle("active")
        intelCoreBtn.classList.remove("active")

        setTimeout(() => {
            showIntelUTiers.classList.toggle("active")
        }, 100);
    } else {
        showIntelUTiers.classList.toggle("active")
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

    // removing child of child(suffix)
    showIntelSuffix.classList.remove("active")
    
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

    // removing child of child(suffix)
    showIntelSuffix.classList.remove("active")

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

    // removing child of child(suffix)
    showIntelSuffix.classList.remove("active")

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

    // removing child of child(suffix)
    showIntelSuffix.classList.remove("active")

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


// intel ultra shows series

// to show ultra 5 series 

const showIntelUSeries = document.getElementById("intel-ultra-series-choose")
const intelUT5Btn = document.getElementById("intelUT5Btn")

intelUT5Btn.addEventListener("click" , () => {

    //removing child of child (ultra child)
    showIntelUSuffix.classList.remove("active")

    if(showIntelUSeries.classList.contains("active")){
        
        showIntelUSeries.classList.toggle("active")
        intelUT7Btn.classList.remove("active")
        intelUT9Btn.classList.remove("active")
        
        setTimeout(() => {
            showIntelUSeries.classList.toggle("active")
        }, 100);
    } else {
        showIntelUSeries.classList.toggle("active")
    }

    rstUSeriesBtn.forEach((rstUSeriesBtn) => {
        rstUSeriesBtn.classList.remove("active")
    })

})

// to show ultra 7 series

const intelUT7Btn = document.getElementById("intelUT7Btn")

intelUT7Btn.addEventListener("click" , () => {

    //removing child of child (ultra child)
    showIntelUSuffix.classList.remove("active")

    if(showIntelUSeries.classList.contains("active")){
        
        showIntelUSeries.classList.toggle("active")
        intelUT5Btn.classList.remove("active")
        intelUT9Btn.classList.remove("active")
        
        setTimeout(() => {
            showIntelUSeries.classList.toggle("active")
        }, 100);
    } else {
        showIntelUSeries.classList.toggle("active")
    }

    rstUSeriesBtn.forEach((rstUSeriesBtn) => {
        rstUSeriesBtn.classList.remove("active")
    })

})

//to show ultra 9 series

const intelUT9Btn = document.getElementById("intelUT9Btn")

intelUT9Btn.addEventListener("click" , () => {

    //removing child of child (ultra child)
    showIntelUSuffix.classList.remove("active")

    if(showIntelUSeries.classList.contains("active")){
        
        showIntelUSeries.classList.toggle("active")
        intelUT5Btn.classList.remove("active")
        intelUT7Btn.classList.remove("active")
        
        setTimeout(() => {
            showIntelUSeries.classList.toggle("active")
        }, 100);
    } else {
        showIntelUSeries.classList.toggle("active")
    }

    rstUSeriesBtn.forEach((rstUSeriesBtn) => {
        rstUSeriesBtn.classList.remove("active")
    })

})

//to show ultra suffix

//Ultra series 2 suffix

const showIntelUSuffix = document.getElementById("ultra-suffix-choose")
const intelUS1Btn = document.getElementById("intelUS1Btn")

intelUS1Btn.addEventListener("click" , () => {

    if(showIntelUSuffix.classList.contains("active")){
        
        showIntelUSuffix.classList.toggle("active")
        intelUS2Btn.classList.remove("active")
        intelUS3Btn.classList.remove("active")
        
        setTimeout(() => {
            showIntelUSuffix.classList.toggle("active")
        }, 100);
    } else {
        showIntelUSuffix.classList.toggle("active")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})

//Ultra series 2 suffix

const intelUS2Btn = document.getElementById("intelUS2Btn")

intelUS2Btn.addEventListener("click" , () => {

    if(showIntelUSuffix.classList.contains("active")){
        
        showIntelUSuffix.classList.toggle("active")
        intelUS1Btn.classList.remove("active")
        intelUS3Btn.classList.remove("active")
        
        setTimeout(() => {
            showIntelUSuffix.classList.toggle("active")
        }, 100);
    } else {
        showIntelUSuffix.classList.toggle("active")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})

//Ultra series 3 suffix

const intelUS3Btn = document.getElementById("intelUS3Btn")

intelUS3Btn.addEventListener("click" , () => {

    if(showIntelUSuffix.classList.contains("active")){
        
        showIntelUSuffix.classList.toggle("active")
        intelUS1Btn.classList.remove("active")
        intelUS2Btn.classList.remove("active")
        
        setTimeout(() => {
            showIntelUSuffix.classList.toggle("active")
        }, 100);
    } else {
        showIntelUSuffix.classList.toggle("active")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})

// reseting all series of ultra 

const rstUSeriesBtn = document.querySelectorAll("#intel-ultra-series-choose .btns")

//remove intel ultra section

function removeUltraSec(){
    showIntelUSuffix.classList.remove("active")
    showIntelUSeries.classList.remove("active")
    showIntelUTiers.classList.remove("active")
}

//remove intel ultra section

function removeCoreSec(){
    showIntelSeries.classList.remove("active")
    showIntelGene.classList.remove("active")
    showIntelSuffix.classList.remove("active")
}

// reseting all utra tiers
const rstUltraTier = document.querySelectorAll("#intel-ultra-tier-choose .btns")

// amd btns

// to show amd gen

const showAmdGen = document.getElementById("amd-gene-choose")

//to show amd series 3 gen

const amdRy3Btn = document.getElementById("amdRy3Btn")

amdRy3Btn.addEventListener("click" , () => {

    showAmdSuffix.classList.remove("active")

    if(showAmdGen.classList.contains("active")){
        
        showAmdGen.classList.toggle("active")
        amdRy7Btn.classList.remove("active")
        amdRy5Btn.classList.remove("active")
        amdRy9Btn.classList.remove("active")
        
        setTimeout(() => {
            showAmdGen.classList.toggle("active")
        }, 100);
    } else {
        showAmdGen.classList.toggle("active")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

    rstAmdGen.forEach((rstAmdGen) => {
        rstAmdGen.classList.remove("active")
    })

})

//to show amd series 5 gen

const amdRy5Btn = document.getElementById("amdRy5Btn")

amdRy5Btn.addEventListener("click" , () => {

    showAmdSuffix.classList.remove("active")

    if(showAmdGen.classList.contains("active")){
        
        showAmdGen.classList.toggle("active")
        amdRy3Btn.classList.remove("active")
        amdRy7Btn.classList.remove("active")
        amdRy9Btn.classList.remove("active")
        
        setTimeout(() => {
            showAmdGen.classList.toggle("active")
        }, 100);
    } else {
        showAmdGen.classList.toggle("active")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

    rstAmdGen.forEach((rstAmdGen) => {
        rstAmdGen.classList.remove("active")
    })

})

//to show amd series 7 gen

const amdRy7Btn = document.getElementById("amdRy7Btn")

amdRy7Btn.addEventListener("click" , () => {

    showAmdSuffix.classList.remove("active")

    if(showAmdGen.classList.contains("active")){
        
        showAmdGen.classList.toggle("active")
        amdRy3Btn.classList.remove("active")
        amdRy5Btn.classList.remove("active")
        amdRy9Btn.classList.remove("active")
        
        setTimeout(() => {
            showAmdGen.classList.toggle("active")
        }, 100);
    } else {
        showAmdGen.classList.toggle("active")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

    rstAmdGen.forEach((rstAmdGen) => {
        rstAmdGen.classList.remove("active")
    })

})

//to show amd series 9 gen

const amdRy9Btn = document.getElementById("amdRy9Btn")

amdRy9Btn.addEventListener("click" , () => {

    showAmdSuffix.classList.remove("active")

    if(showAmdGen.classList.contains("active")){
        
        showAmdGen.classList.toggle("active")
        amdRy3Btn.classList.remove("active")
        amdRy7Btn.classList.remove("active")
        amdRy5Btn.classList.remove("active")
        
        setTimeout(() => {
            showAmdGen.classList.toggle("active")
        }, 100);
    } else {
        showAmdGen.classList.toggle("active")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

    rstAmdGen.forEach((rstAmdGen) => {
        rstAmdGen.classList.remove("active")
    })

})


// to show amd suffix

const showAmdSuffix = document.getElementById("amd-suffix-choose")

// to show gen 5000 suffix
const amdGen5btn = document.getElementById("amdGen5Btn")

amdGen5btn.addEventListener("click" , () => {

    if(showAmdSuffix.classList.contains("active")){
        
        showAmdSuffix.classList.toggle("active")
        amdGen7btn.classList.remove("active")
        amdGen9btn.classList.remove("active")
        
        setTimeout(() => {
            showAmdSuffix.classList.toggle("active")
        }, 100);
    } else {
        showAmdSuffix.classList.toggle("active")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})

// to show gen 70000 suffix

const amdGen7btn = document.getElementById("amdGen7Btn")

amdGen7btn.addEventListener("click" , () => {

    if(showAmdSuffix.classList.contains("active")){
        
        showAmdSuffix.classList.toggle("active")
        amdGen5btn.classList.remove("active")
        amdGen9btn.classList.remove("active")
        
        setTimeout(() => {
            showAmdSuffix.classList.toggle("active")
        }, 100);
    } else {
        showAmdSuffix.classList.toggle("active")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})

// to show gen 9000 suffix

const amdGen9btn = document.getElementById("amdGen9Btn")

amdGen9btn.addEventListener("click" , () => {

    if(showAmdSuffix.classList.contains("active")){
        
        showAmdSuffix.classList.toggle("active")
        amdGen5btn.classList.remove("active")
        amdGen7btn.classList.remove("active")
        
        setTimeout(() => {
            showAmdSuffix.classList.toggle("active")
        }, 100);
    } else {
        showAmdSuffix.classList.toggle("active")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})


// to rst amd gen

const rstAmdGen = document.querySelectorAll("#amd-gene-choose .btns")

// remove amd sec

function removeAmdSec(){
    showAmdSuffix.classList.remove("active")
    showAmdGen.classList.remove("active")
    showAmdSeries.classList.remove("active")
}