import { ensureFile } from 'https://deno.land/std@0.103.0/fs/mod.ts'

export class CustomFS {
  #stringify(data, space = 1) {
    return JSON.stringify(data, null, space)
  }

  async read(path) {
    return await Deno.readTextFile(path)
  }

  async write(filePath, data) {
    if (typeof filePath !== 'string') {
      return false
    }

    try {
      await ensureFile(filePath)
      const string = this.#stringify(data)
      await Deno.writeTextFile(filePath, string, { append: true })
      return true
    } catch (e) {
      console.error('write faild in CustomFS', e.message)
      return false
    }
  }
}
