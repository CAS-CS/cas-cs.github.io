window.DEBUT = true
window.$ = GeneratorJs()
window.$$ = GeneratorWebHelper()
$.init()
load("./script.js")

//STYLE
var slideScss = `
@import url('https://fonts.googleapis.com/css2?family=Cantarell&display=swap');
:root{
    --hue:278;
    --light:10%;
    --sat:55%;
    --hueAscent:234;
    --fontFamily:"Cantarell";
    --blockCountColor:#fff;
    --fontScale:1;
    --fontsize:1.5rem;
}
::selection{
    background:hsl(var(--hueAscent),var(--satAscent),calc(calc(var(--light) + var(--lightAscent)) / 2));

}
#app{
    position:relative;

}
#header{
    position:relative;

    opacity:0;
    transition:opacity .5s ease-in-out;
    &:hover{
        opacity:1;
    }
}




:fullscreen {
    background-color: hsl(var(--h), var(--s), var(--l));

    .slideroot{
        height:100vh;
        


    }
}



.slideroot{
    position:sticky;
    top:var(--headerHeight,60px);
    scroll-snap-type: y mandatory;
    height:calc(100vh - var(--headerHeight,60px));
    
    overflow:scroll;
    background-color:hsla(0,0%,100%,.1);




}

.slide{
    position:relative;
    --padding:clamp(1em,15vw,2em);
    width:calc(100%);
    // height:calc(100vh - var(--headerHeight,60px));
    height:100%;
    padding-inline:clamp(2em,10vw,10vw);;
    padding-block:var(--padding);
    box-sizing:border-box;
    font-size:clamp(calc(.8rem * var(--fontScale,1)),3vw,calc(1.5rem * var(--fontScale,1)));
    // background-color:hsla(0,0%,100%,.1);
    overflow-y:auto;
    scroll-snap-align:start;
    scroll-padding:var(--headerHeight,60px);
    scroll-snap-stop: always
    scroll-behavior:smooth;

    .slideCount{
        display:inline-block;
        position:absolute;
        top:2em;
        right:5em;
        font-size:calc(.8rem * var(--fontScale,1));


    }

    h1,h2,h3,h4,h5,h6{
        color:hsl(var(--hueAscent,30),var(--satAscent,70%),var(--lightAscent,50%));)));
        padding-block:.4em;

    }
    h1{
        font-size:1.5em;
        &:first-child{
            padding-top:0px !important;;
        }
    }
    h2{
        font-size:1.3em;
    }
    a{
        color:var(--linkColor,hsl(0,0%,100%));
    }


    &:nth-child(odd){

        background-color:hsla(0,0%,100%,.05);
    }
    ol,ul,p,img{
        padding:clamp(.5em,10vw,1em);
    }
    ol,ul{
        margin-left:2em;
        padding-left:2em;
    }
    li{
        padding-block:.2em;
        &:first-child{
            padding-top:0px;
        }
        &:last-child{
            padding-bottom:0px;
        }
    }
    img{
        max-width:80vw;
        // max-height:80vh;
        aspect-ratio:prefer-content;
        padding:1em;
    }

    blockquote{
        padding-block:.1em;
        padding-inline:1em;
        font-style:italic;
        text-shadow:.1em .1em 0 hsla(0,0%,100%,.2);
    }
    p{
        padding:0px;
        padding-block:1em;
        &:empty{
            display:none;
        }
    }

}



table{
    position:relative;
    display: block;
    width:90%;
    padding:.5em;
    margin:2em;
    margin-inline:auto;
    box-shadow:0 0 5px var(--testShadow,black);
    overflow:auto;
    
    thead,td:nth-child(1){
        position:relative;
    }
    thead,tbody{
        width:100%;
        display:flex;
        flex-direction:column;
        
    }
    tr{
        display:flex;
        flex-direction:row;
        flex-grow:1;
        padding:.2em;
        td{
            text-align:center;
            width:100%;
            padding:.2em;
            background:red;
            background-color:hsla(var(--hue,0),60%,5%,.1);

            &:nth-child(even){
                background-color:hsla(var(--hue,0),60%,5%,.1);
            }
            &:hover{
                background-color:hsla(var(--hue,0),60%,45%,.2);
            }


     
        }
        .left{
            text-align:left;
        }
        .right{
            text-align:right;
        }
        .justify{
            text-align:justify;
        }
        .center{
            text-align:center;
        }

   
        &:nth-child(even){
            background-color:hsla(var(--hue,0),40%,35%,.15);
        } 

        &:hover{
            background-color:hsla(var(--hue,0),60%,45%,.2);
        }
    }
}

#sideBar{

    display:block;
    position:fixed;
    top:0;
    height:100vh;
    padding:1em;
    margin-inline:auto;
    z-index:100;
    left:0;
    width:clamp(150px,5vw,10vw);
    transition:all .1s ease-in-out;
    background-color:hsla(var(--hue),70%,5%,1);
    opacity:0;
    
    transform: translateX(calc(-100% + 2em));
    
    
    &:hover{
        opacity:1;
        border-right:1px solid hsla(var(--hueAscent),50%,10%,1);
        box-shadow:1em 0 .5em hsla(0,0%,0%,.2);
        transform: translateX(0);
    }




    #slidenav{
      position: relative;
      height: 100%;
      padding-block: 1em;
      width: 100%;


    #slidenavlist{
        position: relative;
        height: calc(90vh - 2em);
        overflow-y: auto;
        margin-top: 1em;
        padding:5px;
        list-style-type: none;
        font-size: .8em;



        li{
        margin-block:1em;
        display: flex;
        justify-content: center;
        align-items: center;
        
        cursor: hand;

        a{
            background-color:hsl(var(--hue),50%,95%);
            color:var(--accentColor,hsl(var(--hueAscent),80%,20%));
            border-radius: 5px;
            font-weight: bold;
            box-shadow: .1em .1em 5px hsla(0,0%,0%,.2);
            
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            min-width: 6em;
            height: 100%;
            min-height: 2em;
            text-decoration:none;
            font-weight: bold;
            
            
        &:hover,.active{
            outline:2px solid aqua;
        }

        }

        &:nth-last-child(1){
            margin-bottom: 40vh;
        }

        &:nth-first-child(1){
            margin-top: 2em;
        }



      }

  
    }
}


}

  .blockroot{
    
    position:sticky;
    top:0;
    height:100vh;
    padding-block:2em;
    padding-inline:clamp(2em,10vw,30vw);
    margin-block:0em;
    overflow:scroll;
    background-color:hsla(0,0%,100%,.1);
    overflow-y:auto;
    
    scroll-snap-type: y mandatory;
    scroll-snap-align:start;
    scroll-padding:var(--headerHeight,60px);
    scroll-snap-stop: always;
    scroll-behavior:smooth;

    .block{
        margin-inline:auto;
        margin-block:2em;
        word-break:break-word;
        width:100%;
        padding:.5em;
        // background-color:hsla(0,0%,100%,.1);

        box-shadow:1px 1px .5em hsla(0,0%,0%,.2);
        pre{
            // display:block;
            // margin-block:1em;
            padding:0
            margin:0;
            box-shadow:1px 1px 5px hsla(0,0%,0%,.2);
            code{
                display:block;
                margin:0;
                padding:.5em;

                margin-inline:.2em
                padding-inline:.2em
                span{
                    padding:0;
                    margin:0;
                }
            }
        }
        &:last-child{
            margin-bottom:10em;
        }

   


        .execution_count{
            font-weight:300;
            font-size:.6em;
            // padding:.1em;
            // margin:.1em;
        }
    }

    .input{
        display:block;
        margin-inline:auto;
        margin-block:1em;
        // background-color:hsla(0,0%,0%,.1);
        font-family:"consoles", "terminal", "monospace";
        overflow-x:auto;
    }
    .output{
        display:block;
        font-family:"consoles", "terminal", "monospace";
        background-color:hsla(0,0%,0%,.05);
        // overflow-x:auto;
        // outline:1px solid black;
        img{
            margin-inline:auto;
            max-width:100%;
            max-height:100%;
            object-fit:contain;
        }
  
        .success{color:green;}
        .fail{color:red;}

    }
  }

.hide{
    display:none;
}

.needs-background-light{
    background: hsla(0,0%,100%,.9) !important;
    padding-block:1em;
  }

  .code{
    background-color:hsla(0,0%,100%,.8);
    color:#333;
    padding:1em;
  }


  #titleheading{
    a{
    link-style:none;
    text-style:none;
    }

  }

  #fullscreenTitle{
    display:grid;
    place-items:center;
    margin:0 auto;
    padding: 0 auto;
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:2em;
    z-index:1000;
  }
`

function openFile() {

}

function cloneView() {
    var url = window.location.href
    // window.open(url, '_blank');
    window.open(url,
        'newwindow',
        'width=600,height=400');
    gen(a, "clone", "Open Clone Window", "hide", { "href": window.location.href, "target": "_blank" }).click()
}

function toggleHints() { }


// Fullscreen
function toggleFullscreen() {
    if (document.fullscreenElement) {
        // append(fullscreenTitle, "", 'replace')
        document.exitFullscreen();
    }
    else {
        // document.documentElement.requestFullscreen();
        grab(`#main`)[0].requestFullscreen();
        var titlestr = document.title +
            router.pathname.replaceAll("/", " | ") +
            grab("h1")[0].innerHTML
        // append(main, gen(div, "fullscreenTitle", titlestr), 'before')
    }
}

document.addEventListener("dblclick", e => {
    e.preventDefault()
    toggleFullscreen()
})

// ScrollControl

function scrollAction(direction = "down", scrollState) {
    var end = grab(`#slideroot`)[0].scrollHeight - grab(`#slideroot`)[0].offsetHeight
    var offsetHeight = grab(`#slideroot`)[0].offsetHeight


    if (!scrollState) scrollState = grab(`#slideroot`)[0].scrollTop / offsetHeight
    var endState = end / offsetHeight


    if (direction == "home") {
        grab(`#slideroot`)[0].scrollTop = 0
    }
    if (direction == "end") {
        grab(`#slideroot`)[0].scrollTop = endState * offsetHeight
    }
    if (direction == "up") {
        // grab(`#slideroot`)[0].scrollTop -= offsetHeight
        scrollState += 1
        grab(`#slideroot`)[0].scrollTop = scrollState * offsetHeight

    }
    if (direction == "down") {
        scrollState -= 1
        grab(`#slideroot`)[0].scrollTop = scrollState * offsetHeight
    }
}

// Keyboard Control
document.addEventListener("keydown", e => {
    // e.preventDefault()
    var key = e.key.toLowerCase()
    // log(key)
    if (key == "arrowdown" || key == "pagedown" || key == "arrowright") {
        e.preventDefault()
        scrollAction('down')
    }
    if (key == "arrowup" || key == "arrowleft" || key == "pageup") {
        e.preventDefault()
        scrollAction('up')
    }
    if (key == "home") {
        e.preventDefault()
        scrollAction('home')
    }
    if (key == "end") {
        e.preventDefault()
        scrollAction('end')
    }
    if (key == "f") {
        e.preventDefault()
        toggleFullscreen()
    }
    if (key == "o") {
        e.preventDefault()
        openFile()
    }
    if (key == "c") {
        e.preventDefault()
        cloneView()
    }
    if (key == "h") {
        e.preventDefault()
        toggleHints()
    }
    if (key == "r") {
        e.preventDefault()
        reloadPage()
    }
})

const hashChannel = new BroadcastChannel("hashChannel")

window.addEventListener("hashchange", e => {

    hashChannel.postMessage({
        dir: router.dir.substring(1),
        file: router.file
    })
})


hashChannel.addEventListener("message", e => {

    var dir = e.data.dir
    var file = e.data.file
    // var router = new Router()
    // if ((router.dir != dir) || (router.file != file)) {
    //     router.setdirpath(dir, file)
    // }
})



const convertLocalLinks = () => {
    var router = new Router()
    setTimeout(() => {
        document.body.innerHTML = document.body.innerHTML.replaceAll('./', router.dirpath)

    }, 2000);
}


function loadBasicSkeleton(title = "CAS-CS") {

    load('/style.scss')
    //your app logic
    append(app, "", "over") /* reset app */
    append(app, gen(header, "header", "", 'header'));
    append(header, gen(h3, 'heading', gen(a, '', title, 'title', "/")))
    append(app, gen(main, "main", "", 'main'));
    append(main, gen(div, "appmain", "", 'appmain container'));
    append(app, gen(footer, "appfooter", "", 'footer'));
    append(appmain, gen(section, "hero", "", "hero"))

}


function dict2hash(dict) {
    var hash = ""
    Object.keys(dict).forEach(key => {
        if (hash.length == 0) {
            hash = key + "=" + dict[key]
        }
        else {
            hash += "&" + key + "=" + dict[key]
        }
    })
    return hash
}

function hash2dict(hash) {
    var dict = {}
    hash.substring(1,).split("&").forEach(row => {
        // var keyval = ""
        keyval = row.split("=")
        dict[keyval[0]] = keyval[1]
    })
    return dict
}

class Router {
    constructor() {
        this.dir = ""
        this.file = ""
        this.hashObj = {}
        this.filepath = ""
        this.readfromurl()
        this.readHash()

        this.updateroute()
        return this.hash
    }

    readfromurl() {
        this.host = window.location.host
        this.protocol = window.location.protocol + "//"
        this.pathname = window.location.pathname
        this.root = this.protocol + this.host + this.pathname
        this.origin = window.location.origin

    }

    readHash() {
        this.hash = window.location.hash
        this.hashDict = hash2dict(this.hash)
        this.hash.substring(1,).split("&").forEach(row => {
            var keyval = ""
            keyval = row.split("=")

            if (keyval[0] == "dir") {
                this.dir = keyval[1]
            }
            if (keyval[0] == "file") { this.file = keyval[1] }
            this.hashObj[keyval[0]] = keyval[1]
        })
        this.setdirpath(this.dir, this.file)
    }

    updateroute() {
        this.filepath = this.root
        this.hash = `dir=${this.dir}&file=${this.file}`
        if (this.dir.length == 0) {
            this.dir += "/"
        }
        else {
            if (this.dir.substring(this.dir.length - 1) != "/") {
                this.dir += "/"
            }
            this.filepath += this.dir
        }

        this.dirpath = this.filepath
        if (this.file.length > 0) {
            this.filepath += this.file
        }

        var oldhash = window.location.hash
        if (oldhash != this.hash) {
            window.location.hash = this.hash
        }
        window.location.hash = this.hash
        // this.setdirpath(this.dir, this.file)
    }

    setdirpath(dir = "", file = "", url = window.location.origin) {
        // window.location.href = url
        this.dir = dir
        this.file = file
        this.updateroute()
    }
    get view() {
        return this.filepath
    }

    set setfile(file) {
        this.file = file

        this.updateroute()
    }

    set setdir(dir) {
        this.dir = dir

        this.updateroute()
    }



}
const router = new Router()



function footerButtons() {
    if (grab(`#footerButtons`).length != 0) {
        append(`#footerButtons`, "", "replace")
    }
    append(`#appfooter`, gen(div, "footerButtons", ""), 'before')
    append(`#footerButtons`, gen(button, "reload", "Reload", "button,reloadPage", { "onclick": "reloadPage()" }))
    append(`#footerButtons`, gen(button, "open", "Open", "button,openFile", { "onclick": "openFile()" }))
}

function generateView() {

    if (grab("#appmain").length != 0) {
        append("#appmain", "", "over")
    }
    // append(main, gen(main, "main", "", ",main"), "replace")
    var file = filedetect()


    var file = router.file
    if (file.length == 0) {
        router.setfile = "list.txt"
    }

    var ext = file.split(".").pop()
    const route = {
        "txt": () => { parselist(router.view) },
        "md": () => { parseSlide(router.view) },
        "ipynb": () => { parseNotebook(router.view) },
        "pdf": () => { showPDF(router.view) }
    }
    try {
        route[ext]()

    } catch (e) {

    }





}



async function filedetect() {
    var router = new Router()
    var presentfile = ""
    var files = "slide.ipynb,slide.md".split(",")
    files.forEach(file => {
        var testpath = router.root + router.dir.substring(1,) + file
        fetch(testpath).then(res => {
            if (res.status == 200) {
                router.setfile = file
            }
        })

    })
    return presentfile
}




function updateOnHashChange() {
    window.removeEventListener('hashchange', updateOnHashChange);
    var router = new Router()
    if (router.dir != "/") {
        var oldroot = router.root
        var indexpath = router.root + router.dir.substring(1,) + "index.html"
        var newroot = router.root + router.dir.substring(1,)
        router.dir = "/"
        fetch(indexpath).then(res => {
            if (res.status == 200) {
                window.location.href = newroot
            }
        })
    }


    reloadPage()
}


function reloadPage() {
    sessionStorage.clear()
    localStorage.clear()
    paginationUpdate()
    generateView()
    footerButtons()
    window.scrollTo(0, 0)
    window.addEventListener('hashchange', updateOnHashChange);
    // convertLocalLinks()


}




function changepath(thispath) {
    // log(thispath.dataset.path)
    var path = thispath.dataset.path
    var origin = window.location.origin
    pathname = path.replace(origin, "")
    // log(pathname)
    var router = new Router()
    router.setdir = pathname

    window.location.pathname = "/"
    updateOnHashChange()
}

function paginationUpdate(loc = "") {
    // var router = new Router()
    router.readHash()
    loc = router.pathname + router.dir
    if (grab("#location").length != 0) {
        append("#location", "", "replace")
    }

    // try { append(`#location`, "", "replace") } catch { }
    append(`#header`, gen(nav, 'location', ""))
    var root = router.protocol + router.host
    var path = "/"

    var printLocation = loc.replaceAll('https://', "").replaceAll('http://', "")
    printLocation.split("/").forEach(l => {
        if (l.length > 0) {
            // log(l)
            path += l + "/"
            // append("#location", gen(a, '', l, 'pathNavigator', root + path, { "onclick": "updateOnHashChange()" }))
            append("#location", gen(a, '', l, 'pathNavigator', { 'data-path': root + path, "onclick": "changepath(this)" }))
            // append("#location", gen(span, '', "  ", 'spacer'))

        }

    })
    // generateView()
}

loadBasicSkeleton()




function appendDir(e) {
    var newDir = router.dir + e.dataset.dir
    newDir = newDir.replaceAll("//", "/").replaceAll("\\\\", "\\")
    router.setdirpath(newDir, "")
}
function appendfile(e) {
    router.setdirpath(router.dir, e.dataset.file)

}

function parselist(fileListUrl = window.location.origin + window.location.pathname + "list.txt", target = "#main") {


    var filelist = ""
    getfile(fileListUrl, filelist => {
        append(target, "", "over")
        append(target, gen(div, 'appmain', gen(h1, '', "File Browser", "heading"), "appmain"), "over")

        append(appmain, gen(div, 'directoryGrid', "", "dirGrid"))

        var currentLocation = router.dirpath

        filelist.split("\n").sort().forEach((link, i) => {
            var url = currentLocation + link.replaceAll('./', '')
            link = link.replaceAll("\t", "").replaceAll("\n", "")
            //for directories
            if (link[2] != '.' && !link.includes(".md") && !link.includes(".ipynb")) {
                var linkname = link.replaceAll("./", "").replaceAll("/", " / ").replaceAll("-", " ").replaceAll("_", " ")
                if (link.length > 0 && link != './') {
                    var redirect = currentLocation + link.replaceAll('./', '') + "/"
                    var dir = link.replaceAll('./', '')
                    append(`#directoryGrid`, gen(a, "", linkname, 'folderLinks', { 'data-dir': dir, "onclick": `appendDir(this)` }))
                }
            }

            //for markdown files
            if (link[2] != '.' && link.includes(".md")) {
                var linkname = link.replaceAll("./", "").replaceAll("/", " / ").replaceAll("-", " ").replaceAll(".md", "").replaceAll("_", " ")
                if (link.length > 0 && link != './') {
                    var file = link.replaceAll('./', '')
                    append(directoryGrid, gen(a, `${url}`, linkname, 'slideLinks', { 'data-file': file, "onclick": `appendfile(this)` }))
                }
            }

            //for notebook files
            if (link[2] != '.' && link.includes(".ipynb")) {
                var linkname = link.replaceAll("./", "").replaceAll("/", " / ").replaceAll("-", " ").replaceAll(".ipynb", "").replaceAll("_", " ")
                var file = link.replaceAll('./', '')
                if (link.length > 0 && link != './') {
                    append(directoryGrid, gen(a, `${url}`, linkname, 'slideLinks,notebookLinks', { 'data-file': file, "onclick": `appendfile(this)` }))

                }
            }
            //for pdf files
            if (link[2] != '.' && link.includes(".pdf]")) {
                var linkname = link.replaceAll("./", "").replaceAll("/", " / ").replaceAll("-", " ").replaceAll(".ipynb", "").replaceAll("_", " ")
                if (link.length > 0 && link != './') {
                    append(directoryGrid, gen(object, `${url}`, linkname, 'slideLinks,notebookLinks', { "onclick": `parseNotebook(\`${url}\`)` }))
                }
            }
        });




    })
}



function mathjaxHljsCopyIcon() {
    load("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css")
    load("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js")


    setTimeout(() => {

        MathJax.startup.document.state(0);
        MathJax.texReset();
        MathJax.typesetClear()
        MathJax.typeset("slideroot")
        MathJax.typeset()
        grab("code").forEach(c => {
            c.innerHTML = c.innerHTML.replaceAll("<br>", "\n")
        })
        hljs.highlightAll()
        // setTimeout(GeneratorWebHelper().addCopyIcon(), 1000)
    }
        , 1000)
}

function parseSlide(link) {

    getfile(link, md => {
        if (grab("#back").length != 0) { append("#back", "", "replace") }

        append(`#location`, gen(a, "back", "Back", "pathNavigator", { 'data-file': "", "onclick": "appendfile(this)", "tabindex": 0 }))

        append(`main`, "", "over")
        append(`main`, gen(div, "slideroot", "", 'slideroot'))
        append(slideroot, gen("aside", "sideBar", ""))
        append(sideBar, gen(div, "slidenav", gen(h3, "", "Navigator")))
        append(slidenav, gen(ul, "slidenavlist", "", "slidenavlist"))

        var html = md.split(/^---\s*?$/gm)

        for (var i = 0; i < html.length; i++) {
            var h = html[i]
            if (h.length > 0) {
                parsemd(h, H => {
                    append(slideroot, gen(section, `slide${i}`, H, "slide"))
                    if (i != 0 && i != html.length - 1) {
                        append(grab(".slide")[i], gen(span, "", `${i + 1}/${html.length}`, "slideCount"))
                        append(slidenavlist, gen(li, "", gen(a, "", `Slide ${i + 1}`, "slideNavLink", { "onclick": `slide${i}.scrollIntoView()` })))
                    }

                })
            }
        }
        append(slidenavlist, gen(li, "", gen(a, "src", `Source`, "slideNavLink", { "onclick": `viewSourceFile('${link}')`, "href": link, "target": "_blank" })))

    })
    loadscss(slideScss)
    convertLocalLinks()
    mathjaxHljsCopyIcon()
}



function parseNotebook(link) {

    getfile(link, nb => {

        if (grab("#back").length != 0) { append("#back", "", "replace") }
        append(`#location`, gen(a, "back", "Back", "pathNavigator", { 'data-file': "", "onclick": "appendfile(this)", "tabindex": 0 }))
        if (grab("#appmain").length != 0) { append("#appmain", "", "replace") }

        // append(appmain, gen(div, "appmain", ""), "replace")
        // append(appmain, "", "replace")
        if (grab("#main").length != 0) { append("#main", gen(main, "main", "", "main"), "replace") }

        append(main, gen(div, "blockroot", "", 'blockroot'))
        append(blockroot, gen("aside", "sideBar", ""))
        append(sideBar, gen(div, "slidenav", gen(h3, "", "Navigator")))
        append(slidenav, gen(ul, "slidenavlist", "", "slidenavlist"))

        var PrintFileName = link.split("/").pop().replaceAll(".ipynb", "")
        var nbmd = ``

        append(blockroot, gen(h1, "Title", `Python Notebook: ${PrintFileName}`, "title"))
        nb = JSON.parse(nb)

        nb.cells.forEach(cell => {

            if (cell.source.length > 0) {
                var cell_type = cell.cell_type

                var ecount = cell.execution_count

                if (cell_type == "markdown") {

                    var src = cell.source
                    var md = src.join("\n")
                    append(blockroot, gen(div, `Markdown${ecount}`, parsemd(md), "markdown block"))

                }
                if (cell_type == "code") {
                    var count = cell.execution_count

                    var src = cell.source
                    var inputCode = src.join("")   //.replaceAll("<br>", "\r\n")
                    append(blockroot, gen(div, `input${count}`, "", "input block"))
                    append(`#input${count}`, gen(span, "", `In [${count}] :`, "execution_count"))
                    append(`#input${count}`, gen(pre, "", gen(code, "", inputCode, "python language-python code")))


                    var outputs = cell.outputs
                    var status = "success"
                    if (outputs.length > 0) {
                        var status = (outputs[0].output_type == "execute_result") ? "success" : "fail"
                        append(blockroot, gen(div, `output${count}`, gen(span, "", `Out [${count}] :`, "execution_count"), `output block execution_count,${status}`))
                        outputs.forEach(output => {
                            // for (var j = 0; outputs.length; j++) {
                            // var output = outputs[j]

                            var output_type = output.output_type
                            if (output_type == "stream") {
                                var text = output.text.join("")
                                // append(`#output${count}`, gen(pre, "", text, `output ${output_type}`))
                                append(`#output${count}`, gen("samp", "", text, `samp ${output_type}`))
                            }



                            if (output_type == "display_data") {

                                var data = output.data
                                if (data.hasOwnProperty("text/plain")) {
                                    var text = data["text/plain"]
                                    append(`#output${count}`, gen(p, "", gen(code, "", text, `output ${output_type}`), `output ${output_type}`))
                                    // append(`#output${count}`, gen(p, "", gen(code, "", text, `output ${output_type}`)))

                                }

                                if (data.hasOwnProperty("image/png")) {
                                    var className = '';

                                    var image = data["image/png"]
                                    var src = `data:image/png;base64,${image}`
                                    if (output.metadata.hasOwnProperty("needs_background")) {
                                        className = `needs-background-${output.metadata["needs_background"]}`
                                    }
                                    append(`#output${count}`, gen(img, "", "", `output ${output_type} ${className}`, { "src": src }))
                                }

                            }

                            if (output_type == "execute_result" || output_type == "display_data") {
                                var data = output.data
                                if (data.hasOwnProperty("text/plain")) {
                                    var text = data["text/plain"].join("")
                                    // append(`#output${count}`, gen(pre, "", gen(code, "", text, `output ${output_type}`)))
                                    append(`#output${count}`,
                                        // gen(pre,
                                        //     "",
                                        //     gen(code,
                                        //         "",
                                        //         text,
                                        //         `output ${output_type}`
                                        //     )
                                        // )

                                        gen("samp",
                                            "",
                                            text,
                                            `samp ${output_type}`
                                        )
                                    )
                                }
                            }
                        })
                    }
                }
            }

        }


        )


        var noOfBlocks = grab(".block").length
        for (var i = 0; i < noOfBlocks; i++) {
            append(grab(".block")[i], gen(span, "", `${i + 1}/${noOfBlocks}`, "slideCount hide"))
            // append(slidenavlist, gen(li, "", gen(a, "", `Block ${i + 1}`, "slideNavLink", { "onclick": `block${i}.scrollIntoView()` })))
            append(slidenavlist, gen(li, "", gen(a, "", `Block ${i + 1}`, "slideNavLink", { "onclick": `grab(".block")[${i}].scrollIntoView()` })))
        }
        // download source file
        var downloadFileName = `${link.split('/')[link.split('/').length - 2]}_${link.split('/')[link.split('/').length - 1]}`
        append(slidenavlist, gen(li, "", gen(a, "src", `Source`, "slideNavLink", { "onclick": `viewSourceFile('${link}')`, "href": link, "target": "_blank", "download": downloadFileName })))
        append(blockroot, gen(span, "", gen(a, "src", `Download Source`, "button", { "onclick": `viewSourceFile('${link}')`, "href": link, "target": "_blank", "download": downloadFileName })))


    })
    loadscss(slideScss)
    mathjaxHljsCopyIcon()
    convertLocalLinks()
}




$$.init()
if (window.location.href.includes("Gallery")) {
    // log("gallery")
    setTimeout(() => {
        load("/gallery.js")
    }, 1000)
}



reloadPage()
