import "./style.css"
import { setupCounter } from "./counter"
import { setupImage } from "./image"

const counter = document.querySelector<HTMLButtonElement>("#counter")!
const img = document.querySelector<HTMLImageElement>("#img")!
const loaded = document.querySelector<HTMLDivElement>("#loaded")!
const loadButton = document.querySelector<HTMLDivElement>("#loadButton")!

setupCounter(counter)
loadButton.onclick = () => setupImage(img, loaded)
