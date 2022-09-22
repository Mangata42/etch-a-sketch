const CANVAS_SIZE = 640;

let pixelContainer = document.querySelector(".pixel-container");

function onEnter(e)
{
    this.style.backgroundColor = "blue";
}


function computePixelDensity(numberOfPixels = 16)
{
    let pixelsSize = CANVAS_SIZE / numberOfPixels;
    let totalPixels = Math.pow(numberOfPixels, 2);

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

computePixelDensity(64);