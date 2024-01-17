function applyBlur(blurRadius,image){
    console.log(blurRadius);
    canvas.width = editedImg.naturalWidth;
    canvas.height = editedImg.naturalHeight;
    ctx.filter = `blur(${blurRadius}px)`; 
    ctx.drawImage(image,0,0);
    editedImg.src = canvas.toDataURL();
}

function applyExposure(brightness,contrast,image){
    canvas.width = editedImg.naturalWidth;
    canvas.height = editedImg.naturalHeight;
    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%)`; 
    ctx.drawImage(image,0,0);
    editedImg.src = canvas.toDataURL();
}

function applyflip(flip){
    canvas.width = editedImg.naturalWidth;
    canvas.height = editedImg.naturalHeight;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(flip, 1);
    ctx.drawImage(editedImg, -editedImg.naturalWidth / 2, -editedImg.naturalHeight / 2);
    editedImg.src = canvas.toDataURL();
}

function degree90(image) {
    // Calculate the rotated dimensions of the image
    const rotatedWidth = image.naturalHeight; // Swap width and height
    const rotatedHeight = image.naturalWidth; // Swap width and height

    canvas.width = Math.abs(rotatedWidth);
    canvas.height = Math.abs(rotatedHeight);
    // ctx.fillStyle = "black";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((90) * Math.PI / 180);
    ctx.drawImage(image, -image.naturalWidth / 2, -image.naturalHeight / 2);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    editedImg.src = canvas.toDataURL();
}
// width is x axis and height is y axis
function cutout(boxCount,boxHeight,boxWidth, image){
    let newWidth = editedImg.naturalWidth;
    let newHeight = editedImg.naturalHeight;

    canvas.width = newWidth;
    canvas.height = newHeight;

    ctx.drawImage(image, 0, 0);

    let x , y;
    // console.log(boxCount);
    for(boxCount;boxCount>0;){

        x = Math.floor(Math.random()*newWidth);
        y = Math.floor(Math.random()*newHeight);
        if((x+boxWidth)<(newWidth-boxWidth) && (y+boxHeight)<(newHeight-boxHeight)){
            ctx.fillStyle = "black";
            ctx.fillRect(x,y,boxWidth,boxHeight);
            boxCount -= 1; 
        }
    }

    // while(boxCount){
    //     x = Math.floor(Math.random()*newWidth);
    //     y = Math.floor(Math.random()*newHeight);
    //     if((x+boxWidth)<(newWidth-boxWidth) && (y+boxHeight)<(newHeight-boxHeight)){
    //         ctx.fillStyle = "black";
    //         ctx.fillRect(x,y,boxWidth,boxHeight);
    //         boxCount -= 1; 
    //     }
    // }
    editedImg.src = canvas.toDataURL();
}


function applyShear(shearX, shearY,image) {
    shearX = Math.random() * shearX * 2 - shearX;
    shearY = Math.random() * shearY * 2 - shearY;

    let newWidth = editedImg.naturalWidth;
    let newHeight = editedImg.naturalHeight;

    canvas.width = newWidth;
    canvas.height = newHeight;
    ctx.fillStyle = "black";

    ctx.fillRect(0,0,newWidth,newHeight);
  
    // Apply the shear transformation
    ctx.transform(1, (shearY * Math.PI)/180, (shearX * Math.PI)/180, 1, 0, 0);
    ctx.drawImage(image, 0, 0);
    editedImg.src = canvas.toDataURL();
  }

function applyGaussianNoise(varLimit, mean,image) {
    canvas.width = editedImg.naturalWidth;
    canvas.height = editedImg.naturalHeight;
  
    ctx.drawImage(image, 0, 0);
  
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
  
    // Calculate the standard deviation based on var_limit
    const stdDeviation = Math.sqrt(varLimit[0] + Math.random() * (varLimit[1] - varLimit[0]));
  
    // Loop through the image pixels and add Gaussian noise unconditionally
    for (let i = 0; i < data.length; i += 4) {
      // Generate a random value from a normal distribution
      const randomValue = mean + stdDeviation * (2 * Math.random() - 1);
  
      // Add the random value to the pixel's red, green, and blue channels
      data[i] += randomValue;
      data[i + 1] += randomValue;
      data[i + 2] += randomValue;
    }
  
    // Put the modified image data back onto the canvas
    ctx.putImageData(imageData, 0, 0);
  
    // Set the modified image as the source of the image element
    editedImg.src = canvas.toDataURL();
  }

function crop(){
    const cropper = new Cropper(editedImg);
        cropper.setAspectRatio(NaN);
        // cropper.setCropBoxData({width:editedImg.naturalWidth,height:editedImg.naturalHeight});
        cropbtn.addEventListener("click", (e) =>{
            e.preventDefault();
            let croppedIamged = cropper.getCroppedCanvas().toDataURL("image/*");
            editedImg.src = croppedIamged;
            cropper.destroy();
            });
}

function applyRotate(rotate,image) {
    let newWidth = image.naturalWidth;
    let newHeight = image.naturalHeight;
  
    // Calculate the new dimensions after rotation
    if (rotate !=0){
        const diagonal = Math.sqrt(newWidth * newWidth + newHeight * newHeight);
        canvas.width = diagonal;
        canvas.height = diagonal;
    }
    else{
        canvas.width = newWidth;
        canvas.height = newHeight;
    }
  
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Calculate the center of the canvas
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;

    // Translate the context to the center
    ctx.translate(centerX, centerY);

    // Rotate the context
    // editedImg.rotate((rotate * (Math.PI/180)));
    ctx.rotate((rotate * (Math.PI/180)));
    // Draw the image centered at (0, 0)
    
    ctx.drawImage(image, -newWidth / 2, -newHeight / 2, newWidth, newHeight);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    editedImg.src = canvas.toDataURL();
}