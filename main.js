window.$ = GeneratorJs()
window.$$ = GeneratorWebHelper()
$.init()

//STYLE

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
getfile(fileListUrl, filelist => {

    filelist.split("\n").sort().forEach(link => {
        var url = currentLocation + "/" + link.replaceAll('./', '')
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
                append(directoryGrid, gen(a, url, linkname, 'slideLinks', { "onclick": `parseSlide("${url}")` }))
            }
        }
    });



    append(main, gen(button, "reload", "Reload", "reloadPage", { "onclick": "reloadPage()" }))
})


function parseSlide(link) {
    // log(link)
    getfile(link, md => {
        append(header, gen(a, "Back", "Back", "pathNavigator", { "onclick": "reloadPage()", "tabindex": 0 }))

        append(appmain, gen(div, "slideroot", "", 'slideroot'), "replace")
        var html = md.split("---")
        html.forEach(h => {
            if (h.length > 0) {
                parsemd(h, H => {
                    append(slideroot, gen(section, "", H, "slide"))

                })
            }
        })
    })
    loadscss(`
    #app{
        position:relative;
    }
    #header{
        
        opacity:0;
        transition:opacity .5s ease-in-out;
        &:hover{
            opacity:1;
        }
    }
    .slideroot{
        position:relative;
        scroll-snap-type: y mandatory;
    }
    .slide{
        --padding:clamp(40px,15vw,300px);
        width:calc(100%);
        min-height:100vh;
        padding-block:clamp(40px,10vh,100px);;
        padding-inline:var(--padding);
        box-sizing:border-box;
        font-size:calc(2rem * var(--fontScale,1));
        background-color:hsla(0,0%,100%,.1);
        scroll-snap-align:start;
        scroll-padding-top:var(--headerHeight,20px);
        scroll-snap-stop: always
        scroll-behavior:smooth;


        h1,h2,h3,h4,h5,h6{
            color:hsl(var(--hueAscent,30),var(--satAscent,70%),var(--lightAscent,50%));)));
            padding-block:20px;
        }
        a{
            color:var(--linkColor,hsl(0,0%,100%));
        }


        &:nth-child(odd){

        background-color:hsla(0,0%,100%,.2);
        }
        ol,ul,p,img{
            padding:clamp(10px,5vw,100px);
        }
        img{
            max-width:80vw;
            max-height:80vh;
            aspect-ratio:prefer-content;
        }

        blockquote{

            font-style:italic;
            text-shadow:2px 2px 0 hsla(0,0%,100%,.2);
        }
        p{
            padding:0px;
            padding-block:1em;
            &:empty{
                display:none;
            }
        }
    }

    `)

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
