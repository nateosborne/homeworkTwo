// This is my model and it handles on the service calls
var homeContent = `<div class="hero">
<h1>CANDY</h1>
</div>`
var aboutContent = `<h1>WHO WE ARE</h1>
<div class="abouthero"></div>
<div class="abouttext">
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
    voluptatem quia dolore laudantium maxime, accusamus, quod debitis
    ipsum placeat laborum rerum id accusantium quis nemo quibusdam
    perspiciatis odit tempore totam! Beatae omnis consequatur laboriosam
    similique voluptas. Porro corrupti optio ducimus culpa mollitia et
    fuga ullam? Necessitatibus cumque quis porro soluta praesentium, quas
    sit quam beatae dolore quasi sapiente placeat sequi! Dignissimos quasi
    distinctio hic eius et iusto, maiores accusantium reprehenderit
    commodi cum vel delectus odit laborum ratione molestiae fugit illo
    sapiente est nihil temporibus, pariatur, nostrum modi aut sunt. Natus!
    Debitis provident quos quas officiis minus voluptates? Explicabo velit
    perspiciatis, minima, exercitationem ullam a iste quia placeat fugiat
    animi esse tenetur nostrum! Minus magni illo repellendus ea, error
    nobis totam! A recusandae nobis rem vero reiciendis. Molestias
    voluptatibus aspernatur dolorem ad cupiditate culpa repellat laborum
    quas? Eaque odio id quod eum itaque, quas molestiae quia ipsa culpa ut
    error atque!
  </p>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
    voluptatem quia dolore laudantium maxime, accusamus, quod debitis
    ipsum placeat laborum rerum id accusantium quis nemo quibusdam
    perspiciatis odit tempore totam! Beatae omnis consequatur laboriosam
    similique voluptas. Porro corrupti optio ducimus culpa mollitia et
    fuga ullam? Necessitatibus cumque quis porro soluta praesentium, quas
    sit quam beatae dolore quasi sapiente placeat sequi! Dignissimos quasi
    distinctio hic eius et iusto, maiores accusantium reprehenderit
    commodi cum vel delectus odit laborum ratione molestiae fugit illo
    sapiente est nihil temporibus, pariatur, nostrum modi aut sunt. Natus!
    Debitis provident quos quas officiis minus voluptates? Explicabo velit
    perspiciatis, minima, exercitationem ullam a iste quia placeat fugiat
    animi esse tenetur nostrum! Minus magni illo repellendus ea, error
    nobis totam! A recusandae nobis rem vero reiciendis. Molestias
    voluptatibus aspernatur dolorem ad cupiditate culpa repellat laborum
    quas? Eaque odio id quod eum itaque, quas molestiae quia ipsa culpa ut
    error atque!
  </p>
</div>`
var productsContent = `<div class="prodcont">
<h1>GUMMY BEARS</h1>
<div class="bag"></div>
</div>
<div class="prodcont2">
<div class="bag"></div>
<h1>SHERBET</h1>
</div>`;
var contactContent = `<div class="contact">
<h1>CONTACT US</h1>
<div class="contactcont">
  <div class="box">
    <div class="contactbox"></div>
    <div class="submit">
      <p>SUBMIT</p>
    </div>
  </div>
  <div class="map"></div>
</div>
</div>`;

function setCurrentPageContent(pageID) {
    let contentName = pageID + "Content";
    $("#app").html(eval(contentName));
}

function getLastName(lastName){
    console.log();
}

export { setCurrentPageContent };