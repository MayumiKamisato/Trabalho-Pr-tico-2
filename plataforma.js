const id = location.href.split("?")[1];

onload = () => {
    destaques();
    
}

async function destaques() {
    let data = await fetch(`https://api.rawg.io/api/platforms/${id}?key=32db20030f844c42ac056a9e17c926bd`)
        .then((res) => res.json());

    let str = `<div class="carousel-item">
 <div class="col-12 col-lg-6 col-sm-12 float-start" style="clear: both;">
     <div class="ratio ratio-16x9">
     <img src="${data.image_background}"class= "img-fluid">
     </div>
     </div>
     <div class=" col-12 col-lg-6 col-sm-12 float-end ps-4" id="nopading">
     <article class="descricao">
     <h1>${data.name}</h1>
     <p><b>Descrição: </b>${data.description}</p>                                
     </article>
     </div>
 </div>`;
    document.querySelector('#plataforma').innerHTML = str
    document.querySelector('#plataforma').firstChild.classList.toggle("active");
}

