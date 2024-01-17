Web design idea from

https://youtu.be/YqUUvBpCtfA?feature=shared

transformation performed 
1. blur
2. 90 degree rotate
3. cutouts
4. horizontal flip
5. shear
6. noise
7. rotate
8. crop
9. exposure

- crop transform is done by using cropperjs libiry

video reference i refered to perform crop tranformation using cropperjs

https://www.youtube.com/live/MttSRUarA6g?feature=shared
https://youtu.be/lbktWEPWRek?feature=shared

---- Here I manipulate the images with the help of "canvas" ----

what is canvas?
    - In HTML, the <canvas> element is used to create and manipulate graphics, 
    particularly for rendering 2D graphics and animations on a web page. The <canvas> 
    element provides a blank rectangular area on the web page where you can draw graphics using JavaScript.

why canvas?

    -Dynamic Image Manipulation: Canvas allows for real-time, dynamic image manipulation. You can create 
    interactive applications where users can edit and modify images directly within the web page.

    -Custom Graphics: Canvas provides a powerful 2D drawing API, allowing you to create custom graphics,
    shapes, and drawings on top of images. This is especially useful for adding annotations, drawings, or
    custom overlays to images.

    -Programmatic Control: With JavaScript, you have full programmatic control over the canvas and its content.
    You can use JavaScript to apply filters, transformations, and other effects to images, providing a high 
    level of customization.

    -Resolution Independence: Canvas is resolution-independent, meaning you can manipulate images without 
    worrying about pixelation or loss of quality. This is in contrast to traditional image editing tools,
    where resizing or editing images can lead to degradation.

    -Interactive Features: You can add interactive features to your image editing application, such as sliders
    or buttons to adjust parameters like brightness, contrast, blur, or color adjustments. Users can see the
    effects in real-time.


the remaining transformations are done with the help of canvas only

because i searched for libiies on the web but i cant find correct js libiry
to use it in web like cropperjs 

some of the libiry are using tensorflow or opencv4

so it can be run on terminals but if we tried to use in web scripts

it gives lots error on console of the browser like

-Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html".
Strict MIME type checking is enforced for module scripts per HTML spec.

-img_aug.js:1 Uncaught ReferenceError: require is not defined at img_aug.js:1:12

reason for why these type of error occurs:
    -The error message "Uncaught ReferenceError: require is not defined" typically occurs in a web browser environment
    because the require function is not natively supported in browsers. In contrast,
    Node.js provides a CommonJS module system, which includes the require function for importing modules.

here is some of the link of libiies i refered

https://github.com/piercus/image-augment

https://github.com/kedemd/image-augmentor

https://github.com/iberatkaya/image-augmentation


due to cant integrate the libiry with vanilla js

i manually tried to get that funtionalites with help of canvas

below mentioned website was helped for me even when i worked with albumentation 
so i refered the concept of shear, noise, cutouts here

https://hasty.ai/docs/mp-wiki/augmentations/overview-of-augmentations-in-ml


what is shear?

 Shear is a geometric augmentation that changes a form of an image along a specific axis 
 to create a different perception angle. Shear moves a side of an image, transforming its initial form of a square into a trapezoid. Shears are applied sequentially if you want to shear your image along the x- and y-axis. Data Scientists use Shear to augment pictures in such a way that an algorithm can identify an object from multiple angles
link: https://hasty.ai/docs/mp-wiki/augmentations/shear


what is rotate?

Rotate is a data augmentation technique used to randomly rotate an image clockwise or counter-clockwise by a certain number of degrees.

link: https://hasty.ai/docs/mp-wiki/augmentations/rotate


what is noise ?

Noise usually stands for a random variation in the brightness or color of the image. In the case of digital images, noise can be produced due to different reasons:

The image sensor is broken or affected by external factors;

The noise might be added or multiplied to the image. Here is the formula for the Additive Noise Model, where:

x and y are the coordinates of the pixel to which the noise is applied;
s(x, y) is the intensity of the original image;
n(x, y) is the noise added to the original image;
w(x,y) is the distorted image received after the noise is applied.

link: https://hasty.ai/docs/mp-wiki/augmentations/gaussian-noise

file Explaination:

- 1 html file (index.html)
- 1 css file (style.css)
- 4 js files (button.js,function.js, parameter.js, transform,js)

--parameter.js---

this file will do the dynamic changes of inputs basis on the transformation selected

--button.js---

this files contains opertations of buttons, currently upload button and save button only finished

--transform.js---

this file will do all the tranformation that user does with help of function in function.js

--function.js---

this file have all the function which performs the transformation to the image. 


