export class Stopwatch {
  #t0 = null
  #t1 = null

  get timeDiff() {
    if (this.#t0 === null) {
      console.error("You didn't start the stopwatch")
      return null
    }

    if (this.#t1 === null) {
      console.error("You didn't stop the stopwatch")
      return null
    }

    return this.#msToTime(this.#t1 - this.#t0)
  }

  start() {
    if (this.#t0 !== null) {
      console.error('You already started the stopwatch')
      return
    }

    this.#t0 = performance.now()
  }

  stop() {
    if (this.#t1 !== null) {
      console.error('You already stoped the stopwatch')
      return
    }

    this.#t1 = performance.now()
  }

  #msToTime(s) {
    const pad = (n, z = 2) => ('00' + n).slice(-z)

    const ms = s % 1000
    s = (s - ms) / 1000
    const secs = s % 60
    s = (s - secs) / 60
    const mins = s % 60
    const hrs = (s - mins) / 60

    return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3)
  }
}
