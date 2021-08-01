import { CustomDOMParser, isElement, CustomFS } from '../helpers/index.js'
import { MONTHS } from '../constants/constants.js'
import { RAW_DATA_PATH } from '../constants/constants.js'
import format from 'https://deno.land/x/date_fns@v2.22.1/format/index.js'

addEventListener('message', async ({ data: { url } }) => {
  if (typeof url === 'string') {
    await parse(url)
    postMessage({ url, isParsed: true })
  }
  postMessage({ url, isParsed: false })
})

async function parse(url) {
  const cdp = new CustomDOMParser()
  const pageDoc = await cdp.parse(url)
  const anchors = [...(pageDoc?.querySelectorAll('.b-content__inline_item-link > a') ?? [])]

  const filmLinks = anchors.reduce((acc, item) => {
    if (isElement(item)) {
      return [...acc, item.attributes.getNamedItem('href').value]
    }
    return acc
  }, [])

  const movies = await getMovies(filmLinks)
  const fs = new CustomFS()
  await fs.write(RAW_DATA_PATH, movies)
}

async function getMovies(links) {
  return await Promise.all(
    links.map(async (link) => {
      const cdp = new CustomDOMParser()
      const pageDoc = await cdp.parse(link)

      const rezkaPeoplesChoice = parseFloat(pageDoc?.querySelector('span[id^="rating-layer-num"]')?.textContent ?? '0')

      const imdb = parseFloat(pageDoc?.querySelector('span.imdb > span')?.textContent ?? '0')

      const kp = parseFloat(pageDoc?.querySelector('span.kp > span')?.textContent ?? '0')

      const summery = Math.round((rezkaPeoplesChoice + imdb + kp) * 100) / 100

      const name = pageDoc?.querySelector('h1[itemprop="name"]')?.textContent ?? ''

      const alternativeHeadline = pageDoc?.querySelector('div[itemprop="alternativeHeadline"]')?.textContent ?? ''

      const headersTr = [...(pageDoc?.querySelectorAll('table.b-post__info tr') ?? [])].reduce(
        (acc, item) => (isElement(item) ? [...acc, item] : acc),
        []
      )

      const countryTr = headersTr.find((item) =>
        [...(item?.children ?? [])].some((el) => el.textContent.toLowerCase() === 'страна:')
      )

      const dateTr = headersTr.find((item) =>
        [...(item?.children ?? [])].some((el) => el.textContent.toLowerCase() === 'дата выхода:')
      )

      const country =
        [...(countryTr?.children ?? [])].find((el) => !el.className.includes('l'))?.textContent?.toLowerCase() ?? ''

      const dateArr =
        [...(dateTr?.children ?? [])]
          .find((el) => !el.className.includes('l'))
          ?.textContent?.toLowerCase()
          ?.split(' ')
          ?.slice(0, -1) ?? []

      let date = null
      if (dateArr?.length === 3) {
        const [day, monthString, year] = dateArr
        const month = MONTHS.findIndex((item) => item.toLowerCase() === monthString.toLowerCase()) + 1

        date = format(new Date(`${year}-${month}-${day}`), 'dd.MM.yyyy')
      }

      return {
        rezkaPeoplesChoice,
        imdb,
        kp,
        summery,
        link,
        name,
        alternativeHeadline,
        country,
        date,
      }
    })
  )
}
