function createCard(title, cName, views, monthsOld, duration, thumbnail)
{
    var viewCount = views;
    if(views <= 999999 && views >= 1000)
    {
        viewCount = views/1000 + "k";
    }
    else if(views > 999999 && views < 999999999)
    {
        viewCount = views/1000000 + "M";
    }

    let html = `<div class="container">
    <div class="thumb-section">
      <div class="image-section">
        <img src=${thumbnail} />
        <span>${duration}</span>
      </div>
    </div>
    <div class="title-section">
      <h2>${title}</h2>
      <span id="Chname">${cName}</span>
      <span id="vCount">${viewCount} views</span>
      <span id="upload-time">${monthsOld} months old</span>
    </div>
  </div>`
  
  document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;

}

createCard("learncoding","codewithharry", 7200, 2, "12:00", 
    "http://127.0.0.1:5500/JS%20Harry/DynamicWebsiteProject/assets/images/sampleImage.webp");
    createCard("learncoding","codewithharry", 700, 2, "15:00", 
    "http://127.0.0.1:5500/JS%20Harry/DynamicWebsiteProject/assets/images/sampleImage.webp");
    createCard("learncoding","codewithharry", 72000000, 2, "13:30", 
    "http://127.0.0.1:5500/JS%20Harry/DynamicWebsiteProject/assets/images/sampleImage.webp");
    createCard("learncoding","codewithharry", 1200, 2, "18:20", 
    "http://127.0.0.1:5500/JS%20Harry/DynamicWebsiteProject/assets/images/sampleImage.webp");
    createCard("learncoding","codewithharry", 2200, 2, "16:12", 
    "http://127.0.0.1:5500/JS%20Harry/DynamicWebsiteProject/assets/images/sampleImage.webp");