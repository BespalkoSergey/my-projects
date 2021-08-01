import { format } from 'https://deno.land/std@0.103.0/path/mod.ts'

export const MAIN_ULR = 'https://rezkery.com/films/best/comedy/'

export const EXCLUDED_COUNTRIES = ['индия', 'ссср', 'россия', 'корея южная', 'китай', 'украина', 'беларусь']

export const MONTHS = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]

export const RAW_DATA_PATH = format({
  root: '/',
  dir: 'dist',
  name: 'raw-data',
  ext: '.txt',
})

export const JSON_PATH = format({
  root: '/',
  dir: 'dist',
  name: 'data',
  ext: '.json',
})

export const SORTED_JSON_PATH = format({
  root: '/',
  dir: 'dist',
  name: 'sorted-data',
  ext: '.json',
})
