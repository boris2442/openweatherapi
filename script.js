//3c0577d377eb01f8c06549f97b3c534e
// ;
// const weather=()=>{
    
// 


// ;
// 
// inputText.addEventListener("input", (e)=>{
//   valueInput=e.target.value.trim();
//     console.log(valueInput);
    
// })
//     const keyapi="3c0577d377eb01f8c06549f97b3c534e";
//     const url=`https://api.openweathermap.org/data/2.5/weather?q=${valueInput}&appid=${keyapi}&units=metric`;

//     fetch(url).then((resp)=>resp.json())
   
//     .then(data=>{
//         if(data.cod===200){
//             document.getElementById("result").innerHTML = `
//             <h3>${data.name}, ${data.sys.country}</h3>
//             <p>Température : ${data.main.temp}°C</p>
//             <p>Météo : ${data.weather[0].description}</p>`
           
//         }else{
//             alert("ville non trouvée")
//         }


// })
// }
// btn.addEventListener('click',weather)

// const apiKey = "3c0577d377eb01f8c06549f97b3c534e"; // Remplacez par votre vraie clé API
// const city = "Paris"; // Ville à rechercher
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("Erreur :", error));
const btn=document.querySelector(".btn");

const weather=()=>{

    
    const inputText=document.getElementById('search');
    const result=document.getElementById('result');
    let valueInput;
    // let data;
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
     
       <h2>Country:${data.name}, ${data.sys.country}</h2>
       <h2>Coordonnees: ${data.coord.lon}</h2>
       <p>💧Pourcentage nuageux:${data.clouds.all}%</p>
       <p>��️ Temperature: ${data.main.temp}°C</p>
       <p>🌡️ Température ressentie: ${data.main.feels_like}°C</p>
       <p>💦 Humidité: ${data.main.humidity}%</p>

       <p>Météo: ${data.weather[0].description}</p>
       <p>Visibility:${data.visibility}m</p>
       <p>🌅Levée du soleil:${data.sys.sunrise}</p>
       <p>🌇Couchée du soleil:${data.sys.sunset}</p>
       `
    
    })
   

}

//  btn.addEventListener('click',weather);
 
weather();

//    <h2>Country: ${data.sys.name}</h2>
    //    2>
    //            <p>Temperature: ${data.main.temp}°C</p>
    //            <p>Meteo: ${data.weather[0].description}</p>
    //            <p>Humidity: ${data.main.humidity}%</p>
    //             <p>Wind Speed: ${data.wind.speed} m/s</p>
    //             <p>Sunrise: ${new Date(data.sys.sunrise*1000).toLocaleTimeString()}</p>
    //              <p>Sunset: ${new Date(data.sys.sunset*1000).toLocaleTimeString()}</p>









    // const weather = () => {
    //     const inputText = document.getElementById('search');
    //     const result = document.getElementById('result');
    //     const apikey = "3c0577d377eb01f8c06549f97b3c534e"; // Clé API correcte
    
    //     inputText.addEventListener("input", async (e) => {
    //         let valueInput = e.target.value.trim();
    
    //         if (valueInput === "") {
    //             result.innerHTML = "<p>Veuillez entrer un nom de ville.</p>";
    //             return;
    //         }
    
    //         const url = `https://api.openweathermap.org/data/2.5/weather?q=${valueInput}&appid=${apikey}&units=metric`;
    
    //         try {
    //             const response = await fetch(url);
    //             const data = await response.json();
    
    //             if (data.cod !== 200) {
    //                 result.innerHTML = `<p>Erreur : ${data.message}</p>`;
    //                 return;
    //             }
    
    //             // Vider l'ancien résultat avant d'afficher le nouveau
    //             result.innerHTML = "";
    
    //             const div = document.createElement('div');
    //             div.classList.add('styledata');
    
    //             div.innerHTML = `
    //                 <h2>${data.name}, ${data.sys.country}</h2>
    //                 <p>🌡️ Température : ${data.main.temp}°C (Ressenti : ${data.main.feels_like}°C)</p>
    //                 <p>🌬️ Vent : ${data.wind.speed} m/s</p>
    //                 <p>💧 Humidité : ${data.main.humidity}%</p>
    //                 <p>☁️ Ciel : ${data.weather[0].description}</p>
    //             `;
    
    //             result.appendChild(div);
    //         } catch (error) {
    //             result.innerHTML = `<p>Une erreur s'est produite.</p>`;
    //             console.error("Erreur de récupération :", error);
    //         }
    //     });
    // };
    
    // weather();
    