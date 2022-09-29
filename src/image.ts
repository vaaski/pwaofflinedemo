import localforage from "localforage"
const SOURCE = "https://home.vaaski.dev/static/STScI-01GA6KKWG229B16K4Q38CH3BXS.jpg"

const LFKEY = "image"

export const setupImage = async (element: HTMLImageElement, loaded: HTMLSpanElement) => {
  let start: number

  const savedBlob = await localforage.getItem<Blob>(LFKEY)

  start = performance.now()

  if (savedBlob) {
    const dataURL = URL.createObjectURL(savedBlob)
    element.src = dataURL
  } else {
    const request = await fetch(SOURCE)
    const blob = await request.blob()
    const dataURL = URL.createObjectURL(blob)
    element.src = dataURL
    localforage.setItem(LFKEY, blob)
  }

  const delta = performance.now() - start
  const formatted = Math.round(delta)
  loaded.innerText = `time to load: ${formatted}ms`
}
