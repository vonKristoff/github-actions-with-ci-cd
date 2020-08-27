const data = { fraction: 0.5, message: "Hello World" }

function dyi({ message }) {
  return `${message}!`
}

const state = { ...data, fraction: 0.75 }

console.log(dyi(state))

type Style = "bold" | "italic" | "heading" | "indented"

let font: Style

font = "heading"

const test = font + "--type"

console.log(test)

const double = [1, 2, 3].map(num => num * 2)

const app = {
  spesh: thing => [...thing, false]
}

console.log(app.spesh(double))
