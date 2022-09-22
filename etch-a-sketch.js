let pixelContainer = document.querySelector(".pixel-container");

function onEnter(e)
{
    this.style.backgroundColor = "blue";
}

for (let i = 0; i < 16; i++)
{
    let pixel = document.createElement("div");
    pixel.classList = "pixel";
    pixelContainer.appendChild(pixel);
    pixel.addEventListener("mouseenter", onEnter);
}