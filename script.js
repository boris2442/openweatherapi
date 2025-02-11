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

    inputText.addEventListener("input", (e)=>{
        valueInput=e.target.value.trim();
        console.log(valueInput);
        // if(valueInput===""){
        //     alert("veuillez entrer un pays")
        // }
       const apikey="3c0577d377eb01f8c06549f97b3c534e";
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${valueInput}&appid=${apikey}&units=metric`;
        fetch(url).then(response => response.json())
        .then((data)=>console.log(data));
       const div=document.createElement('div');
       result.appendChild(div);
       div.classList.add('styledata')
       div.innerHTML=`
       <h2>${data.name}, ${data.sys.country}</h2>
       
       
       
       `

    })
   

}

// btn.addEventListener('click',weather)
weather();