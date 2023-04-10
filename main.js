window.DEBUT = 1
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
    // margin-inline:auto;
    overflow:scroll;
    background-color:hsla(0,0%,100%,.1);
    overflow-y:auto;
    
    scroll-snap-type: y mandatory;
    scroll-snap-align:start;
    scroll-padding:var(--headerHeight,60px);
    scroll-snap-stop: always;
    scroll-behavior:smooth;

    .block{
        max-height:100vh;
        margin-inline:auto;
        margin-block:2em;
        word-break:break-word;
        width:100%;
        // border-radius:2px;
        // box-shadow:0 0 5px hsla(0,0%,0%,.2);
        pre{
            margin-block:1em;
            box-shadow:1px 1px 5em hsla(0,0%,0%,1);
        }

        
    }

    .output{
        display:block;
        font-family:"consolas";
        // width:100%;
        // margin-inline:auto;
        background-color:hsla(0,0%,0%,.1);
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
var notebook = currentLocation + 'slide.ipynb'
var slideUrl = currentLocation + 'slide.md'


loadButtonToFiles(fileListUrl)
parseNotebook(notebook)
parseSlide(slideUrl)



function loadButtonToFiles(fileListUrl) {

    getfile(fileListUrl, filelist => {

        filelist.split("\n").sort().forEach((link, i) => {
            var url = currentLocation + link.replaceAll('./', '')
            link = link.replaceAll("\t", "").replaceAll("\n", "")

            if (link[2] != '.' && !link.includes(".md") && !link.includes(".ipynb")) {
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
                    // var redirect = currentLocation + link.replaceAll('./', '') + "/"
                    append(directoryGrid, gen(a, `${url}`, linkname, 'slideLinks', { "onclick": `parseSlide(\`${url}\`)` }))
                }
            }

            //for notebook files
            if (link[2] != '.' && link.includes(".ipynb")) {
                var linkname = link.replaceAll("./", "").replaceAll("/", " / ").replaceAll("-", " ").replaceAll(".ipynb", "")
                if (link.length > 0 && link != './') {
                    // var redirect = currentLocation + link.replaceAll('./', '') + "/"
                    // log(url)
                    append(directoryGrid, gen(a, `${url}`, linkname, 'slideLinks,notebookLinks', { "onclick": `parseNotebook(\`${url}\`)` }))
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

function mathjaxHljsCopyIcon() {
    load("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css")
    load("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js")


    setTimeout(() => {

        MathJax.typesetClear()
        MathJax.typeset("slideroot")
        MathJax.typeset()
        hljs.highlightAll()
        setTimeout(GeneratorWebHelper().addCopyIcon(), 1000)
    }
        , 1000)
}

function parseSlide(link) {
    // log(link)
    getfile(link, md => {
        append(header, gen(a, "Back", "Back", "pathNavigator", { "onclick": "reloadPage()", "tabindex": 0 }))

        append(appmain, gen(div, "slideroot", "", 'slideroot'), "replace")
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
                        append(get(".slide")[i], gen(span, "", `${i + 1}/${html.length}`, "slideCount"))
                        append(slidenavlist, gen(li, "", gen(a, "", `Slide ${i + 1}`, "slideNavLink", { "onclick": `slide${i}.scrollIntoView()` })))
                    }

                })
            }
        }
        append(slidenavlist, gen(li, "", gen(a, "src", `Source`, "slideNavLink", { "onclick": `viewSourceFile('${link}')`, "href": link, "target": "_blank" })))

    })
    loadscss(slideScss)
    mathjaxHljsCopyIcon()
}

function viewSourceFile(link) {
    // log(link)
    // window.location.href = link
}

function parseNotebook(link) {
    getfile(link, nb => {
        var nbmd = ""
        nb = JSON.parse(nb)

        nb.cells.forEach(cell => {

            if (cell.source.length > 0) {
                var type = cell.cell_type
                var src = cell.source


                // log(type)
                if (type == "markdown") {
                    var md = src.join("")
                    nbmd = nbmd + "\n\n" + md + "\n\n---\n"
                    // log(nbmd)
                }
                if (type == "code") {
                    // var code = src.join("\n")
                    var code = src.join("")
                    nbmd = nbmd + "\n```python\n" + code + "\n```\n" + "\n---\n"
                    var op = cell.outputs

                    if (op.length > 0) {
                        var count = op[0].execution_count
                        var status = (op[0].output_type == "execute_result") ? "success" : "fail"

                        op.forEach(o => {
                            var data = o.data
                            if (data.hasOwnProperty("text/plain")) {
                                var text = data["text/plain"]
                                nbmd = nbmd + `\n\n<p class="output"><span class='execution_count,${status}'>Output: ${count}</span><br /> ${text} </p> \n\n`
                            }

                            if (data.hasOwnProperty("image/png")) {
                                var image = data["image/png"]
                                nbmd = nbmd + `\n\n<p class="output"><img src="data:image/png;base64,${image}" /> </p>\n\n`
                            }
                        })
                    }
                }
                // log(nbmd)
            }

        }


        )


        // append(header, gen(a, "Back", "Back", "pathNavigator", { "onclick": "reloadPage()", "tabindex": 0 }))

        append(appmain, gen(div, "blockroot", "", 'blockroot'), "replace")
        append(blockroot, gen("aside", "sideBar", ""))
        append(sideBar, gen(div, "slidenav", gen(h3, "", "Navigator")))
        append(slidenav, gen(ul, "slidenavlist", "", "slidenavlist"))

        var html = nbmd.split("---")

        for (var i = 0; i < html.length; i++) {
            var h = html[i]
            if (h.length > 0) {
                parsemd(h, H => {
                    append(blockroot, gen(section, `block${i}`, H, "block"))
                    if (i != 0 && i != html.length - 1) {
                        append(get(".block")[i], gen(span, "", `${i + 1}/${html.length}`, "slideCount,hide"))
                        append(slidenavlist, gen(li, "", gen(a, "", `Block ${i + 1}`, "slideNavLink", { "onclick": `block${i}.scrollIntoView()` })))
                    }
                })
            }
        }
        append(slidenavlist, gen(li, "", gen(a, "src", `Source`, "slideNavLink", { "onclick": `viewSourceFile('${link}')`, "href": link, "target": "_blank", "download": `${link.split('/')[link.split('/').length - 2]}_${link.split('/')[link.split('/').length - 1]}` })))



    })
    loadscss(slideScss)
    mathjaxHljsCopyIcon()
}

function reloadPage() {
    sessionStorage.clear()
    localStorage.clear()
    var url = window.location.href
    // console.log(url)
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
