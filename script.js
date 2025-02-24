fetch('https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        let block = document.createElement("section")
        document.body.appendChild(block)
        for (let index = 0; index < 8; index++) {


            block.innerHTML = `<section class="section ">
        <div id="header">
            <img src="">
            <h2></h2>
            <span></span>
        </div>
        <div id="continer">
            <span class="material-symbols-outlined">arrow_back</span>
            <div id="imgvid">
                <h3>
                </h3>
                 <img src="" id="miniature">
                <a href="" title="">
            </div>
            <div></div>
            <span class="material-symbols-outlined">arrow_forward</span>
        </div>
        
    </section>`


            var membre = document.querySelector("h2")
            membre.innerHTML = data[index].author
            var desmembre = document.querySelector("span")
            desmembre.innerHTML = "lorem blalalalalalalallalalalala"
            let title = document.querySelector("h3")
            title.innerHTML = data[index].title
            let img = document.querySelector("#miniature")
            let source = data[index].thumbnailUrl
            img.src = `${source}`
            let myAttr = img.getAttribute('src');

            let link = document.querySelector("a")
            let sourcea = link.href = `${sourcea}`
            let myAttrabute = link.getAttribute('src');
            link.innerHTML = "voire vedio"


        }

    })
    .catch(error => {
        console.error('Il y a eu un problème avec la requête fetch:', error);
    });
// var poster = document.querySelector("video")
// let sourceth=data[index].thumbnailUrl
// poster.poster=`${sourceth}`

// <video width="320" height="240" controls poster="">
// <source src="" type="video/mp4">

// Your browser does not support the video tag.
// </video>