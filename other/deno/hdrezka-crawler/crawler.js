import { getPagelink, print, Stopwatch } from './helpers/index.js'
import { Loader, CustomDOMParser } from './helpers/index.js'
import { MAIN_ULR, RAW_DATA_PATH } from './constants/constants.js'
import { existsSync } from 'https://deno.land/std/fs/mod.ts'

const loader = new Loader()
const stopwatch = new Stopwatch()
const perPageParser = new Worker(new URL('./workers/per-page-parser.worker.js', import.meta.url).href, {
  type: 'module',
  deno: {
    namespace: true,
  },
})

const parsedPages = []
perPageParser.addEventListener('message', ({ data }) => {
  parsedPages.push(data)
  print(`Getted: ${data?.url ?? ''}, isParsed: ${data?.isParsed ?? false}`)
  loader.currentValue = parsedPages.length

  if (loader.isLoaded) {
    stopwatch.stop()
    print(`Parser Done in ${stopwatch.timeDiff}`)
    perPageParser.terminate()
  }
})

const start = async () => {
  if (existsSync(RAW_DATA_PATH)) {
    Deno.removeSync(RAW_DATA_PATH)
  }

  print('Parser Started')
  stopwatch.start()

  const cdp = new CustomDOMParser()
  const doc = await cdp.parse(MAIN_ULR)
  print('Getted: Main HTMLDocument')

  const pagination = [...(doc?.querySelector('div.b-navigation')?.children || [])]
  const lastPage = parseInt(
    pagination.find((el) => el.className.includes('nav_ext'))?.nextElementSibling?.textContent ?? '0'
  )
  const pageLinks = [...Array(lastPage).keys()].map((i) => getPagelink(i + 1, MAIN_ULR))

  loader.create()
  loader.maxValue = lastPage
  pageLinks.forEach((url) => perPageParser.postMessage({ url }))
}

start()
