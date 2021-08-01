import { DOMParser } from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'

export class CustomDOMParser {
  static _requestsDelay = 500
  #parser
  #delayInit
  #timer

  constructor() {
    this.#parser = new DOMParser()
    this.#delayInit = 1000
  }

  get #delay() {
    return (this.#delayInit += this.#delayInit + CustomDOMParser._requestsDelay)
  }

  #recursiveFetch(url) {
    // deno-lint-ignore no-this-alias
    const selfLink = this

    return new Promise((resolve) => {
      function recursion() {
        selfLink.#fetch(url).then((data) => {
          if (data) {
            resolve(data)
            clearTimeout(selfLink.#timer)
          } else {
            selfLink.#timer = setTimeout(() => {
              recursion()
            }, selfLink.#delay)
          }
        })
      }

      recursion()
    })
  }

  async #fetch(url) {
    CustomDOMParser._requestsDelay += 500

    const response = await new Promise((resolve) => {
      setTimeout(() => fetch(url).then((response) => resolve(response)), CustomDOMParser._requestsDelay)
    })

    if (!response.ok) {
      console.error(`fetch responce by ${url} in CustomDOMParser is ok: ${response.ok}  status: ${response.status}`)
      return null
    }

    const string = await response.text()
    if (!string || typeof string !== 'string') {
      console.error(`fetch response.text() by ${url} in CustomDOMParser is empty`)
      return null
    }

    return string
  }

  #getHTMLDocument(string) {
    if (!string) {
      return string
    }

    const HTMLDocument = this.#parser.parseFromString(string, 'text/html')
    const documentElement = HTMLDocument?.documentElement ?? null

    if (!documentElement || documentElement.children.length <= 0) {
      console.error('parseFromString in CustomDOMParser go wrong')
      return null
    }

    return documentElement
  }

  async parse(url) {
    const string = await this.#recursiveFetch(url)
    return this.#getHTMLDocument(string)
  }
}
