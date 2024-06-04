const btn = document.getElementById("randomBtm");
const result = document.getElementById("result");
btn.addEventListener("click",async () => {
    const res = await fetch("https://laroulette.onrender.com/api/v1/random")
    const data  = await res.json()
    console.log (data)
    result.textContent=data.laroulette.name
})