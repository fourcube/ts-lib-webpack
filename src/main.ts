import * as pkg from '../package.json'

export class Foo {
  constructor(selector: string) {
    const el = document.querySelector(selector)

    if (el) el.textContent = `Hello ${pkg.libraryConfig.name} ${pkg.version}!`
  }
}