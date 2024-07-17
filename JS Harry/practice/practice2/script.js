async function fetchData()
{
    let content = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
    let data = await content.text();
    document.getElementsByClassName("container")[0].innerHTML = 
    document.getElementsByClassName("container")[0].innerHTML + data;
    console.log(data);
       
}
fetchData();

setInterval(fetchData, 5000)
