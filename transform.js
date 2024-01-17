let rotate = 0, filpHorizontal = 1;
let blurRadius = 0;
let brightness = 100;
let contrast = 100;
let lastmodified = "";

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');


filterOptions.forEach(option =>{
    option.addEventListener("click", () =>{
        document.querySelector(".options .active").classList.remove("active");
        option.classList.add("active");

        localStorage.setItem("lastmodified",editedImg.src);
        let lastmodified = localStorage.getItem("lastmodified");
        const image = new Image();
        image.src = lastmodified;

        const selectedFilter = document.querySelector(".options .active");
        
        if(selectedFilter.id === "transpose"){
            rotate = (rotate + 90)%360;
            degree90(image);
        } else if(selectedFilter.id === "flip"){
            filpHorizontal = filpHorizontal === 1 ? -1:-1;
            applyflip(filpHorizontal);
        }
        else if(selectedFilter.id === "crop"){
            crop();
        }
        else if(selectedFilter.id === "blur"){
            blurRange.addEventListener("input",()=>{
                blurRadius=blurRange.value;
                applyBlur(blurRadius,image);
                console.log(blurRadius);
            });
        }
        else if(selectedFilter.id === "cutouts"){
            cutoutsParams.forEach(param =>{
                param.addEventListener("input",()=>{
                    let boxWidth = parseInt(document.getElementById("boxwidthrange").value);
                    let boxHeight = parseInt(document.getElementById("boxheightrange").value);
                    let boxCount = parseInt(document.getElementById("boxcountrange").value);
                    cutout(boxCount,boxHeight,boxWidth,image);
                });
                
            });
        }
        else if(selectedFilter.id === "exposure"){
            exposureParams.forEach(param =>{
                param.addEventListener("input",()=>{
                    brightness = parseInt(document.getElementById("brightnessrange").value);
                    contrast = parseInt(document.getElementById("contrastrange").value);
                    applyExposure(brightness,contrast,image);
                });
            });
        }
        else if(selectedFilter.id === "noise"){
            noiseParams.forEach(param =>{
                param.addEventListener("input",()=>{
                    let range = parseInt(document.getElementById("varlimitrange").value);
                    let varLimit = [0,range];
                    let mean = parseInt(document.getElementById("meanrange").value);
                    applyGaussianNoise(varLimit, mean, image);
                });
            });
        }
        else if(selectedFilter.id === "shear"){
            const range = document.getElementById("shearrange");
            range.addEventListener("input",()=>{
                applyShear(-parseInt(range.value),parseInt(range.value),image);
            });
        }
        else if(selectedFilter.id === "rotate"){
            const rotate_value = document.getElementById("rotaterange");
            rotate_value.addEventListener("input",()=>{
                applyRotate(rotate_value.value,image);
            });
        }
    });

});