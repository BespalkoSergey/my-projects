import { JSON_PATH, SORTED_JSON_PATH, EXCLUDED_COUNTRIES } from './constants/constants.js'
import { CustomFS } from './helpers/index.js'
import { existsSync } from 'https://deno.land/std/fs/mod.ts'

const customFs = new CustomFS()
const string = await customFs.read(JSON_PATH)
const result = Array.from(new Set(JSON.parse(string)))
  .filter((item) => !EXCLUDED_COUNTRIES.some((country) => item.country.includes(country)))
  .sort((prev, next) => {
    if (prev.summery < next.summery) {
      return 1
    }
    if (prev.summery > next.summery) {
      return -1
    }
    return 0
  })
  .sort((prev, next) => {
    if (prev.summery === next.summery) {
      if (prev.imdb < next.imdb) {
        return 1
      }
      if (prev.imdb > next.imdb) {
        return -1
      }
    }
    return 0
  })

if (existsSync(SORTED_JSON_PATH)) {
  Deno.removeSync(SORTED_JSON_PATH)
}
customFs.write(SORTED_JSON_PATH, result)
