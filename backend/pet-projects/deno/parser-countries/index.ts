import { DOMParser, Element } from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'
import { NodeList } from 'https://deno.land/x/deno_dom@v0.1.12-alpha/src/dom/node-list.ts'

type CountryType = { [key: string]: string }

const link = 'https://ru.freeflagicons.com/list/'

function getTerminalInnerElement(elem: Element): Element {
  return elem.children.length > 0 ? getTerminalInnerElement(elem.children[0]) : elem
}

function getTextContent(list: NodeList | undefined): string[] {
  return [...(list || [])].map((item, index) => (index === 0 ? 'Флаг' : item.textContent))
}

function getTabData(list: NodeList | undefined, keys: string[]) {
  return [...(list || [])].reduce<CountryType[]>((arr, tr) => {
    return [
      ...arr,
      [...tr.children].reduce<CountryType>((obj, td, index) => {
        const elem = getTerminalInnerElement(td)
        obj[keys[index]] = index === 0 ? elem.attributes.src : elem.textContent
        return obj
      }, {}),
    ]
  }, [])
}

function writeJSON(data: CountryType[], space = 1) {
  const fileName = 'countries.json'
  const formattedJSON = JSON.stringify(data, null, space)
  const uint8Array = new TextEncoder().encode(formattedJSON)
  Deno.writeFile(fileName, uint8Array)
}

async function getCountries(url: string) {
  const res = await fetch(url)
  const string = await res.text()
  const parser = new DOMParser()
  const HTMLDocument = parser.parseFromString(string, 'text/html')
  const rows = HTMLDocument?.documentElement?.querySelectorAll('table.country-list tr')
  const headersNodeList = HTMLDocument?.documentElement?.querySelectorAll('tr.dim.header td')
  const keys = getTextContent(headersNodeList)
  const countries = getTabData(rows, keys)
  writeJSON(countries)
}

getCountries(link)
