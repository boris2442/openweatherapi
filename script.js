
const btn=document.querySelector(".btn");
const deleteApi=document.querySelector(".delete");
const result=document.getElementById('result');
const weather=()=>{

    
    const inputText=document.getElementById('search');

    let valueInput;
  
    inputText.addEventListener("input", async (e)=>{
        valueInput=e.target.value.trim();
      
       const apikey="3c0577d377eb01f8c06549f97b3c534e";
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${valueInput}&appid=${apikey}&units=metric`;

        
     const response=await fetch(url);
     const data=await response.json();

      let convertSunrise=new Date((data.sys.sunrise)).toLocaleTimeString();
      let convertSunset=new Date((data.sys.sunset)).toLocaleTimeString();
       const div=document.createElement('div');
       result.appendChild(div);
       div.classList.add('styledata')
       div.innerHTML=`
     
       <h2><span>Country:</span>${data.name}, ${data.sys.country}</h2>
       <h2><span>Coordonnees:</span> ${data.coord.lon}</h2>
       <p>💧<span>Pourcentage nuageux:</span>${data.clouds.all}%</p>
       <p>��️<span> Temperature:</span> ${data.main.temp}°C</p>
       <p>🌡️<span> Température ressentie:</span> ${data.main.feels_like}°C</p>
       <p>💦<span> Humidité:</span> ${data.main.humidity}%</p>

       <p><span>Météo:</span> ${data.weather[0].description}</p>
       <p><span>Visibility:</span>${data.visibility}m</p>
       <p>🌅<span>Levée du soleil:</span>${convertSunrise}</p>
       <p>🌇<span>Couchée du soleil:</span>${convertSunset}</p>
       `
    })

}

weather();
// btn.addEventListener("click", weather);

// deleteApi.addEventListener("click", ()=>{
//     // result.innerHTML = "";
//     valueInput.innerHTML = "";
// })