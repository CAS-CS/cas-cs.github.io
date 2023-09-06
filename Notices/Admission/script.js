var metadict={ 
    title:"M.Tech Admission 2023-24",
     image:"https://cas-cs.github.io//Notices/Admission/AdmissionBanner.png",
    description:"On-Canpus counselling to be held on 04 September 2023 at 10:00 AM. Candidates who have registered and paid the counselling fee till 10AM, 04 September 2023 can participate in this round of counselling on 04 September 2023",
    url:"https://cas-cs.github.io/Admission/"
  }


var data={
    "title":"M.Tech Admission 2022-23",
    "text":"On-Canpus counselling to be held on 22th Aug 2023 at 10:00 AM for GATE and CUET qualified candidates\
    and 23th Aug 2023 at 10:00 AM for Non-GATE and Non-CUET candidates.",
    "url":"https://cas-cs.github.io/Notices/Admission/AdmissionBanner.png"
    
}    

var ShareUrl=[
    "https://www.facebook.com/sharer/sharer.php?"+
    "u="+data.url+
    "&title="+data.title+
    "&description="+data.text+
    "&quote="+data.text,
    "https://api.whatsapp.com/send?text=*"+
    data.title+"*  "+data.text+"%0A"+data.url,
    "https://twitter.com/intent/tweet?url="+
    data.url+
    "&text="+data.title+"   "+data.text,
    "https://www.linkedin.com/shareArticle?mini=true&url="+
    data.url+
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
