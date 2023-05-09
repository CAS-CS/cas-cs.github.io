var galleryData = []
append("#main", gen(div, 'gallery', gen(h1, "", "Gallery"), 'section,gallery'), "over")


var currentLocation = window.location.origin + window.location.pathname
var subGalleryUrllist = currentLocation + 'listDir.txt'
// log(subGalleryUrllist)
getfile(subGalleryUrllist, f => {
    folders = f.split("\n").sort()
    folders.forEach(folder => {
        // log(folder)
        // if (folder.length > 2) {
        folder = folder.replaceAll("\t", "")
        var foldername = folder.replaceAll("./", "").replaceAll("/", " / ").replaceAll("-", " ")
        var folderID = folder.replaceAll("./", "").replaceAll("/", " / ")
        var folderUrl = currentLocation + folder.replaceAll('./', '') + "/"

        append(gallery,
            gen(
                h1,
                "",
                foldername, 'heading'
            ), 'over')
        if (folder.length > 0 && folder != './' && folder != '\n') {

            var sectionName = folderID.replaceAll("./", "")


            append(gallery,
                gen(section,
                    sectionName,
                    "",
                    "sub-gallery"
                )
            )
            var FileListURL = folderUrl + 'listFiles.txt'
            // log(FileListURL)
            getfile(FileListURL, f => {

                var fileNames = f.split("\n").sort()

                galleryData.push({ section: sectionName, fileNames: fileNames, folderUrl, folderUrl })
                for (var i = 0; i < fileNames.length; i++) {
                    var fileName = fileNames[i]
                    // log(fileName)
                    if (fileName.length > 3) {
                        fileName = fileName.replaceAll("./", "")
                        filenameUrl = folderUrl + fileName

                        append(`#${sectionName}`,

                            gen(a, '',
                                gen(img, "img" + i, fileName, "gallery-img",
                                    {
                                        "src": filenameUrl,
                                        "loading": "lazy",
                                        "title": fileName,
                                        "onclick": `openImage(${i})`
                                    }
                                )
                                // , "imagelink", { "href": filenameUrl, "target": "_blank", "download": "" }
                            )
                        )
                    }
                }


            })



        }
        // }

    })
})


function openImage(i) {
    var fileNames = galleryData[0].fileNames
    if (i < 0) { i = fileNames.length - 1 }
    if (i >= fileNames.length) { i = 0 }
    var folderUrl = galleryData[0].folderUrl
    var downloadurl = folderUrl + fileNames[i].replaceAll("./", "")
    try { append(imageDialog, "", 'replace') }
    catch { }
    append(main, gen("dialog", 'imageDialog', gen(img, '', '', "modal-image", { "src": downloadurl, "data-seq": i }), 'imageDialog'
        // , { "onclick": "closeModal()" }
    ), "before")
    get(imageDialog).classList.add("active")
    append(imageDialog, gen(div, 'modalButtonGroup', '', 'modalButtonGroup'))
    append(modalButtonGroup, gen(a, 'left', '<<', 'modalButton', { "onclick": "left()" }))
    append(modalButtonGroup, gen(a, 'download', 'Download', 'modalButton', { "href": downloadurl, "download": "", target: "_blank" }))
    append(modalButtonGroup, gen(a, 'closeDialog', 'close', 'modalButton', { "onclick": "closeModal()" }))
    append(modalButtonGroup, gen(a, 'right', '>>', 'modalButton', { "onclick": "right()" }))

    // window.addEventListener("keypress", (e) => { e.preventDefault(); log(e.key); e.key == "Escape" ? closeModal() : "" })
    window.addEventListener("keydown", checkKey
    )
}

function checkKey(e) {
    e.preventDefault();
    // log(e.key)
    if (e.key === "Escape") {
        closeModal();
    }
    else if (e.key === "ArrowLeft") {
        left()
    }
    else if (e.key === "ArrowRight") {
        right()
    }
    else if (e.key === "ArrowDown") {
        download()
    }
}
const closeModal = () => {
    append(imageDialog, "", 'replace')
    window.removeEventListener("keydown", checkKey)
}

const download = () => {
    get(imageDialog).children[1].children[1].click()

}

const left = () => {
    var current = parseInt(get(imageDialog).children[0].getAttribute("data-seq"))
    var next = current - 1
    openImage(next)
}
const right = () => {
    var current = parseInt(get(imageDialog).children[0].getAttribute("data-seq"))
    var next = current + 1
    openImage(next)
}

var imagestyle = `
// img{
//     max-width: 100%;
//     height: auto;
//     vertical-align: start;
//     display:inline-block;
// }

.sub-gallery{
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
    justify-content: center;
    align-items: center;
    padding: 10em 5em;
    margin: 0 auto;



}

.imagelink{    
    display:flex
    flex-direction: column;
    justify-content: start;
    align-items: center;
    overflow: hidden;
    &:hover,&:active,&:focus{
        overflow: visible;
    }

}


.gallery-img{
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 5px;

    &:hover,&:active,&:focus{
        filter: grayscale(0%) brightness(1.2);

       border:5px solid rgba(255,255,255,.5);
    }

     &:nth-of-type(1){
        overflow: visible;
     }
}



.appmain{
    padding-bottom: 20vh;
    margin-bottom: 20vh;

}

.imageDialog{
    position: fixed;
    top: 0vh;
    left: 0;
    margin: auto;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.8);
    backdrop-filter: blur(5px);
    border-radius: 2em;
    display: flex;
justify-content: center;
align-items: center;

transition:all .5sec ease-in-out;


    .imageDialog + active{
        top: 0vh;
        opacity:1
    }

    .modal-image{
        max-width:80%;
        max-height:80%;
        aspect-ratio: keep;
        margin-inline: auto;
        object-fit: cover;
    }
    
    .modalButtonGroup{
        position: absolute;
        bottom: 10%;
        margin-inline: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        justify-items: center;
        align-items: center;
        width: 100%;
        height: 4em;
        .modalButton{
            text-decoration:none;
            font-weight:500;
            text-align: center;
            text-transform: uppercase;
            min-width: 8em;
            padding: 5px;
            background-color: rgba(255,255,255,.9);
            color: var(--ascentColor);
            user-select:none;
            opacity: .2;
            &:hover{
                opacity: .8;
                background-color: rgba(255,255,255,.8);
            }
        }

    }
}
.gallery{
    h1{
        padding:2em;
    }
}

`

cssvar("--hue", "200")
cssvar("--sat", "60%")
loadscss(imagestyle)

// append(heading, 'Gallery', "over")
// append("title", 'Gallery', "over")

setTimeout(() => {
    var tempscss = `
    h1{
        font-size: 3rem;
        display:block;
        color:var(--ascentColor);
    }

    `
    loadscss(tempscss)
    cssvar("--hue", "200")

}, 1000);