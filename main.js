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



    append(main, gen(button, "reload", "Reload", "reloadPage", { "onclick": "reloadPage()" }))
})


function parseSlide(link) {
    // log(link)
    getfile(link, md => {
        append(header, gen(a, "Back", "Back", "pathNavigator", { "onclick": "reloadPage()", "tabindex": 0 }))

        append(appmain, gen(div, "slideroot", "", 'slideroot'), "replace")
        append(slideroot, gen(aside, "slidenav", gen(h3, "", "Navigator"), 'slidenav'))
        append(slidenav, gen(ul, "slidenavlist", "", "slidenavlist"))

        var html = md.split("---")

        for (var i = 0; i < html.length; i++) {
            var h = html[i]
            if (h.length > 0) {
                parsemd(h, H => {
                    append(slideroot, gen(section, `slide${i}`, H, "slide"))
                    if (i != 0 && i != html.length - 1) {
                        append(get(".slide")[i], gen(span, "", `${i + 1}/${html.length}`, "slideCount"))
                        append(slidenavlist, gen(li, "", gen(a, "", `Slide ${i + 1}`, "slideNavLink", `#slide${i}`, { "onclick": `scrollToSlide(${i})` })))
                    }
                })
            }
        }

    })
    loadscss(`
    @import url('https://fonts.googleapis.com/css2?family=Cantarell@1&display=swap');
    :root{
        --hue:278;
        --light:10%;
        --sat:55%;
        --hueAscent:234;
        --fontFamily:"Cantarell";
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
        padding:2em;
        background-color:hsla(0,0%,100%,.1);



        .slidenav{
            padding:10px;
            margin-inline:auto;
            z-index:1;
            position:fixed;
            left:0;
            top:0;
            min-width:10vw;
            min-height:100vh;
            
            overflow:auto;
            transition:opacity .1s ease-in-out;
            opacity:0;
            &:hover{   
                background-color:hsla(0,0%,100%,.3);
                display:block;
            opacity:1;}

            ul{
                overflow-y:auto;
            }
            .slidenavlist{
                
                padding:10px;
                list-style:none;
                display:flex;
                flex-direction:column;
                overflow-y:auto;
                .slideNavLink{
                    display:inline-block;
                    padding:10px;
                    margin-block:10px;
                    background:white;
                    color:black;
                    text-decoration:none;
                    width:100%;
                    box-shadow:0 0 10px 0 hsla(0,0%,0%,.2);
                }
            }
        }
    }
    .slide{
        position:relative;
        --padding:clamp(40px,15vw,300px);
        width:calc(100%);
        // min-height:100vh;
        padding-block:clamp(40px,10vh,100px);;
        padding-inline:var(--padding);
        box-sizing:border-box;
        font-size:calc(2rem * var(--fontScale,1));
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
                padding-top:0px;
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
            padding:clamp(10px,5vw,20px);
        }
        li{
            padding-block:.2em;
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
