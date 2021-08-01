## Crawler <img src="https://deno.land/logo.svg" style="margin-bottom: -5px" alt="Deno" width="30"/></img>

This crawler was created to solve the problem that I was not satisfied \
with the filters on the movie watching site. It walks through the pages \
collecting movie data and generating raw data.

#### Why Deno ?

- Deno library for parsing the DOM is written in WASM and it`s many \
  times faster than regular JS in node.js
- IMHO. File system methods are faster

#### To run it:

- Install [Deno](https://deno.land/#installation), if it`s not
- Run in your shell

```javascript
deno run -A --unstable crawler.js
```