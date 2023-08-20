
var data={
    "title":"M.Tech Admission 2022-23",
    "text":"On-Canpus counselling to be held on 22th Aug 2023 at 10:00 AM for GATE and CUET qualified candidates\
    and 23th Aug 2023 at 10:00 AM for Non-GATE and Non-CUET candidates.",
    // "image":window.location.host+"/Notices/Admission/AdmissionBanner.png",
    "image":"https://cas-cs.github.io//Notices/Admission/AdmissionBanner.png",
    "url":window.location.host+"/Admission/"
    
}    

var ShareUrl=[
    "https://www.facebook.com/sharer/sharer.php?"+
    "u="+data.image+
    "&title="+data.title+
    "&description="+data.text+
    "&quote="+data.text,
    "https://api.whatsapp.com/send?text=*"+
    data.title+"*  "+data.text+"%0A"+data.image,
    "https://twitter.com/intent/tweet?url="+
    data.image+
    "&text="+data.title+"   "+data.text,
    "https://www.linkedin.com/shareArticle?mini=true&url="+
    data.image+
    "&summary="+data.text+
    "&title="+data.title
]
async function sharefn(){

    if (navigator.canShare && navigator.canShare(data)) {         

        try {   
            await navigator.share(data)
        }   
        catch(err) {

        }
    }

    else{
        ShareUrl.forEach(url=>{
        window.open(url,"_blank")
        })
    }
  
}

grab("#share")[0].addEventListener("click",sharefn)

append("head",gen(meta,"","",""    ,{
        "og:property":data.title
     }
    )
    )

append("head",gen(meta,"","","",
{"og:content":data.text}
    )
    )


append("head",gen(meta,"","",""
,{
    "og:image":data.image
}
)
)