const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke")

const apikey = "LOJK6tlL0y25fu7Um/WS9w==SIopuJ6Kq8Gu9OQj1"; // your api key -> Create account in apininjas_ https://api-ninjas.com/

const options ={
    method: "GET",
    headers:{
        "X-Api-Key":apikey    
    },
};
 
const apiurl="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {

    try {
        jokeEl.innerText="Updating..."

    btnEl.disabled=true;
    btnEl.innerText="Loading.."

    const response = await fetch(apiurl,options);
    const data = await response.json();
    jokeEl.innerText=data[0].joke;

    btnEl.disabled=false;
    btnEl.innerText="Tell Me a Joke"
    } 
    catch (error)
     {
        jokeEl.innerText="An Error Happened,try again later";
        console.log(error);
    }
    
}


btnEl.addEventListener("click",getJoke);
