window.DEBUT = true;
window.$ = GeneratorJs();
window.$$ = GeneratorWebHelper();
$.init();
load("./script.js");



//STYLE
var slideScss = `

/* main.js/slideScss*/

@import url("https://fonts.googleapis.com/css2?family=Cantarell&display=swap");

:root {
    --hue: 235;
    --light: 10%;
    --sat: 55%;
    --hueAscent: 234;
    --lightAscent: 67%;
    --fontFamily: "Roboto";
    --blockCountColor: #fff;
    --fontScale: 1;
    --fontsize: 1.3rem;
    --linkColor: hsl(var(--hue), 50%, 60%);
}

::selection {
    background: hsl(var(--hueAscent),
            var(--satAscent),
            calc(calc(var(--light) + var(--lightAscent)) / 2));
}

#app {
    position: relative;
}

#header {
    position: relative;

    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    &:hover {
        opacity: 1;
    }
}

:fullscreen {
    background-color: hsl(var(--h), var(--s), var(--l));

    .slideroot {
        height: 100vh;
    }
}

.slideroot {
    position: sticky;
    top: var(--headerHeight, 60px);
    scroll-snap-type: y mandatory;
    height: calc(100vh - var(--headerHeight, 60px));

    overflow: scroll;
    background-color: hsla(0, 0%, 100%, 0.1);
}

.slide {
    position: relative;
    --padding: clamp(1em, 15vw, 2em);
    width: calc(100%);
    // height:calc(100vh - var(--headerHeight,60px));
    height: 100%;
    padding-inline: clamp(2em, 10vw, 10vw);
    padding-block: var(--padding);
    box-sizing: border-box;
    font-size: clamp(calc(0.8rem * var(--fontScale, 1)),
            3vw,
            calc(1.5rem * var(--fontScale, 1)));
    // background-color:hsla(0,0%,100%,.1);
    overflow-y: auto;
    scroll-snap-align: start;
    scroll-padding: var(--headerHeight, 60px);
    scroll-snap-stop: always;
    scroll-behavior: smooth;

    .slideCount {
        display: inline-block;
        position: absolute;
        top: 1em;
        right: 4em;
        font-size: calc(0.8rem * var(--fontScale, 1));
        color: var(--textColor);
        cursor: pointer;
        padding: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: hsl(var(--hueAscent, 30),
                var(--satAscent, 70%),
                var(--lightAscent, 50%));
        padding-block: 0.4em;
    }


    b,
    strong {
        color: hsl(var(--hue, 30),
                calc(var(--satAscent, 70%) * .9),
                calc(var(--lightAscent, 50%) * .8));
    }

    i,
    em {
        color: hsl(var(--hueAscent, 30),
                calc(var(--satAscent, 70%) * .9),
                calc(var(--lightAscent, 50%) * .8));
    }

    h1 {
        font-size: 1.5em;

        &:first-child {
            padding-top: 0px !important;
        }
    }

    h2 {
        font-size: 1.3em;
    }

    a {
        color: var(--linkColor, hsl(0, 0%, 100%));
    }

    &:nth-child(odd) {
        background-color: hsla(0, 0%, 100%, 0.05);
    }

    ol,
    ul,
    p,
    img {
        padding: clamp(0.5em, 10vw, 1em);
    }

    ol,
    ul {
        margin-left: 2em;
        padding-left: 1em;
    }

    li {
        padding-block: 0.2em;

        &:first-child {
            padding-top: 0px;
        }

        &:last-child {
            padding-bottom: 0px;
        }
    }

    img {
        max-width: 80vw;
        // max-height:80vh;
        aspect-ratio: prefer-content;
        padding: 1em;
    }

    blockquote {
        padding-block: 0.1em;
        padding-inline: 1em;
        font-style: italic;
        text-shadow: 0.05em 0.05em 0 hsla(var(--hueAscent), 70%, 40%, 0.4);
    }

    p {
        padding: 0px;
        padding-block: .5em;

        &:empty {
            display: none;
        }
    }
}

table {
    position: relative;
    display: block;
    width: 90%;
    padding: 0.5em;
    margin: 2em;
    margin-inline: auto;
    box-shadow: 0 0 5px var(--testShadow, black);
    overflow: auto;

    thead,
    td:nth-child(1) {
        position: relative;
    }

    thead,
    tbody {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    tr {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        padding: 0.2em;

        td {
            text-align: center;
            width: 100%;
            padding: 0.2em;
            background: red;
            background-color: hsla(var(--hue, 0), 60%, 5%, 0.1);

            &:nth-child(even) {
                background-color: hsla(var(--hue, 0), 60%, 5%, 0.1);
            }

            &:hover {
                background-color: hsla(var(--hue, 0), 60%, 45%, 0.2);
            }
        }

        .left {
            text-align: left;
        }

        .right {
            text-align: right;
        }

        .justify {
            text-align: justify;
        }

        .center {
            text-align: center;
        }

        &:nth-child(even) {
            background-color: hsla(var(--hue, 0), 40%, 35%, 0.15);
        }

        &:hover {
            background-color: hsla(var(--hue, 0), 60%, 45%, 0.2);
        }
    }
}

#sideBar {
    display: block;
    position: fixed;
    top: 0;
    height: 100vh;
    padding: 1em;
    margin-inline: auto;
    z-index: 100;
    left: 0;
    width: clamp(150px, 5vw, 10vw);
    transition: all 0.1s ease-in-out;
    background-color: hsla(var(--hue), 70%, 5%, 1);
    opacity: 0;

    transform: translateX(calc(-100% + 2em));

    &:hover {
        opacity: 1;
        border-right: 1px solid hsla(var(--hueAscent), 50%, 10%, 1);
        box-shadow: 1em 0 0.5em hsla(0, 0%, 0%, 0.2);
        transform: translateX(0);
    }

    #slidenav {
        position: relative;
        height: 100%;
        padding-block: 1em;
        width: 100%;

        #slidenavlist {
            position: relative;
            height: calc(90vh - 2em);
            overflow-y: auto;
            margin-top: 1em;
            padding: 5px;
            list-style-type: none;
            font-size: 0.8em;

            li {
                margin-block: 1em;
                display: flex;
                justify-content: center;
                align-items: center;

                cursor: hand;

                a {
                    background-color: hsl(var(--hue), 50%, 95%);
                    color: var(--accentColor, hsl(var(--hueAscent), 80%, 20%));
                    border-radius: 5px;
                    font-weight: bold;
                    box-shadow: 0.1em 0.1em 5px hsla(0, 0%, 0%, 0.2);

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    min-width: 6em;
                    height: 100%;
                    min-height: 2em;
                    text-decoration: none;
                    font-weight: bold;

                    &:hover,
                    .active {
                        outline: 2px solid aqua;
                    }
                }

                &:nth-last-child(1) {
                    margin-bottom: 40vh;
                }

                &:nth-first-child(1) {
                    margin-top: 2em;
                }
            }
        }
    }
}

.blockroot {
    position: sticky;
    top: 0;
    height: 100vh;
    padding-block: 2em;
    padding-inline: clamp(2em, 10vw, 30vw);
    margin-block: 0em;
    overflow: scroll;
    background-color: hsla(0, 0%, 100%, 0.1);
    overflow-y: auto;

    scroll-snap-type: y mandatory;
    scroll-snap-align: start;
    scroll-padding: var(--headerHeight, 60px);
    scroll-snap-stop: always;
    scroll-behavior: smooth;

    .block {
        margin-inline: auto;
        margin-block: 2em;
        word-break: break-word;
        width: 100%;
        padding: 0.5em;
        // background-color:hsla(0,0%,100%,.1);

        box-shadow: 1px 1px 0.5em hsla(0, 0%, 0%, 0.2);

        pre {
            // display:block;
            // margin-block:1em;
            padding: 0;
            margin: 0;
            box-shadow: 1px 1px 5px hsla(0, 0%, 0%, 0.2);

            code {
                display: block;
                margin: 0;
                padding: 0.5em;
                margin-inline: 0.2em;
                padding-inline: 0.2em;

                span {
                    padding: 0;
                    margin: 0;
                }
            }
        }

        &:last-child {
            margin-bottom: 10em;
        }

        .execution_count {
            font-weight: 300;
            font-size: 0.6em;
            // padding:.1em;
            // margin:.1em;
        }
    }

    .input {
        display: block;
        margin-inline: auto;
        margin-block: 1em;
        // background-color:hsla(0,0%,0%,.1);
        font-family: "consoles", "terminal", "monospace";
        overflow-x: auto;
    }

    .output {
        display: block;
        font-family: "consoles", "terminal", "monospace";
        background-color: hsla(0, 0%, 0%, 0.05);

        // overflow-x:auto;
        // outline:1px solid black;
        img {
            margin-inline: auto;
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }

        .success {
            color: green;
        }

        .fail {
            color: red;
        }
    }
}

.needs-background-light {
    background: hsla(0, 0%, 100%, 0.9) !important;
    padding-block: 1em;
}

.code {
    background-color: hsla(0, 0%, 100%, 0.8);
//    color: #333;
    padding: 1em;
}

#app{
  user-select: none;
  code{
    user-select:text;
    &:selection{
        background: gray;
    }
  }
}

#titleheading {
    a {
        link-style: none;
        text-style: none;
    }
}

#fullscreenTitle {
    display: grid;
    place-items: center;
    margin: 0 auto;
    padding: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 2em;
    z-index: 1000;
}

.pdfdialog {
    width: 100vw;
    height: 80vh;
    margin: 4em auto;
    padding: 2em;
    border: 1px solid white;
    border-radius: 1em;
    backdrop-filter: blur(10px) brightness(50%);

    object {
        padding: 1em;
        display: block;
        margin: 0 auto;
    }
}

.cross {
    position: absolute;
    top: 1em;
    display: inline-block;
    right: 1em;
    height: 1em;
    width: 1em;
    cursor: pointer;

    &:before {
        content: "";
        background-color: white;
        display: inline-block;
        position: absolute;
        width: 15%;
        height: 100%;
        transform: rotate(-45deg);
    }

    &:after {
        content: "";
        background-color: white;
        display: inline-block;
        position: absolute;
        width: 15%;
        height: 100%;
        transform: rotate(45deg);
    }
}

.MathJax {
    padding: 2px 5px;
    cursor: pointer;
}



`;

//loadscss(slideScss)

function openFile() {
  var fileObj = grab("#open")[0].files[0];
  var fileName = fileObj.name;
  var fileType = fileObj.type;
  var fileUrl = URL.createObjectURL(fileObj);
  ext = fileName.split(".").pop();
  if (fileType == "text/markdown" || ext == "md" || ext == "markdown") {
    parseSlide(fileUrl, mathjaxHljsCopyIcon);
  }
  if (fileType == "application/x-ipynb+json" || ext == "ipynb") {
    parseNotebook(fileUrl);
  }
  // updateFiledropEventListeners()
}

function cloneView() {
  var url = window.location.href;
  // window.open(url, '_blank');
  window.open(url, "newwindow", "width=600,height=400");
  gen(a, "clone", "Open Clone Window", "hide", {
    href: window.location.href,
    target: "_blank",
  }).click();
}

function toggleHints() { }

// Fullscreen
function toggleFullscreen() {
  if (document.fullscreenElement) {
    // append(fullscreenTitle, "", 'replace')
    document.exitFullscreen();
  } else {
    // document.documentElement.requestFullscreen();
    grab(`#main`)[0].requestFullscreen();
    var titlestr =
      document.title +
      router.pathname.replaceAll("/", " | ") +
      grab("h1")[0].innerHTML;
    // append(main, gen(div, "fullscreenTitle", titlestr), 'before')
  }
}

document.addEventListener("dblclick", (e) => {
  e.preventDefault();
  toggleFullscreen();
});

// ScrollControl

function scrollAction(direction = "down", scrollState) {
  var end =
    grab(`#slideroot`)[0].scrollHeight - grab(`#slideroot`)[0].offsetHeight;
  var offsetHeight = grab(`#slideroot`)[0].offsetHeight;

  if (!scrollState)
    scrollState = grab(`#slideroot`)[0].scrollTop / offsetHeight;
  var endState = end / offsetHeight;

  if (direction == "home") {
    grab(`#slideroot`)[0].scrollTop = 0;
  }
  if (direction == "end") {
    grab(`#slideroot`)[0].scrollTop = endState * offsetHeight;
  }
  if (direction == "up") {
    // grab(`#slideroot`)[0].scrollTop -= offsetHeight
    scrollState += 1;
    grab(`#slideroot`)[0].scrollTop = scrollState * offsetHeight;
  }
  if (direction == "down") {
    scrollState -= 1;
    grab(`#slideroot`)[0].scrollTop = scrollState * offsetHeight;
  }
}

// Keyboard Control
function keyPressHandler(e) {
  // e.preventDefault()
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) {
  } else {
    var key = e.key.toLowerCase();
    // log(key)
    if (key == "arrowdown" || key == "pagedown" || key == "arrowright") {
      e.preventDefault();
      scrollAction("up");
    }
    if (key == "arrowup" || key == "arrowleft" || key == "pageup") {
      e.preventDefault();
      scrollAction("down");
    }
    if (key == "home") {
      e.preventDefault();
      scrollAction("home");
    }
    if (key == "end") {
      e.preventDefault();
      scrollAction("end");
    }
    if (key == "f") {
      e.preventDefault();
      toggleFullscreen();
    }
    if (key == "o") {
      e.preventDefault();
      openFile();
    }
    if (key == "c") {
      e.preventDefault();
      cloneView();
    }
    if (key == "h") {
      e.preventDefault();
      toggleHints();
    }
    if (key == "r") {
      e.preventDefault();
      reloadPage();
    }
    if (key == "enter") {
      e.preventDefault();
      if (document.activeElement != document.body) {
        document.activeElement.click();
      }
    }
    if (key == "backspace") {
      e.preventDefault();
      grab(".pathNavigator")[grab(".pathNavigator").length - 1].click();
    }
    if (key == "escape") {
      e.preventDefault();
      //closeModal may interfere with fullscreenmode
    }
  }
  if (e.ctrlKey && e.key.toLowerCase() == "o") {
    e.preventDefault();
    grab("#open")[0].click();
  }
  e.stopPropagation();
}



document.addEventListener("keydown",keyPressHandler,false);

const hashChannel = new BroadcastChannel("hashChannel");

window.addEventListener("hashchange", (e) => {
  hashChannel.postMessage({
    dir: router.dir.substring(1),
    file: router.file,
  });
});

hashChannel.addEventListener("message", (e) => {
  var dir = e.data.dir;
  var file = e.data.file;
  // var router = new Router()
  // if ((router.dir != dir) || (router.file != file)) {
  //     router.setdirpath(dir, file)
  // }
});

const convertLocalLinks = () => {
  var router = new Router();
  setTimeout(() => {
    document.body.innerHTML = document.body.innerHTML.replaceAll(
      "./",
      router.dirpath
      // this.dir==="/"?this.root:this.root+this.dir
    );
  }, 2000);

  document.title = grab("h1")[0].innerHTML;
};

function loadBasicSkeleton(title = "Home") {
  load("/style.scss");
  //your app logic
  append(app, "", "over"); /* reset app */
  append(app, gen(header, "header", "", "header"));
  append(header, gen(h3, "heading", gen(a, "", title, "title", "/")));
  // append(app, gen(main, "main", "", 'main', { "draggable": "true" }));
  append(app, gen(main, "main", "", "main", { tabindex: 20 }));
  append(main, gen(div, "appmain", "", "appmain container"));
  append(app, gen(footer, "appfooter", "", "footer"));
  append(appmain, gen(section, "hero", "", "hero"));
}

function dict2hash(dict) {
  var hash = "";
  Object.keys(dict).forEach((key) => {
    if (hash.length == 0) {
      hash = key + "=" + dict[key];
    } else {
      hash += "&" + key + "=" + dict[key];
    }
  });
  return hash;
}

function hash2dict(hash) {
  var dict = {};
  hash
    .substring(1)
    .split("&")
    .forEach((row) => {
      // var keyval = ""
      keyval = row.split("=");
      dict[keyval[0]] = keyval[1];
    });
  return dict;
}

class Router {
  constructor() {
    this.dir = "";
    this.file = "";
    this.hashObj = {};
    this.filepath = "";
    this.readfromurl();
    this.readHash();

    this.updateroute();
    return this.hash;
  }

  readfromurl() {
    this.host = window.location.host;
    this.protocol = window.location.protocol + "//";
    this.pathname = window.location.pathname;
    this.root = this.protocol + this.host + this.pathname;
    this.origin = window.location.origin;
  }

  readHash() {
    this.hash = window.location.hash;
    this.hashDict = hash2dict(this.hash);
    this.hash
      .substring(1)
      .split("&")
      .forEach((row) => {
        var keyval = "";
        keyval = row.split("=");

        if (keyval[0] == "dir") {
          this.dir = keyval[1];
        }
        if (keyval[0] == "file") {
          this.file = keyval[1];
        }
        this.hashObj[keyval[0]] = keyval[1];
      });
    this.setdirpath(this.dir, this.file);
  }

  updateroute() {
    this.filepath = this.root;
    this.hash = `dir=${this.dir}&file=${this.file}`;
    if (this.dir.length == 0) {
      this.dir += "/";
    } else {
      if (this.dir.substring(this.dir.length - 1) != "/") {
        this.dir += "/";
      }
      this.filepath += this.dir.substring(1);
    }

    // this.filepath=this.dir==="/"?this.root:this.root+this.dir
    this.dirpath = this.filepath;
    if (this.file.length > 0) {
      this.filepath += this.file;
    }

    var oldhash = window.location.hash;
    if (oldhash != this.hash) {
      window.location.hash = this.hash;
    }
    window.location.hash = this.hash;
    // this.setdirpath(this.dir, this.file)
  }

  setdirpath(dir = "", file = "", url = window.location.origin) {
    // window.location.href = url
    this.dir = dir;
    this.file = file;
    this.updateroute();
  }
  get view() {
    return this.filepath;
  }

  set setfile(file) {
    this.file = file;

    this.updateroute();
  }

  set setdir(dir) {
    this.dir = dir;

    this.updateroute();
  }
}
const router = new Router();

function footerButtons() {
  if (grab(`#footerButtons`).length != 0) {
    append(`#footerButtons`, "", "replace");
  }
  append(`#appfooter`, gen(div, "footerButtons", ""), "before");
  append(
    `#footerButtons`,
    gen(span, "reload", "Reload", "button,reloadPage", {
      onclick: "reloadPage()",
    })
  );
  append(
    `#footerButtons`,
    gen(span, "print", "Print Slides", "button,printSlides", {
      onclick: "printSlides()",
    })
  );
  append(
    `#footerButtons`,
    gen(span, "print", "Print Notes", "button,printSlides", {
      onclick: "printNotes()",
    })
  );
  append(
    `#footerButtons`,
    gen(input, "open", "", "hide", {
      type: "file",
      accept: ".md,.markdown,.ipynb,png,jpg,mp4",
      onchange: "openFile()",
      multiple: "true",
    })
  );
  // append(`#footerButtons`, gen(input, "open", "Open", "button,openFile", { "type": "file", "onchange": "openFile()" }))
  append(
    `#footerButtons`,
    gen(label, "openbtn", "Open", "button,openFile", { for: "open" })
  );
}

function generateView() {
  if (grab("#appmain").length != 0) {
    append("#appmain", "", "over");
  }
  // append(main, gen(main, "main", "", ",main"), "replace")
  var file = filedetect();

  var file = router.file;
  if (file.length == 0) {
    router.setfile = "list.txt";
  }

  var ext = file.split(".").pop();
  const route = {
    txt: () => {
      parselist(router.view);
    },
    csv: () => {
      parseCsv(router.view);
    },
    md: () => {
      parseSlide(router.view, mathjaxHljsCopyIcon);
    },
    ipynb: () => {
      parseNotebook(router.view);
    },
    pdf: () => {
      showPDF(router.view);
    },
  };
  try {
    route[ext]();
    updateFiledropEventListeners()
  } catch (e) { }

  // updateFiledropEventListeners()

}

async function filedetect() {
  var router = new Router();
  var presentfile = "";
  var files = "slide.ipynb,slide.md".split(",");
  files.forEach((file) => {
    var testpath = router.root + router.dir.substring(1) + file;
    fetch(testpath).then((res) => {
      if (res.status == 200) {
        router.setfile = file;
      }
    });
  });
  return presentfile;
}

function updateOnHashChange() {
  window.removeEventListener("hashchange", updateOnHashChange);
  var router = new Router();
  if (router.dir != "/") {
    var oldroot = router.root;
    var indexpath = router.root + router.dir.substring(1) + "index.html";
    var newroot = router.root + router.dir.substring(1);
    router.dir = "/";
    fetch(indexpath).then((res) => {
      if (res.status == 200) {
        window.location.href = newroot;
      }
    });
  }

  reloadPage();
  
}

function reloadPage() {
  sessionStorage.clear();
  localStorage.clear();
  paginationUpdate();
  generateView();
  footerButtons();
  window.scrollTo(0, 0);
  window.addEventListener("hashchange", updateOnHashChange);
  // convertLocalLinks()
}


function printSlides(){
  loadscss(printSlideStyle,"printSlideStyle");
  window.print()
}

function printNotes(){
  loadscss(printNotesStyle,"printNotesStyle");
  window.print()
}
function changepath(thispath) {
  // log(thispath.dataset.path)
  var path = thispath.dataset.path;
  var origin = window.location.origin;
  pathname = path.replace(origin, "");
  // log(pathname)
  var router = new Router();
  router.setdir = pathname;

  window.location.pathname = "/";
}

function paginationUpdate(loc = "") {
  // var router = new Router()
  router.readHash();
  loc = router.pathname + router.dir;
  if (grab("#location").length != 0) {
    append("#location", "", "replace");
  }

  // try { append(`#location`, "", "replace") } catch { }
  append(`#header`, gen(nav, "location", ""));
  var root = router.protocol + router.host;
  var path = "/";

  var printLocation = loc.replaceAll("https://", "").replaceAll("http://", "");
  printLocation.split("/").forEach((l) => {
    if (l.length > 0) {
      // log(l)
      path += l + "/";
      // append("#location", gen(a, '', l, 'pathNavigator', root + path, { "onclick": "updateOnHashChange()" }))
      append(
        "#location",
        gen(a, "", l, "pathNavigator", {
          "data-path": root + path,
          onclick: "changepath(this)",
          tabindex: 20,
        })
      );
      // append("#location", gen(span, '', "  ", 'spacer'))
    }
  });
  // generateView()
}

loadBasicSkeleton();

function appendDir(e) {
  var newDir = router.dir + e.dataset.dir;
  newDir = newDir.replaceAll("//", "/").replaceAll("\\\\", "\\");
  router.setdirpath(newDir, "");
}
function appendfile(e) {
  router.setdirpath(router.dir, e.dataset.file);
}

function parselist(
  fileListUrl = window.location.origin + window.location.pathname + "list.txt",
  target = "#main"
) {
  var filelist = "";
  getfile(fileListUrl, (filelist) => {
    append(target, "", "over");
    append(
      target,
      gen(div, "appmain", gen(h1, "", "File Browser", "heading"), "appmain"),
      "over"
    );

    append(appmain, gen(div, "directoryGrid", "", "dirGrid"));

    var currentLocation = router.dirpath;

    filelist
      .split("\n")
      .sort()
      .forEach((link, i) => {
        var url = currentLocation + link.replaceAll("./", "");
        link = link.replaceAll("\t", "").replaceAll("\n", "");
        //for directories
        var ext = link.split(".").pop();
        // log(ext)
        if (
          link[2] != "." &&
          !link.includes(".md") &&
          !link.includes(".ipynb") &&
          !link.includes(".pdf") &&
          !link.includes(".csv")
        ) {
          var linkname = link
            .replaceAll("./", "")
            .replaceAll("/", " / ")
            .replaceAll("-", " ")
            .replaceAll("_", " ");
          if (link.length > 0 && link != "./") {
            var redirect = currentLocation + link.replaceAll("./", "") + "/";
            var dir = link.replaceAll("./", "");
            append(
              `#directoryGrid`,
              gen(a, "", linkname, "folderLinks", {
                "data-dir": dir,
                onclick: `appendDir(this)`,
                tabindex: 10,
              })
            );
          }
        }

        //for markdown files
        if (link[2] != "." && link.includes(".md")) {
          var linkname = link
            .replaceAll("./", "")
            .replaceAll("/", " / ")
            .replaceAll("-", " ")
            .replaceAll(".md", "")
            .replaceAll("_", " ");
          if (link.length > 0 && link != "./") {
            var file = link.replaceAll("./", "");
            append(
              directoryGrid,
              gen(a, `${url}`, linkname, "slideLinks", {
                "data-file": file,
                onclick: `appendfile(this)`,
                tabindex: 10,
              })
            );
          }
        }

        //for notebook files
        if (link[2] != "." && link.includes(".ipynb")) {
          var linkname = link
            .replaceAll("./", "")
            .replaceAll("/", " / ")
            .replaceAll("-", " ")
            .replaceAll(".ipynb", "")
            .replaceAll("_", " ");
          var file = link.replaceAll("./", "");
          if (link.length > 0 && link != "./") {
            append(
              directoryGrid,
              gen(a, `${url}`, linkname, "slideLinks,notebookLinks", {
                "data-file": file,
                onclick: `appendfile(this)`,
                tabindex: 10,
              })
            );
          }
        }
        //for pdf files
        if (ext == "pdf") {
          // log("pdf")
          var linkname = link
            .replaceAll("./", "")
            .replaceAll("/", " / ")
            .replaceAll("-", " ")
            .replaceAll(".ipynb", "")
            .replaceAll("_", " ");
          if (link.length > 0 && link != "./") {
            append(
              directoryGrid,
              gen(object, `${url}`, linkname, "pdfLinks", {
                onclick: `parsePdf(\`${url}\`)`,
                tabindex: 10,
              })
            );
          }
        }


          //for csv files
          if (ext == "csv") {
            // log("pdf")
            var linkname = link
              .replaceAll("./", "")
              .replaceAll("/", " / ")
              .replaceAll("-", " ")
              .replaceAll(".csv", "")
              .replaceAll("_", " ");
            if (link.length > 0 && link != "./") {
              append(
                directoryGrid,
                gen(object, `${url}`, linkname, "csvLinks", {
                  onclick: `parseCsv(\`${url}\`)`,
                  tabindex: 10,
                })
              );
            }
          }


      });
  });
}

function mathjaxHljsCopyIcon() {
  console.info("mathjaxHljsCopyIcon");
  load(
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css"
  );
  load(
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"
  );

  setTimeout(() => {
    MathJax.startup.document.state(0);
    MathJax.texReset();
    MathJax.typesetClear();

    grab("code").forEach((c) => {
      c.innerHTML = c.innerHTML.replaceAll("<br>", "\n");
    });
    hljs.highlightAll();
    setTimeout(GeneratorWebHelper().addCopyIcon(), 1000);
    MathJax.typesetPromise();
  }, 2000);
}




function parseCsv(link, callback) {
  var filename=link.split("/")[link.split("/").length-1]
  router.setfile=filename
  console.info("parsecsv");
  loadscss(slideScss);
  getfile(link, (csv) => {
    if (grab("#back").length != 0) {
      append("#back", "", "replace");
    }

    append(
      `#location`,
      gen(a, "back", "Back", "pathNavigator", {
        "data-file": "",
        onclick: "appendfile(this)",
        tabindex: 20,
      })
    );

    append(`main`, "", "over");
    updateFiledropEventListeners();


    var listrootscss=`
    .listroot{
      display:block;
      min-height:40vh;
      padding-block: 2em;
      padding-inline:clamp(5em,5vw,1em);

      h1{
        text-transform: capitalize;

      }


      .listheader{
        padding-block:1em;
      }

      .search{
        padding:.5em;
        border-radius:.2em;
        outline:none;
        border:none;
      }
    }
    
    `
    loadscss(listrootscss)


    
    append(`main`, gen(div, "listroot","", "listroot"));
    append(`#listroot`,gen(h1,filename,filename))
    append(`#listroot`,gen(div,"listheader","","listheader"))
    append(`#listheader`,gen(input,"searchcsv","search","search",{title:"search"}))
    
    
    var searchElement=grab("#searchcsv")[0]
    searchElement.addEventListener('focus', (e)=> {
      
      console.log("searchIn focus")
      document.removeEventListener("keydown",keyPressHandler)
      
    })

    searchElement.addEventListener('focusout',e=>{
      document.addEventListener("keydown",keyPressHandler) 
    })


    append(`#listroot`,gen(table,"tablemain","","listbody"))

    append(`#tablemain`,gen("thead","tablehead",""))
    append(`#tablemain`,gen("tbody","tablebody",""))
    console.log(csv)
    csv.split("\n").forEach(row=>{
      console.log(row)
      append(`#tablebody`,gen("tr","",row))
    })




    
 
    







    convertLocalLinks();
    if (callback) {
      console.info("callback");
      callback();
    }
  });
}










































function parseSlide(link, callback) {
  console.info("parseslide");
  loadscss(slideScss);
  getfile(link, (md) => {
    if (grab("#back").length != 0) {
      append("#back", "", "replace");
    }

    append(
      `#location`,
      gen(a, "back", "Back", "pathNavigator", {
        "data-file": "",
        onclick: "appendfile(this)",
        tabindex: 20,
      })
    );

    append(`main`, "", "over");
    updateFiledropEventListeners();
    append(`main`, gen(div, "slideroot", "", "slideroot"));
    append(slideroot, gen("aside", "sideBar", ""));
    append(sideBar, gen(div, "slidenav", gen(h3, "", "Navigator")));
    append(slidenav, gen(ul, "slidenavlist", "", "slidenavlist"));

    var html = md.split(/^---\s*?$/gm);

    for (var i = 0; i < html.length; i++) {
      var h = html[i];
      if (h.length > 0) {
        var x = parsemd(h, (H) => {
          append(slideroot, gen(section, `slide${i}`, H, "slide"));
          // if (i != 0 && i != html.length) {
          if (i != 0) {
            append(
              grab(".slide")[i],
              gen(span, "", `${i + 1}/${html.length}`, "slideCount", {
                onclick: "mathjaxHljsCopyIcon()",
                title: "Re Render Math",
              })
            );
          }
          append(
            slidenavlist,
            gen(
              li,
              "",
              gen(a, "", `Slide ${i + 1}`, "slideNavLink", {
                onclick: `slide${i}.scrollIntoView()`,
              })
            )
          );
        });
      }
    }
    append(
      slidenavlist,
      gen(
        li,
        "",
        gen(a, "src", `Source`, "slideNavLink", {
          onclick: `viewSourceFile('${link}')`,
          href: link,
          target: "_blank",
        })
      )
    );
    convertLocalLinks();
    if (callback) {
      console.info("callback");
      callback();
    }
  });
}

function parseNotebook(link, callback) {
  loadscss(slideScss);
  getfile(link, (nb) => {
    if (grab("#back").length != 0) {
      append("#back", "", "replace");
    }
    append(
      `#location`,
      gen(a, "back", "Back", "pathNavigator", {
        "data-file": "",
        onclick: "appendfile(this)",
        tabindex: 20,
      })
    );
    if (grab("#main").length != 0) {
      append("#main", "", "over");

      updateFiledropEventListeners();
    }

    append(main, gen(div, "blockroot", "", "blockroot"));
    append(blockroot, gen("aside", "sideBar", ""));
    append(sideBar, gen(div, "slidenav", gen(h3, "", "Navigator")));
    append(slidenav, gen(ul, "slidenavlist", "", "slidenavlist"));

    var PrintFileName = link.split("/").pop().replaceAll(".ipynb", "");
    var nbmd = ``;

    append(
      blockroot,
      gen(h1, "Title", `Python Notebook: ${PrintFileName}`, "title")
    );
    nb = JSON.parse(nb);

    nb.cells.forEach((cell) => {
      if (cell.source.length > 0) {
        var cell_type = cell.cell_type;

        var ecount = cell.execution_count;

        if (cell_type == "markdown") {
          var src = cell.source;
          var md = src.join("\n");
          append(
            blockroot,
            gen(div, `Markdown${ecount}`, parsemd(md), "markdown block")
          );
        }
        if (cell_type == "code") {
          var count = cell.execution_count;

          var src = cell.source;
          var inputCode = src.join(""); //.replaceAll("<br>", "\r\n")
          append(blockroot, gen(div, `input${count}`, "", "input block"));
          append(
            `#input${count}`,
            gen(span, "", `In [${count}] :`, "execution_count")
          );
          append(
            `#input${count}`,
            gen(
              pre,
              "",
              gen(code, "", inputCode, "python language-python code")
            )
          );

          var outputs = cell.outputs;
          var status = "success";
          if (outputs.length > 0) {
            var status =
              outputs[0].output_type == "execute_result" ? "success" : "fail";
            append(
              blockroot,
              gen(
                div,
                `output${count}`,
                gen(span, "", `Out [${count}] :`, "execution_count"),
                `output block execution_count,${status}`
              )
            );
            outputs.forEach((output) => {
              // for (var j = 0; outputs.length; j++) {
              // var output = outputs[j]

              var output_type = output.output_type;
              if (output_type == "stream") {
                var text = output.text.join("");
                // append(`#output${count}`, gen(pre, "", text, `output ${output_type}`))
                append(
                  `#output${count}`,
                  gen("samp", "", text, `samp ${output_type}`)
                );
              }

              if (output_type == "display_data") {
                var data = output.data;
                if (data.hasOwnProperty("text/plain")) {
                  var text = data["text/plain"];
                  append(
                    `#output${count}`,
                    gen(
                      p,
                      "",
                      gen(code, "", text, `output ${output_type}`),
                      `output ${output_type}`
                    )
                  );
                  // append(`#output${count}`, gen(p, "", gen(code, "", text, `output ${output_type}`)))
                }

                if (data.hasOwnProperty("image/png")) {
                  var className = "";

                  var image = data["image/png"];
                  var src = `data:image/png;base64,${image}`;
                  if (output.metadata.hasOwnProperty("needs_background")) {
                    className = `needs-background-${output.metadata["needs_background"]}`;
                  }
                  append(
                    `#output${count}`,
                    gen(img, "", "", `output ${output_type} ${className}`, {
                      src: src,
                    })
                  );
                }
              }

              if (
                output_type == "execute_result" ||
                output_type == "display_data"
              ) {
                var data = output.data;
                if (data.hasOwnProperty("text/plain")) {
                  var text = data["text/plain"].join("");
                  // append(`#output${count}`, gen(pre, "", gen(code, "", text, `output ${output_type}`)))
                  append(
                    `#output${count}`,


                    gen("samp", "", text, `samp ${output_type}`)
                  );
                }
              }
            });
          }
        }
      }
    });

    var noOfBlocks = grab(".block").length;
    for (var i = 0; i < noOfBlocks; i++) {
      append(
        grab(".block")[i],
        gen(span, "", `${i + 1}/${noOfBlocks}`, "slideCount hide", {
          onclick: "mathjaxHljsCopyIcon()",
          title: "Re Render Math",
        })
      );
      // append(slidenavlist, gen(li, "", gen(a, "", `Block ${i + 1}`, "slideNavLink", { "onclick": `block${i}.scrollIntoView()` })))
      append(
        slidenavlist,
        gen(
          li,
          "",
          gen(a, "", `Block ${i + 1}`, "slideNavLink", {
            onclick: `grab(".block")[${i}].scrollIntoView()`,
          })
        )
      );
    }
    // download source file
    var downloadFileName = `${link.split("/")[link.split("/").length - 2]}_${link.split("/")[link.split("/").length - 1]
      }`;
    append(
      slidenavlist,
      gen(
        li,
        "",
        gen(a, "src", `Source`, "slideNavLink", {
          onclick: `viewSourceFile('${link}')`,
          href: link,
          target: "_blank",
          download: downloadFileName,
        })
      )
    );
    append(
      blockroot,
      gen(
        span,
        "",
        gen(a, "src", `Download Source`, "button", {
          onclick: `viewSourceFile('${link}')`,
          href: link,
          target: "_blank",
          download: downloadFileName,
        })
      )
    );

    if (callback) {
      console.info("callback")
      callback()
    }
  });

  convertLocalLinks();
  updateFiledropEventListeners();

}

function closeparent(e) {
  append(e.parentElement, "", "replace");
}

function parsePdf(link) {
  loadscss(slideScss);
  // router = New Router()
  link = link.replaceAll("./", router.dirpath);
  // log(link)

  // append(`main`, "", "over")
  append(`#main`, gen(dialog, "pdfdialog", "", "pdfdialog active"));
  append(pdfdialog, gen(a, "", "Download PDF", "download button", link));
  append(
    pdfdialog,
    gen("object", "mainpdf", "", "mainpdf", {
      width: "80%",
      height: "80vh",
      data: link,
      type: "application/pdf",
    })
  );
  pdfdialog.classList.add("showdialog");
  pdfdialog.showModal();
  pdfdialog.addEventListener("blur", () => {
    log(blur);
    pdfdialog.classList.remove("showdialog");
    pdfdialog.close();
  });

  append(
    pdfdialog,
    gen(span, "closedialog", "", "closedialog cross", {
      onclick: "closeparent(this)",
    })
  );
}

$$.init();
if (window.location.href.includes("Gallery")) {
  // log("gallery")
  setTimeout(() => {
    load("/gallery.js");
  }, 1000);
}

reloadPage();

//
function updateFiledropEventListeners(target = grab("#main")[0]) {
  // e.preventDefault ();
  // e.stopPropagation ();
  // log("updateFiledropEventListeners")
  target.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  target.classList.remove("blur");

  target.removeEventListener("drop", ondrop);
  target.removeEventListener("dragleave", ondragleave);
  target.removeEventListener("dragenter", ondragenter);

  target.addEventListener("dragenter", ondragenter, true);
  target.addEventListener("drop", ondrop, true);
  target.addEventListener("dragleave", ondragleave, true);

  function ondragenter(e) {
    e.preventDefault();
    e.stopPropagation();
    target.classList.add("blur");
  }

  function ondragleave(e) {
    e.preventDefault();
    e.stopPropagation();
    target.classList.remove("blur");
  }

  function ondrop(e) {
    e.preventDefault();
    e.stopPropagation();
    target.classList.remove("blur");
    dropfilehandler(e);
  }

  function dropfilehandler(e) {
    target.classList.remove("blur");
    console.log(e);
    var files = e.dataTransfer.files;
    for (var i = 0; i < files.length; i++) {
      var f = files[i];
      var fileName = f.name;
      var fileType = f.type;
      var fileUrl = URL.createObjectURL(f);
      var ext = fileName.split(".").pop();
      if (fileType == "text/markdown" || ext == "md" || ext == "markdown") {
        parseSlide(fileUrl, mathjaxHljsCopyIcon);
      }
      if (fileType == "application/x-ipynb+json" || ext == "ipynb") {
        parseNotebook(fileUrl);
      }
      // getfile(fileUrl, fileName)
    }
    updateFiledropEventListeners();
  }
}

// updateFiledropEventListeners()

updateFiledropEventListeners();

setTimeout(() => {
  try {
    load(`${router.dirpath}script.js`)
  } catch (error) {
    console.log(error)    
  };
}, 2000);




var hidenodescss=`
[data-dir*="node_modules"]{
  display:none !important;
}
`
setTimeout(loadscss(hidenodescss),2000)

var printSlideStyle=`

@media print {
    @page {
        size: A4 landscape;
    }

    .slideroot,
    .blockroot {
        overflow: auto;
        height: auto;
        background-color: var(--bgColor);
    
    }

    .slide {
        page-break-after: always;
        break-inside: avoid;
        page-break-inside: avoid;
    }

    .block {
        break-inside: avoid;
        page-break-inside: avoid;
    }

    img {
        display: block;
        page-break-before: auto;
        page-break-after: auto;
        page-break-inside: avoid;
        break-inside: avoid;
    }
    
    video,
    #sideBar,
    #appfooter {
        display: none;
    }
    a::after{
      font-style: italic;
      font-size:.8em;
      content: " (" attr(href) ") ";
   }
}`


var printNotesStyle=`

@media print {
    @page {
        size: A4 portrait;
    }
    body{
    font-size:12px;
    --fontsize:12px;
    
    }
:root{
  --fontsize:12px;
  --fontScale:.7;


}

    .slideroot,
    .blockroot {
        overflow: auto;
        height: min-content;
        background-color: white;
padding:.5em;
    }

    .slide {
//        page-break-after: always;
//        break-inside: avoid;
//        page-break-inside: avoid;
    }

    .block {
//        break-inside: avoid;
//        page-break-inside: avoid;
    }

    img {
        display: block;
//        page-break-before: auto;
//        page-break-after: auto;
        page-break-inside: avoid;
        break-inside: avoid;
    }
    
    video,
    #sideBar,
    #appfooter {
        display: none;
    }
    a::after{
      font-style: italic;
      font-size:.8em;
      content: " (" attr(href) ") ";
   }
}`
//loadscss(printSlideStyle,"printSlideStyle")

window.addEventListener("contextmenu",(e)=>{
e.preventDefault() 
e.stopImmediatePropagation()
})
