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
    removeUltraSec()

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

// GPU SEC //

// NVIDIA clk btn => opens brands

const showNvidiaBrandSec = document.getElementById("nvidia-branding-choose")

const nvidiaBtn = document.getElementById("nvidiaBtn")

nvidiaBtn.addEventListener("click" , () => {

    if(showNvidiaBrandSec.classList.contains("active")){
        
        showNvidiaBrandSec.classList.toggle("active")
        
        setTimeout(() => {
            showNvidiaBrandSec.classList.toggle("active")
        }, 100);
    } else {
        showNvidiaBrandSec.classList.toggle("active")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})

// RTX clk Btn => opens nvidia gen 

const showNvidiaGenSec = document.getElementById("nvidia-Gen-choose")

const nvidiaRTXBtn = document.getElementById("nvidiaRTXBtn")
/*
nvidiaRTXBtn.addEventListener("click" , () => {

    if(showNvidiaGenSec.classList.contains("active")){
        
        showNvidiaGenSec.classList.toggle("active")
        
        setTimeout(() => {
            showNvidiaGenSec.classList.toggle("active")
        }, 100);
    } else {
        showNvidiaGenSec.classList.toggle("active")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})
*/    

// 20 Gen clk Btn => model num

const showNvidiaModelSec = document.getElementById("nvidia-Model-choose")

// making it for all gen btn

const allNvidiaGenBtn = document.querySelectorAll("#nvidia-Gen-choose .btns")

allNvidiaGenBtn.forEach((allNvidiaGenBtnX) => {

    allNvidiaGenBtnX.addEventListener("click" , (event) => {

        if(showNvidiaModelSec.classList.contains("active")){
        
            showNvidiaModelSec.classList.toggle("active")
        
            setTimeout(() => {
                showNvidiaModelSec.classList.toggle("active")
            }, 100);
        } else {
            showNvidiaModelSec.classList.toggle("active")
        }

        //2050

        if(event.target.id === "nvidia20Gen"){
            allNvidiaGenBtn.forEach((deAct) => {
                deAct.classList.remove("active")
            })
            allNvidiaGenBtn[0].classList.add("active")

            allNvidiaVRAMCard.forEach((activate) => {
                activate.classList.add("active")
            })
            allNvidiaVRAMCard[4].classList.remove("active")
            allNvidiaVRAMCard[5].classList.remove("active")
            allNvidiaVRAMCard[6].classList.remove("active")
        }

        //3050

        if(event.target.id === "nvidia30Gen"){
            allNvidiaGenBtn.forEach((deAct) => {
                deAct.classList.remove("active")
            })
            allNvidiaGenBtn[1].classList.add("active")

            allNvidiaVRAMCard.forEach((activate) => {
                activate.classList.add("active")
            })
            allNvidiaVRAMCard[0].classList.remove("active")
            allNvidiaVRAMCard[4].classList.remove("active")
            allNvidiaVRAMCard[6].classList.remove("active")
        }

        //4050

        if(event.target.id === "nvidia40Gen"){
            allNvidiaGenBtn.forEach((deAct) => {
                deAct.classList.remove("active")
            })
            allNvidiaGenBtn[2].classList.add("active")

            allNvidiaVRAMCard.forEach((activate) => {
                activate.classList.add("active")
            })
            allNvidiaVRAMCard[0].classList.remove("active")
            allNvidiaVRAMCard[1].classList.remove("active")
            allNvidiaVRAMCard[6].classList.remove("active")
        }

        //5050

        if(event.target.id === "nvidia50Gen"){
            allNvidiaGenBtn.forEach((deAct) => {
                deAct.classList.remove("active")
            })
            allNvidiaGenBtn[3].classList.add("active")

            allNvidiaVRAMCard.forEach((activate) => {
                activate.classList.add("active")
            })
            allNvidiaVRAMCard[0].classList.remove("active")
            allNvidiaVRAMCard[1].classList.remove("active")
            allNvidiaVRAMCard[5].classList.remove("active")
        }

        showNvidiaVRAMSec.classList.remove("active")

        allNividiaModelBtn.forEach((rstBtn) => {
            rstBtn.classList.remove("active")
        })
    })

})


/*
const nvidia20GenBtn = document.getElementById("nvidia20Gen")

nvidia20GenBtn.addEventListener("click" , () => {

    if(showNvidiaModelSec.classList.contains("active")){
        
        showNvidiaModelSec.classList.toggle("active")
        
        setTimeout(() => {
            showNvidiaModelSec.classList.toggle("active")
        }, 100);
    } else {
        showNvidiaModelSec.classList.toggle("active")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})
*/

// 50 model clk btn => opens vram
/*

const showNvidiaVRAMSec = document.getElementById("nvidia-Vram-choose")

const nvidiaMD50Btn = document.getElementById("nvidiaMD50Btn")

nvidiaMD50Btn.addEventListener("click" , () => {

    if(showNvidiaVRAMSec.classList.contains("active")){
        
        showNvidiaVRAMSec.classList.toggle("active")
        
        setTimeout(() => {
            showNvidiaVRAMSec.classList.toggle("active")
        }, 100);
    } else {
        showNvidiaVRAMSec.classList.toggle("active")
    }

    rstSuffixBtn.forEach((rstSuffixBtn) => {
        rstSuffixBtn.classList.remove("active")
    })

})
*/


// trying to make something

// VRAM sec show

const showNvidiaVRAMSec = document.getElementById("nvidia-Vram-choose")

// taking all nvidia model btn

const allNividiaModelBtn = document.querySelectorAll("#nvidia-Model-choose .btns")

// taking all vram

const allNvidiaVRAMCard = document.querySelectorAll("#nvidia-Vram-choose .card")

allNividiaModelBtn.forEach((allNividiaModelBtnX) => {

    allNividiaModelBtnX.addEventListener("click" , (event) => {


        if(showNvidiaVRAMSec.classList.contains("active")){
        
            showNvidiaVRAMSec.classList.toggle("active")
        
            setTimeout(() => {
                showNvidiaVRAMSec.classList.toggle("active")
            }, 100);
        } else {
            showNvidiaVRAMSec.classList.toggle("active")
        }

        //50
        if(event.target.id === "nvidiaMD50Btn"){
            allNividiaModelBtn.forEach((deAct) => {
                deAct.classList.remove("active")
            })
            allNividiaModelBtn[0].classList.add("active")
        }

        //60
        if(event.target.id === "nvidiaMD60Btn"){
            allNividiaModelBtn.forEach((deAct) => {
                deAct.classList.remove("active")
            })
            allNividiaModelBtn[1].classList.add("active")
        }

        //60 Ti
        if(event.target.id === "nvidiaMD60TiBtn"){
            allNividiaModelBtn.forEach((deAct) => {
                deAct.classList.remove("active")
            })
            allNividiaModelBtn[2].classList.add("active")
        }

        //70
        if(event.target.id === "nvidiaMD70Btn"){
            allNividiaModelBtn.forEach((deAct) => {
                deAct.classList.remove("active")
            })
            allNividiaModelBtn[3].classList.add("active")
        }

        //70 Ti
        if(event.target.id === "nvidiaMD70TiBtn"){
            allNividiaModelBtn.forEach((deAct) => {
                deAct.classList.remove("active")
            })
            allNividiaModelBtn[4].classList.add("active")
        }

        //80
        if(event.target.id === "nvidiaMD80Btn"){
            allNividiaModelBtn.forEach((deAct) => {
                deAct.classList.remove("active")
            })
            allNividiaModelBtn[5].classList.add("active")
        }

        //90
        if(event.target.id === "nvidiaMD90Btn"){
            allNividiaModelBtn.forEach((deAct) => {
                deAct.classList.remove("active")
            })
            allNividiaModelBtn[6].classList.add("active")
        }

        rstVramBtn.forEach((rstBtn) => {
            rstBtn.classList.remove("active")
        })
    })

})

const rstVramBtn = document.querySelectorAll("#nvidia-Vram-choose .btns")

//getting every brand btn of nvidia
const allNvidiaBrandBtn = document.querySelectorAll("#nvidia-branding-choose .btns")

//GTX gen decler

const showNvidiaGTXGenSec = document.getElementById("nvidia-GTX-Gen-choose")

//on click GTX => show its gen

allNvidiaBrandBtn.forEach((btn) => {
    btn.addEventListener("click" , (event) => {
        if(event.target.id === "nvidiaRTXBtn"){

            if(showNvidiaGenSec.classList.contains("active")){
        
                showNvidiaGenSec.classList.toggle("active")
        
                setTimeout(() => {
                    showNvidiaGenSec.classList.toggle("active")
                }, 100);
            } else {
                showNvidiaGenSec.classList.toggle("active")
            }

            allNvidiaBrandBtn[1].classList.remove("active")
            allNvidiaBrandBtn[0].classList.add("active")
        }

        if(event.target.id === "nvidiaGTXBtn"){
            
            removeRTXSec()

            allNvidiaGenBtn.forEach((deAct) => {
                deAct.classList.remove("active")
            })

            if(showNvidiaGTXGenSec.classList.contains("active")){
        
                showNvidiaGTXGenSec.classList.toggle("active")
        
                setTimeout(() => {
                    showNvidiaGTXGenSec.classList.toggle("active")
                }, 100);
            } else {
                showNvidiaGTXGenSec.classList.toggle("active")
            }

            allNvidiaBrandBtn[0].classList.remove("active")
            allNvidiaBrandBtn[1].classList.add("active")
        }
    })
})

// removing rtx sec
function removeRTXSec(){
    showNvidiaGenSec.classList.remove("active")
    showNvidiaModelSec.classList.remove("active")
    showNvidiaVRAMSec.classList.remove("active")
}