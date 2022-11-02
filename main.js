window.$ = GeneratorJs()
window.$$ = GeneratorWebHelper()
$.init()

//STYLE
getfile("/style.scss", (siteStyleSCSS) => { loadscss(siteStyleSCSS) })
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

var currentLocation=window.location.href
// fileListUrl=currentLocation+"/"+'list.txt'
fileListUrl=currentLocation+'list.txt'
// log(fileListUrl)
getfile( fileListUrl, filelist => {
    
    filelist.split("\n").sort().forEach(link => {
        link=link.replaceAll("\t","").replaceAll(" ","")

        if (link[2] != '.') {
            var linkname = link.replaceAll("./", "").replaceAll("/", " / ")
            if (link.length > 0 && link != './') {
                var redirect=currentLocation+link.replaceAll('./','')+"/"
                redirect=redirect.replaceAll(" ","")
                // log(redirect)
                // append(directoryGrid, gen(a, "", linkname, 'folderLinks', link))
                append(directoryGrid, gen(a, "", linkname, 'folderLinks', redirect))
            }
        }
    });



    append(main, gen(button, "reload", "Reload", "reloadPage", { "onclick": "reloadPage()" }))
})



function reloadPage() {
    sessionStorage.clear()
    localStorage.clear()
    var url = window.location.href
    console.log(url)
    window.location.href = url
}



$$.init()