window.$ = GeneratorJs()
window.$$ = GeneratorWebHelper()
$.init()

//STYLE
getfile("/style.scss",(siteStyleSCSS)=>{loadscss(siteStyleSCSS)})
//your app logic
append(app, "", "over") /* reset app */
append(app, gen(header, "header", "", 'header'));
append(header, gen(h3, 'heading','Lecture Server'))
var loc = window.location.href

var printLocation = loc.replaceAll('https://', "").replaceAll('http://', "")
append(header, gen(div, 'location', printLocation))


append("#location", "", 'over')
var path = window.location.protocol + "//"
printLocation.split("/").forEach(l => {
    if (l.length > 0) {
        path = path +"/"+ l
        append("#location", gen(a, '', l, 'pathNavigator', path + "/"))
        append("#location", gen(span, '', "  ", 'spacer'))

    }

})
append(app, gen(main, "appmain", gen(h1,'FileBrowser',"Topics"), 'appmain container'));
append(app, gen(footer, "appfooter", "", 'footer'));
append(appmain, gen(section, "hero", "", "hero"))
// load(["./header.js", "./script.js", "./footer.js","./style.css"])// load js and css files
// append(hero, [gen(h1, "", "Hello GeneratorJs"), gen(p, "", "Yes, just Three functions for frontend."), gen(span, "", ["gen", "append", "load"]), gen(p, "", "And Three Optional functions."), gen(span, "", ["log", "getfile", "loadscss"])])        
getfile(window.location.href + "list.txt",filelist=>{filelist.split("\n").forEach(link => {
            var linkname = link.replaceAll("./", "").replaceAll("/", " / ")
            append(main, gen(a, "", linkname, 'folderLinks', link))
        });



        append(main,gen(button,"reload","Reload","reloadPage",{"onclick":"reloadPage()"}))
})


        
function reloadPage(){
var url =window.location.href                
console.log(url)
window.location.href=url
}



$$.init()