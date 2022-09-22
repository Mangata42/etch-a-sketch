const CANVAS_SIZE = 640;

let pixelContainer = document.querySelector(".pixel-container");
let pixelsBySide = 0;

function onEnter(e)
{
    this.style.backgroundColor = colorPicker.value;
}

function resetCanvas()
{
    let canvasSize = pixelContainer.childElementCount;

    for (let i = 0; i < canvasSize; i++)
        pixelContainer.removeChild(pixelContainer.firstElementChild);
}

function computePixelDensity(pixelsBySide = 16)
{
    let pixelsSize = CANVAS_SIZE / pixelsBySide;
    let totalPixels = Math.pow(pixelsBySide, 2);

    for (let i = 0; i < totalPixels; i++)
    {
        let pixel = document.createElement("div");
        pixel.classList = "pixel";
        pixel.style.height = `${pixelsSize}px`;
        pixel.style.width = `${pixelsSize}px`;
        pixelContainer.appendChild(pixel);
        pixel.addEventListener("mouseenter", onEnter);
    }
}

function valueChange()
{
    pixelsBySide = slider.value;
    sliderDisplay.textContent = `${pixelsBySide} x ${pixelsBySide}`;
    resetCanvas();
    computePixelDensity(parseInt(pixelsBySide));
}

let slider = document.getElementById("slider");
let colorPicker = document.getElementById("color");
let sliderDisplay = document.getElementById("slider-display");
let resetButton = document.getElementById("reset");

slider.addEventListener("change", valueChange);
resetButton.addEventListener("click", valueChange);
computePixelDensity(); //default behavior