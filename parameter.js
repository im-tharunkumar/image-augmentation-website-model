const tranformName = document.querySelector(".parameter-for"),
silder1Value = document.getElementById("silder1"),
silder2Value = document.getElementById("silder2"),
silder3Value = document.getElementById("silder3"),
param1Name = document.getElementById("param1name"),
param2Name = document.getElementById("param2name"),
param3Name = document.getElementById("param3name"),
noParamMsg = document.querySelector(".no-param");

const blurRange = document.getElementById("blurrange"),
rotateRange = document.getElementById("rotaterange"),
shearRange = document.getElementById("shearrange"),
cropBtn = document.getElementById("cropbtn"),
// deg90Btn = document.getElementById("90degbtn"),
noiseParams = document.querySelectorAll(".noise-param"),
exposureParams = document.querySelectorAll(".exposure-param"),
cutoutsParams = document.querySelectorAll(".cutout-param");


const filterOptions = document.querySelectorAll(".options button");

let currentOption = null;

filterOptions.forEach(option=>{
    option.addEventListener("click",()=>{
        if (currentOption !== null) {
            hideParameters(currentOption);
        }
    
        currentOption = option.id;
    
        document.querySelector(".options .active").classList.remove("active");
        option.classList.add("active");

        tranformName.innerText = option.id;
        tranformName.style.display = "block";
    
        if(option.id === "blur"){
            param1Name.style.display = "block";
            blurRange.style.display = "block";
            silder1Value.style.display = "block";
            silder1Value.innerText = blurRange.value; 
            param1Name.innerText = "Blur Limit";  
        }
        else if(option.id==="shear"){
            shearRange.style.display = "block";
            silder1Value.style.display = "block";
            param1Name.style.display = "block";
            silder1Value.innerText = shearRange.value;
            param1Name.innerText = "Angle in degree";
        }
        else if(option.id==="rotate"){
            rotateRange.style.display = "block";
            silder1Value.style.display = "block";
            param1Name.style.display = "block";
            silder1Value.innerText = rotateRange.value;
            param1Name.innerText = "Angle in degree";
        }
        else if(option.id==="flip" ){
            noParamMsg.style.display = "block";
        }
        else if(option.id === "transpose"){
            // deg90Btn.style.display = "block";
        }
        else if(option.id==="crop"){
            cropBtn.style.display = "block";
        }
        else if(option.id ==="exposure"){
            exposureParams.forEach(param =>{
                if(param.id==="brightnessrange"){
                    silder1Value.innerText = param.value;
                    param1Name.innerText = "Brightness";
                }
                else if(param.id==="contrastrange"){
                    silder2Value.innerText = param.value;
                    param2Name.innerText = "Contrast";
                }
                param1Name.style.display = "block";
                param2Name.style.display = "block";
                param.style.display = "block";
                silder1Value.style.display = "block";
                silder2Value.style.display = "block";
            });
        }
        else if(option.id ==="noise"){
            noiseParams.forEach(param =>{
                if(param.id==="varlimitrange"){
                    silder1Value.innerText = param.value;
                    param1Name.innerText = "Variance Limit";
                }
                else if(param.id==="meanrange"){
                    silder2Value.innerText = param.value;
                    param2Name.innerText = "Mean";
                }
                param1Name.style.display = "block";
                param2Name.style.display = "block";
                param.style.display = "block";
                silder1Value.style.display = "block";
                silder2Value.style.display = "block";
            });
        }
        else if(option.id ==="cutouts"){
            cutoutsParams.forEach(param =>{
                if(param.id==="boxwidthrange"){
                    silder1Value.innerText = param.value;
                    param1Name.innerText = "Width";
                }
                else if(param.id==="boxheightrange"){
                    silder2Value.innerText = param.value;
                    param2Name.innerText = "Height";
                }
                else if(param.id==="boxcountrange"){
                    silder3Value.innerText = param.value;
                    param3Name.innerText = "count";
                }
                param1Name.style.display = "block";
                param2Name.style.display = "block";
                param3Name.style.display = "block";
                param.style.display = "block";
                silder1Value.style.display = "block";
                silder2Value.style.display = "block";
                silder3Value.style.display = "block";
            });
        }

    });
});

function hideParameters(optionId){
    if (optionId === "blur") {
        blurRange.style.display = "none";
        silder1Value.style.display = "none";
        param1Name.style.display = "none";
    }else if(optionId==="shear"){
        shearRange.style.display = "none";
        silder1Value.style.display = "none";
        param1Name.style.display = "none";
    }
    else if(optionId==="rotate"){
        rotateRange.style.display = "none";
        silder1Value.style.display = "none";
        param1Name.style.display = "none";
    }
    else if(optionId==="flip" ){
        noParamMsg.style.display = "none";
    }
    else if(optionId === "transpose"){
        // deg90Btn.style.display = "none";
    }
    else if(optionId ==="noise"){
        noiseParams.forEach(param =>{
                param.style.display = "none";
                }
        );
        param1Name.style.display = "none";
        param2Name.style.display = "none";
        silder1Value.style.display = "none";
        silder2Value.style.display = "none";
    }
    else if(optionId ==="exposure"){
        exposureParams.forEach(param =>{
                param.style.display = "none";
        });
        param1Name.style.display = "none";
        param2Name.style.display = "none";
        silder1Value.style.display = "none";
        silder2Value.style.display = "none";
    }
    else if(optionId==="crop"){
        cropBtn.style.display = "none";
    }
    else if(optionId==="cutouts"){
        cutoutsParams.forEach(param =>{
            param.style.display = "none";
        });
        param1Name.style.display = "none";
        param2Name.style.display = "none";
        param3Name.style.display = "none";
        silder1Value.style.display = "none";
        silder3Value.style.display = "none";
        silder2Value.style.display = "none";
    }

}
