export class Loader {
  #text = ''
  #chars = ['\\', '|', '/', '-']
  #x = 0
  #intervar = null

  constructor() {}

  set text(str) {
    this.#text = str
  }

  create() {
    this.#intervar = setInterval(() => {
      this.#log()
    }, 100)
  }

  #log() {
    const str = '\r' + '    ' + this.#chars[this.#x++] + ' ' + this.#text + '\r'
    Deno.stdout.write(new TextEncoder().encode(str))
    this.#x = this.#x % this.#chars.length
  }

  clear() {
    if (this.#intervar) {
      clearInterval(this.#intervar)
    }
  }
}
