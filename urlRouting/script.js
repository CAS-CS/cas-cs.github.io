var url = {
    host: window.location.host,
    href: window.location.href,
    hash: window.location.hash,
    pathname: window.location.pathname
}



class hash {
    constructor() {
        this.hash = window.location.hash
        this.entries = Object.entries(this.hash.split("&"))
    }
    get() {
        return this.hash
    }
}


var H = new hash()
window.addEventListener("hashchange", function (e) {
    alert("hashchange")
    H.get()
})


var routerSCSS = `
.router-ul{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(6em, 1fr));
    grid-gap:1em;
    // padding:2em;
    // background-color:white;
   .router-li{
        
        background-color:white;
 
    }
}

`
loadscss(routerSCSS, "routerSCSS")

var URL = new URL(window.location.href)
var USP = URL.searchParams
var PATH = window.location.pathname
// log(URL)
// log(USP)

function handleClick(e) {
    var path = e.dataset.path
    USP.set("path", path)
    log(path)
    // log(USP)
    // log(URL)

    window.history.pushState({}, "", URL)
}








// log("URL Routing")

// var host = location.host
// var href = location.href
// // log(host)
// // log(href)

// var url = new URL(href)

// url.searchParams.set("name", "John")
// url.searchParams.set("surname", "Smith")
// url.searchParams.set("view", "list.txt")
// .pushState({}, "", url)   
// log(window.history.state)


setTimeout(() => {
    append(main, "", "over")

    append("main", gen(div, "router", gen(ul, "router-ul", "", "router-ul"), "over"))
    links = "home,about,contact,login,register".split(",").forEach(li => {
        append("#router-ul", gen(li, "", gen(span, "", li, "router-link", { "onclick": `handleClick(this)`, "data-path": `${li}` }), "router-li"))
    })
}, 1000);