const api = {
    // ссылка. вместо endpoint(конечная точка) можно любое слово
    endpoint: "https://api.openweathermap.org/data/2.5/",
    // api key
    key: "bd0799c3de596749910dbd297d96290e"
}
// console.log(api)

const input = document.querySelector("#input");
input.addEventListener("keydown", enter);

// function enter() {
//     console.log("hey!")
// }


// если нажата клавиша enter то тогда мы начинаем поиск
// 1-IF-13/ENTER
// 2-SEARCH
// ставим (е)ивент/событие так как ожидаем что произойдет событие с клавиатурой

function enter(e) {
    if (e.key === "Enter") {
        getInfo(input.value);
    }
}

async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();
    // console.log(result.main.temp);
    // console.log(res);
    console.log(result);
    // console.log(result.main.feels_like);
    // console.log(result.main.temp_min);
    // console.log(result.name);
    // console.log(result.sys.country);
    // console.log(result.weather[0].description);

    // отразим результат на нашем сайте(приложении)

    displayResult(result);
}

function displayResult(result) {
    // console.log(result);
    let city = document.querySelector("#city");
    // доступ к строке где будет название города, let потому что значение будет меняться
    city.textContent = `${result.name}, ${result.sys.country}`;
    
    // date
    getOurDate();

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;
    // temperature.innerHTML = `${result.main.temp.toFixed(0)}<span>°</span>`;

    // используем nnerHTML чтобы использовать теги

    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = `<span>Feels like: ${Math.round(result.main.feels_like)}°</span>`;

    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${result.weather[0].main}`;

    let varation = document.querySelector("#varation");
    varation.innerHTML = "Min: " + `${Math.round(result.main.temp_min)}<span>°</span>` + " " + "Max: " + `${Math.round(result.main.temp_max)}<span>°</span>`;
    // varation.innerHTML = `<span>Min: ${Math.round(result.main.temp_min)}° Max: ${Math.round(result.main.temp_max)}°</span>`

}

function getOurDate() {
    const myDate = new Date;
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    let day = days[myDate.getUTCDay()];
    let todayDate = myDate.getUTCDate();
    let month = months[myDate.getUTCMonth()];
    let year = myDate.getUTCFullYear();

    let showDate = document.querySelector('#date');
    showDate.textContent = `${day}` + " " + `${todayDate}` + " " + `${month}` + " " + `${year}`;



    // console.log(myDate);
    // let date = document.querySelector("#date");
    // let day = days[myDate.getUTCDay()];
    // let month = months[myDate.getUTCMonth()];
    // document.getElementById("date").innerHTML = day +" " + myDate.getUTCDate() + " " + month + " " + myDate.getUTCFullYear();




}