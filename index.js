const items = [
  {
    class: "gre",
    onClick: `colorChanger('.blu')`,
    color: "green"
  },
  {
    class: "ora",
    onClick: `dissapear('.pur')`,
    color: "orange"
  },
  {
    class: "red",
    onClick: `changeSize('.cya')`,
    color: "red"
},
{
  class: "yel",
  onClick: `openInNewTab()`,
  color: "yellow"
},
{
  class: "blu",
  onClick: `quarantaine('.blu')`,
  color: "blue"
},
{
  class: "pin",
  onClick: `quarantaineTwo()`,
  color: "pink"
},
{
  class: "cya",
  onClick: `dance('.ora')`,
  color: "cyan"
},
{
  class: "mag",
  onClick: `colorCycle('.mag')`,
  color: "magenta"
},
{
  class: "pur",
  onClick: `reload()`,
  color: "purple"
}
]
const mainHtml = items.reduce(mkHtmlStr, '');

function changeSize (query) {
  document.querySelector(`${query}`).classList.toggle('changeSize');
}

function colorChanger (item) {
    document.querySelector(`${item}`).classList.toggle('changeColor');
}

function dissapear (item) {
    document.querySelector(`${item}`).classList.toggle('dissapear');
}

function quarantaine (item) {
    document.querySelector(`${item}`).classList.toggle('quarantaine');
}

function quarantaineTwo () {
    document.querySelector(`.gre`).classList.toggle('quarantaine');
    document.querySelector(`.ora`).classList.toggle('quarantaine')
    document.querySelector(`.red`).classList.toggle('quarantaine')
    document.querySelector(`.yel`).classList.toggle('quarantaine')
    document.querySelector(`.blu`).classList.toggle('quarantaine')
    document.querySelector(`.pin`).classList.toggle('quarantaine')
    document.querySelector(`.cya`).classList.toggle('quarantaine')
    document.querySelector(`.mag`).classList.toggle('quarantaine')
    document.querySelector(`.pur`).classList.toggle('quarantaine')
}

function dance (item) {
    document.querySelector(`${item}`).classList.toggle('dance');
}

function colorCycle (item) {
    document.querySelector(`${item}`).classList.toggle('colorCycle');
}

function reload () {
    window.location.reload(false);
}

function openInNewTab() {
    var url = "https://www.youtube.com/watch?v=ub82Xb1C8os";

  var win = window.open(url, '_blank');
  win.focus();
}

function mkHtmlStr (htmlStr, item) {
  const stringToAppend = `<div onclick="${item.onClick}"
                               class="${item.class}"
                               style="background:${item.color};">
                          </div>`;

  return htmlStr + stringToAppend;
}

document.querySelector('main').innerHTML = mainHtml;
