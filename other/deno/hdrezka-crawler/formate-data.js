import { RAW_DATA_PATH, JSON_PATH } from './constants/constants.js'
import { CustomFS } from './helpers/index.js'
import { existsSync } from 'https://deno.land/std/fs/mod.ts'

const customFs = new CustomFS()

const data = await customFs.read(RAW_DATA_PATH)

const minimizedData = data.replaceAll(new RegExp('\\]\\n\\[|\\]\\[|\\[\\]|[\x00-\x1F]|\\s', 'gm'), '')

const validArrayString = minimizedData.replaceAll('}{', '},{')

const parsedData = validArrayString ? JSON.parse(validArrayString) : []

if (existsSync(JSON_PATH)) {
  Deno.removeSync(JSON_PATH)
}
customFs.write(JSON_PATH, parsedData)
