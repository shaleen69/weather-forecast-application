const button=document.getElementById("search-button");
const input=document.getElementById("city");

const cityname=document.getElementById('city-name');
const citytime=document.getElementById('city-time');
const citytemp=document.getElementById('city-temp');
const cityhumid=document.getElementById('city-humid');
const citywind=document.getElementById('city-wind');
const citycondition=document.getElementById(`city-condition`);

async function getdata(cityname) {
    const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=cc8fba2b65444d74a32210317242008&q=${cityname}&aqi=yes`);
    return await promise.json()
}
button.addEventListener("click",async ()=>{
    const value=input.value;
    const result=await getdata(value);

    cityname.innerText=`Name:${result.location.name}\nRegion:${result.location.region}\nCountry:${result.location.country}\n`;
    citytime.innerText=`Localtime:${result.location.localtime}\n`;
    citytemp.innerText=`Temperature:${result.current.temp_c}\n`;
    cityhumid.innerText=`Humidity:${result.current.humidity}\n`;
    citywind.innerText=`Wind-speed:${result.current.wind_kph}\n`;
    citycondition.innerText=`Condition:${result.current.condition.text}\n`;
})
//
//api.weatherapi.com/v1/current.json?key=cc8fba2b65444d74a32210317242008&q=London&aqi=yes