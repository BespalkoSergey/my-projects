import jsdom from 'jsdom';
import { writeFile } from 'fs';
import fetch from 'node-fetch';

const url = 'https://ru.freeflagicons.com/list/';

function getDocument(siteString) {
    const { JSDOM } = jsdom;
    const DOM = new JSDOM(`${siteString}`);
    const window = DOM.window;
    return window.document;
}

function getTerminalInnerElement(elem) {
    return elem.children.length > 0 ? getTerminalInnerElement(elem.children[0]) : elem;
};

function getTabHeder(HTMLCollection) {
    const arr = [];
    HTMLCollection.forEach(item => {
        if (item.innerHTML) {
            if (item.innerHTML === '<br>') arr.push('Флаг');
            else arr.push(item.innerHTML)
        }
    });
    return arr;
}

function getTabData(HTMLCollection, arrKeys) {
    const arr = [];
    HTMLCollection.forEach(tr => {
        const obj = {};
        [...tr.children].forEach((td, index) => {
            const elem = getTerminalInnerElement(td);
            obj[arrKeys[index]] = elem.src || elem.innerHTML;

        });
        arr.push(obj);
    });
    return arr.slice(1);
}

function writeJSON(data, space = 1) {
    const fileName = 'countries.json';
    const formattedJSON = JSON.stringify(data, null, space);
    const printErr = (err, res) => err ? console.table({ err }) : null;
    writeFile(fileName, formattedJSON, printErr);
}

async function getCountries(url) {
    const site = await fetch(url);
    const siteString = await site.text();
    const document = getDocument(siteString);
    const tTr = document.querySelectorAll('table.country-list tr');
    const tHeaderElems = document.querySelectorAll('tr.dim.header td');
    const arrKeys = getTabHeder(tHeaderElems);
    const countries = getTabData(tTr, arrKeys);
    writeJSON(countries);
}

getCountries(url);