const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)
function add() {
 const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
 //const today= "10/01"
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso 🚫")
    return
  }
  alert("adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}
function save() {
  localStorage.setItem('pcDaniel@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("pcDaniel@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load() 
/*const data ={
  run:['01-21','01-22','01-23'],
  takePills: ['01-24'],
  journal:['01-25']
  */

