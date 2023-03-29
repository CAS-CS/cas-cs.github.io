window.$ = GeneratorJs()
window.$$ = GeneratorWebHelper()
$.init()

//STYLE

var slideScss = `
@import url('https://fonts.googleapis.com/css2?family=Cantarell&display=swap');
:root{
    --hue:278;
    --light:10%;
    --sat:55%;
    --hueAscent:234;
    --fontFamily:"Cantarell";
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
.slideroot{
    position:sticky;
    top:0;
    scroll-snap-type: y mandatory;
    height:100vh;
    overflow:scroll;
    // padding:2em;
    background-color:hsla(0,0%,100%,.1);




}


.slide{
    position:relative;
    --padding:clamp(40px,15vw,300px);
    width:calc(100%);
    // min-height:100vh;
    padding-block:clamp(40px,10vh,100px);;
    padding-inline:var(--padding);
    box-sizing:border-box;
    font-size:clamp(calc(.8rem * var(--fontScale,1)),3vw,calc(2rem * var(--fontScale,1)));
    // background-color:hsla(0,0%,100%,.1);
    height:calc(100vh - 2em);
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
        margin-left:1em;
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
        max-height:80vh;
        aspect-ratio:prefer-content;
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
    padding:10px;
    margin-inline:auto;
    z-index:100;
    left:0;
    width:clamp(150px,5vw,10vw);
    // overflow:hidden;
    transition:opacity .1s ease-in-out;
    background-color:hsla(var(--hue),70%,5%,1);
    opacity:0;
    border-right:1px solid hsla(var(--hueAscent),50%,10%,1);
    box-shadow:1em 0 .5em hsla(0,0%,0%,.2);
    &:hover{
        opacity:1;
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



        li{
        margin-block:1em;
        background-color:hsl(var(--hue),50%,95%);
        width: 100%;
        margin-inline: auto;
        display: flex;
        justify-content: center;
        border-radius: 5px;
        padding: 5px;
        font-weight: bold;
        box-shadow: .1em .1em 5px hsla(0,0%,0%,.2);

        color:var(--accentColor,hsl(var(--hueAscent),80%,20%));
        .sideNavLink{
            display: inline-block;
            width: 100%;
            text-decoration:none;
            margin-inline:auto;
            font-weight: bold;
            

        }

        &:nth-last-child(1){
            margin-bottom: 40vh;
        }

        &:nth-first-child(1){
            margin-top: 2em;
        }

        &:hover,.active{
            inset:2px;
            outline:2px solid aqua;
        }


      }

  }


`



load('/style.scss')
//your app logic
append(app, "", "over") /* reset app */
append(app, gen(header, "header", "", 'header'));
append(header, gen(h3, 'heading', 'Lecture Server', 'title'))
var loc = window.location.href

var printLocation = loc.replaceAll('https://', "").replaceAll('http://', "")
append(header, gen(div, 'location', printLocation))


append("#location", "", 'over')
var path = window.location.protocol + "//"
printLocation.split("/").forEach(l => {
    if (l.length > 0) {
        path = path + "/" + l
        append("#location", gen(a, '', l, 'pathNavigator', path + "/"))
        append("#location", gen(span, '', "  ", 'spacer'))

    }

})
append(app, gen(main, "appmain", gen(h1, 'FileBrowser', "Directory List"), 'appmain container'));
append(app, gen(footer, "appfooter", "", 'footer'));
append(appmain, gen(section, "hero", "", "hero"))
// load(["./header.js", "./script.js", "./footer.js","./style.css"])// load js and css files
// append(hero, [gen(h1, "", "Hello GeneratorJs"), gen(p, "", "Yes, just Three functions for frontend."), gen(span, "", ["gen", "append", "load"]), gen(p, "", "And Three Optional functions."), gen(span, "", ["log", "getfile", "loadscss"])])

append(main, gen(div, 'directoryGrid', "", "dirGrid"))

var currentLocation = window.location.href
// fileListUrl=currentLocation+"/"+'list.txt'
fileListUrl = currentLocation + 'list.txt'
// log(fileListUrl)
var notebook = currentLocation + '/slide.ipynb'
var slideUrl = currentLocation + '/slide.md'

try {
    loadButtonToFiles(fileListUrl)
} catch (error) {
    try {
        parseNotebook(notebook)
    } catch (error) {
        parseSlide(slideUrl)
    }
}


function loadButtonToFiles(fileListUrl) {

    getfile(fileListUrl, filelist => {

        filelist.split("\n").sort().forEach(link => {
            var url = currentLocation + link.replaceAll('./', '')
            link = link.replaceAll("\t", "")

            if (link[2] != '.' && !link.includes(".md")) {
                var linkname = link.replaceAll("./", "").replaceAll("/", " / ").replaceAll("-", " ")
                if (link.length > 0 && link != './') {
                    var redirect = currentLocation + link.replaceAll('./', '') + "/"
                    // redirect = redirect.replaceAll(" ", "")
                    // log(redirect)
                    // append(directoryGrid, gen(a, "", linkname, 'folderLinks', link))
                    append(directoryGrid, gen(a, "", linkname, 'folderLinks', redirect))
                }
            }

            //for markdown files
            if (link[2] != '.' && link.includes(".md")) {
                var linkname = link.replaceAll("./", "").replaceAll("/", " / ").replaceAll("-", " ").replaceAll(".md", "")
                if (link.length > 0 && link != './') {
                    var redirect = currentLocation + link.replaceAll('./', '') + "/"
                    // redirect = redirect.replaceAll(" ", "")
                    // log(redirect)
                    // append(directoryGrid, gen(a, "", linkname, 'folderLinks', link))
                    append(directoryGrid, gen(a, url, linkname, 'slideLinks', { "onclick": `parseSlide(\`${url}\`)` }))
                }
            }
        });



        append(main, gen(button, "reload", "Reload", "button,reloadPage", { "onclick": "reloadPage()" }))
        append(main, gen(button, "open", "Open", "button,openFile", { "onclick": "openFile()" }))
    })
}

const openFile = () => {
    // var file = window.FileReader || window.webkitFileReader;

}


function parseSlide(link) {
    // log(link)
    getfile(link, md => {
        append(header, gen(a, "Back", "Back", "pathNavigator", { "onclick": "reloadPage()", "tabindex": 0 }))

        append(appmain, gen(div, "slideroot", "", 'slideroot'), "replace")
        append(slideroot, gen("aside", "sideBar", ""))
        append(sideBar, gen(div, "slidenav", gen(h3, "", "Navigator")))
        append(slidenav, gen(ul, "slidenavlist", "", "slidenavlist"))

        var html = md.split("---")

        for (var i = 0; i < html.length; i++) {
            var h = html[i]
            if (h.length > 0) {
                parsemd(h, H => {
                    append(slideroot, gen(section, `slide${i}`, H, "slide"))
                    if (i != 0 && i != html.length - 1) {
                        append(get(".slide")[i], gen(span, "", `${i + 1}/${html.length}`, "slideCount"))
                        append(slidenavlist, gen(li, "", gen(a, "", `Slide ${i + 1}`, "slideNavLink", { "onclick": `slide${i}.scrollIntoView()` })))
                    }
                })
            }
        }
        MathJax.typesetClear()
        MathJax.typeset("slideroot")
        MathJax.typeset()
        GeneratorWebHelper().addCopyIcon()

    })
    loadscss(slideScss)
}


function parseNotebook(link) {
    // log(link)
    getfile(link, md => {
        append(header, gen(a, "Back", "Back", "pathNavigator", { "onclick": "reloadPage()", "tabindex": 0 }))

        append(appmain, gen(div, "slideroot", "", 'slideroot'), "replace")
        append(slideroot, gen("aside", "sideBar", ""))
        append(sideBar, gen(div, "slidenav", gen(h3, "", "Navigator")))
        append(slidenav, gen(ul, "slidenavlist", "", "slidenavlist"))

        var html = md.split("---")

        for (var i = 0; i < html.length; i++) {
            var h = html[i]
            if (h.length > 0) {
                parsemd(h, H => {
                    append(slideroot, gen(section, `slide${i}`, H, "slide"))
                    if (i != 0 && i != html.length - 1) {
                        append(get(".slide")[i], gen(span, "", `${i + 1}/${html.length}`, "slideCount"))
                        append(slidenavlist, gen(li, "", gen(a, "", `Slide ${i + 1}`, "slideNavLink", { "onclick": `slide${i}.scrollIntoView()` })))
                    }
                })
            }
        }
        MathJax.typesetClear()
        MathJax.typeset("slideroot")
        MathJax.typeset()
        GeneratorWebHelper().addCopyButton()

    })
    loadscss(slideScss)
}

function reloadPage() {
    sessionStorage.clear()
    localStorage.clear()
    var url = window.location.href
    console.log(url)
    window.location.href = url
}



$$.init()
if (window.location.href.includes("Gallery")) {
    // log("gallery")
    setTimeout(() => {
        load("/gallery.js")
    }, 1000)
}


load("./script.js")
