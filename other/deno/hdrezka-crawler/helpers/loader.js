export class Loader {
  #text = ''
  #chars = ['\\', '|', '/', '-']
  #x = 0
  #intervar = null
  #encoder
  #maxValue = 0
  #currentValue = 0

  constructor() {
    this.#encoder = new TextEncoder()
  }

  set maxValue(number) {
    if (typeof number !== 'number') {
      console.error('Type Error: Invalid type in Loader as max value of one hundred percent')
      return
    }

    this.#maxValue = number
  }

  set currentValue(number) {
    if (typeof number !== 'number') {
      console.error('Type Error: Invalid type in Loader as current value')
      return
    }

    this.#currentValue = number
  }

  get isLoaded() {
    return this.#getPercents() >= 100
  }

  #getPercents() {
    if (this.#currentValue > this.#maxValue) {
      console.error('Range Error: Invalid range in Loader as current value bigger than max value')
      return null
    }

    return Math.round((100 * this.#currentValue) / this.#maxValue) || 0
  }

  create() {
    this.#intervar = setInterval(() => {
      this.#log()
    }, 100)
  }

  #log() {
    const str = `\r    ${this.#chars[this.#x++]} ${this.#getPercents()}%\r`
    Deno.stdout.write(this.#encoder.encode(str))
    this.#x = this.#x % this.#chars.length

    if (this.isLoaded) {
      this.#terminate()
    }
  }

  #terminate() {
    if (this.#intervar) {
      clearInterval(this.#intervar)
    }
  }
}
