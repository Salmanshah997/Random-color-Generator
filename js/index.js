const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 1677215)
    const randomCode = "#" + randomNumber.toString(16)
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color_code").innerHTML = randomCode;
    navigator.clipboard.writeText(randomCode)
}
document.getElementById("btn").addEventListener("click", getColor)
getColor()

function openNav() {
  document.querySelector(".sidebar").style.width = "20%";
}

function closeNav() {
  document.querySelector(".sidebar").style.width = "0";
}