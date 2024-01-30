# Image Augmentation website model

## What is Image Augmentation in Data Science?

In data science, image augmentation is a technique used to artificially expand the size of a dataset by applying various transformations to existing images. This process helps improve the robustness and generalization of machine learning models, particularly in computer vision tasks. Image augmentation introduces variations in the dataset, such as rotations, flips, and noise, making the model more versatile in handling real-world scenarios.

## Web Design Inspiration

The web design for this project is inspired by a tutorial found on YouTube: [Web Design Tutorial](https://youtu.be/YqUUvBpCtfA?feature=shared).

## Transformations Performed:

1. **Blur**
2. **90-degree Rotate**
3. **Cutouts**
4. **Horizontal Flip**
5. **Shear**
6. **Noise**
7. **Rotate**
8. **Crop**
9. **Exposure**

### Crop Transformation using CropperJS Library

The crop transformation is implemented using the CropperJS library. For a detailed tutorial, refer to the following video references:

- [CropperJS Live Tutorial](https://www.youtube.com/live/MttSRUarA6g?feature=shared)
- [CropperJS Tutorial](https://youtu.be/lbktWEPWRek?feature=shared)

## Working with Canvas

### What is Canvas?

In HTML, the `<canvas>` element is used to create and manipulate graphics, especially for rendering 2D graphics and animations on a web page. It provides a blank rectangular area where graphics can be drawn using JavaScript.

### Why Canvas?

- **Dynamic Image Manipulation:** Real-time, dynamic image manipulation for interactive applications.
- **Custom Graphics:** Powerful 2D drawing API for creating custom graphics and overlays on images.
- **Programmatic Control:** Full programmatic control over the canvas content using JavaScript.
- **Resolution Independence:** Manipulate images without worrying about pixelation or loss of quality.
- **Interactive Features:** Add sliders or buttons for real-time adjustments to image parameters.

## Manual Implementation and Challenges

Despite efforts to find JavaScript libraries for image augmentation similar to CropperJS, many libraries rely on TensorFlow or OpenCV4, making them suitable for terminals but not web scripts. The console errors encountered, such as "Failed to load module script," indicate compatibility issues in a browser environment.

Referenced Libraries:
- [piercus/image-augment](https://github.com/piercus/image-augment)
- [kedemd/image-augmentor](https://github.com/kedemd/image-augmentor)
- [iberatkaya/image-augmentation](https://github.com/iberatkaya/image-augmentation)

Due to integration challenges, transformations are manually implemented using the `<canvas>` element, inspired by concepts from [Hasty AI](https://hasty.ai/docs/mp-wiki/augmentations/overview-of-augmentations-in-ml) and [Albumentations](https://albumentations.ai/).

## Image Transformation Details:

### Shear

Shear is a geometric augmentation that changes the form of an image along a specific axis, creating a different perception angle. It transforms the initial square shape into a trapezoid. Shear is useful for augmenting images to help algorithms identify objects from multiple angles. [Learn More](https://hasty.ai/docs/mp-wiki/augmentations/shear)

### Rotate

Rotate is a data augmentation technique used to randomly rotate an image clockwise or counter-clockwise by a certain number of degrees. [Learn More](https://hasty.ai/docs/mp-wiki/augmentations/rotate)

### Noise

Noise introduces random variations in brightness or color. It is beneficial for simulating real-world conditions where images may have unexpected variations. [Learn More](https://hasty.ai/docs/mp-wiki/augmentations/gaussian-noise)

## Files Explanation:

- **index.html:** HTML file.
- **style.css:** CSS file.
- **button.js:** Operations for buttons (e.g., upload, save).
- **parameter.js:** Dynamic changes to inputs based on the selected transformation.
- **transform.js:** Perform transformations on the image using functions in function.js.
- **function.js:** Functions for image transformations.

This project uses a combination of manual implementation with canvas and inspiration from existing libraries to achieve the desired image augmentation functionalities.
