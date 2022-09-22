const CANVAS_SIZE = 640;

let pixelContainer = document.querySelector(".pixel-container");

function onEnter(e)
{
    this.style.backgroundColor = "blue";
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

// let pixelsBySide = 0;
// let slider = document.getElementById("slider");
// slider.onchange = function () { 
//     pixelsBySide = this.value;
//     computePixelDensity(parseInt(pixelsBySide));
//     console.log(this.value);
// }

computePixelDensity();

function resetCanvas()
{
    let canvasSize = pixelContainer.childElementCount;

    for (let i = 0; i < canvasSize; i++)
    {
        pixelContainer.removeChild(pixelContainer.firstElementChild);
    }
}