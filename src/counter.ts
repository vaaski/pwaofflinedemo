interface LocalStored {
  counter: number
}
export function ls<L extends keyof LocalStored>(key: L): LocalStored[L] | null
export function ls<L extends keyof LocalStored>(key: L, value: LocalStored[L]): void
export function ls<L extends keyof LocalStored>(
  key: L,
  value?: LocalStored[L],
): LocalStored[L] | null {
  return value !== undefined
    ? localStorage.setItem(`pwaofflinedemo-${key}`, JSON.stringify(value))
    : JSON.parse(localStorage.getItem(`pwaofflinedemo-${key}`) as string)
}

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    ls("counter", counter)
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener("click", () => setCounter(++counter))
  setCounter(ls("counter") ?? 0)
}
