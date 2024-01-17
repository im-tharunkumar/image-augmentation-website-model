const chooseImgBtn = document.querySelector(".choose-img"),
previousImgBtn = document.querySelector(".previous-img"),
nextImgBtn = document.querySelector(".next-img"),
resetImgBtn = document.querySelector(".reset-filter"),
saveImgBtn = document.querySelector(".save-img");

const previewImg = document.querySelector(".original-img"),
editedImg = document.querySelector(".augmentation-img"),
fileInput = document.querySelector(".file-input");

const reader = new FileReader();

let currentImageIndex = 0;
let selectedImages = [];

function displayCurrentImage() {
    const currentImage = selectedImages[currentImageIndex];
    previewImg.src = URL.createObjectURL(currentImage);
    editedImg.src = URL.createObjectURL(currentImage);
    // let data = reader.readAsDataURL(this.currentImage);
}

const loadImage = () => {
    selectedImages = Array.from(fileInput.files);
    // selectedImages = Array.from(fileInput.files);
    let file = selectedImages[0] //getting user selected file
    if(!file) return;
    if(selectedImages.length === 1){
        previousImgBtn.style.display = 'none';
        nextImgBtn.style.display = 'none';
    }
    else{
        previousImgBtn.style.opacity = '0.6';
        previousImgBtn.style.pointerEvents = 'none';
    }
    reader.readAsDataURL(selectedImages[currentImageIndex]);
    reader.addEventListener("load",()=>{
        localStorage.setItem("original",reader.result);
    });
    currentImageIndex = 0;
    displayCurrentImage();
    previewImg.addEventListener("load", () =>{
        document.querySelector(".container").classList.remove("disable"); //change "container disable" => container
    });
}

const saveImage = () => {
    const link = document.createElement("a");

// Generate a filename based on 'previewImg' and the current date and time
    const now = new Date();
    const name = selectedImages[currentImageIndex].name.split(".")[0];
    const fileName = `${name}_${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now.getSeconds().toString().padStart(2, '0')}.jpg`;

    link.download = fileName;
    link.href = canvas.toDataURL();
    link.click();

}

const previousImage = () => {
    if (currentImageIndex === 1) {
        previousImgBtn.style.opacity = '0.6';
        previousImgBtn.style.pointerEvents = 'none';
    }
    else{
        nextImgBtn.style.opacity = '1';
        nextImgBtn.style.pointerEvents = 'all';
    }
    currentImageIndex = (currentImageIndex - 1 + selectedImages.length) % selectedImages.length;
    displayCurrentImage();
    resetImgBtn.click();
}

const nextImage = () => {
    if (currentImageIndex === selectedImages.length - 2) {
        nextImgBtn.style.opacity = '0.6';
        nextImgBtn.style.pointerEvents = 'none';
    }
    else{
        previousImgBtn.style.opacity = '1';
        previousImgBtn.style.pointerEvents = 'all';
    }
    currentImageIndex = (currentImageIndex + 1) % selectedImages.length;
    displayCurrentImage();
    resetImgBtn.click();
}

const resetFilter = () => {
    filterOptions[0].click();
    rotate = 0; 
    filpHorizontal = 1;
    blurRadius = 0;
    brightness = 100;
    contrast = 100;
    blurRange.value = 0;
    silder1Value.innerText = 0;
    document.getElementById("brightnessrange").value = 100;
    document.getElementById("contrastrange").value = 100;
    document.getElementById("varlimitrange").value = 0;
    document.getElementById("meanrange").value = 0;
    document.getElementById("boxcountrange").value = 0;
    document.getElementById("boxwidthrange").value = 0;
    document.getElementById("boxheightrange").value = 0;
    shearRange.value = 0;
    rotateRange.value = 0;
    editedImg.src = previewImg.src;
}

fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click());
saveImgBtn.addEventListener("click", saveImage);
resetImgBtn.addEventListener("click", resetFilter);
previousImgBtn.addEventListener("click", previousImage);
nextImgBtn.addEventListener("click", nextImage);