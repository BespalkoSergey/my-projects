import { getPagelink, print, msToTime } from './helpers/index.js'
import { Loader, CustomDOMParser } from './helpers/index.js'
import { MAIN_ULR, RAW_DATA_PATH } from './constants/constants.js'
import { existsSync } from 'https://deno.land/std/fs/mod.ts'

const parsedPages = []
const loader = new Loader()
let pages = []
let t0 = 0

const perPageParser = new Worker(new URL('./workers/per-page-parser.worker.js', import.meta.url).href, {
  type: 'module',
  deno: {
    namespace: true,
  },
})

perPageParser.addEventListener('message', (data) => {
  parsedPages.push(data)
  loader.text = `${Math.round((100 * parsedPages.length) / pages.length)}%`
  if (parsedPages.length === pages.length) {
    const t1 = performance.now()
    print(`Parser Done in ${msToTime(t1 - t0)}`)
    loader.clear()
    perPageParser.terminate()
  }
})

const start = async () => {
  if (existsSync(RAW_DATA_PATH)) {
    Deno.removeSync(RAW_DATA_PATH)
  }

  print('Parser Started')
  t0 = performance.now()

  const cdp = new CustomDOMParser()
  const doc = await cdp.parse(MAIN_ULR)
  print('Getted: Main HTMLDocument')

  const pagination = [...(doc?.querySelector('div.b-navigation')?.children || [])]
  const lastPage = parseInt(
    pagination.find((el) => el.className.includes('nav_ext'))?.nextElementSibling?.textContent ?? '0'
  )
  pages = [...Array(lastPage).keys()].map((i) => getPagelink(i + 1, MAIN_ULR))

  loader.create()
  pages.forEach((url) => perPageParser.postMessage({ url }))
}

start()
