
append(main, gen(div, 'gallery', gen(h1, "", "Gallery"), 'section,gallery'), "over")


var currentLocation = window.location.href
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
                foldername
            ), 'over')
        if (folder.length > 0 && folder != './') {
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
                fileNames.forEach(fileName => {
                    if (fileName.length > 3) {
                        fileName = fileName.replaceAll("./", "")
                        filenameUrl = folderUrl + fileName
                        append(`#${sectionName}`,
                            gen(a, '',
                                gen(img, "", fileName, "gallery-img",
                                    {
                                        "src": filenameUrl,
                                        "loading": "lazy",
                                        "title": fileName,
                                        "onclick": "openImage(this)"
                                    }
                                )
                                , "imagelink", { "href": filenameUrl, "target": "_blank", "download": "" })
                        )
                    }
                })
            })



        }
        // }

    })
})



function openImage(arg) {
    var downloadurl = arg.src
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


}

.imagelink{    
    display:flex
    flex-direction: column;
    justify-content: start;
    align-items: center;
    overflow: hidden;
    &:hover{
        overflow: visible;
    }
    
    &:focus{
        overflow: visible;
    }

}


.gallery-img{
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
     &:hover{
         filter: grayscale(0%) brightness(1.2);

        border:5px solid rgba(255,255,255,.5);
     }
     &:focus{
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

`

cssvar("--hue", "200")
cssvar("--sat", "60%")
loadscss(imagestyle)

append(heading, 'Gallery', "over")
append("title", 'Gallery', "over")

setTimeout(() => {
    var tempscss = `
    h1{
        font-size: 4rem;
        display:block;
        color:var(--ascentColor);
    }
    h2{
        font-size: 3rem;
        display:block;
        color:var(--ascentColor);
    }
    `
    loadscss(tempscss)
    cssvar("--hue", "200")

}, 1000);