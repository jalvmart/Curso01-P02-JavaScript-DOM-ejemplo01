const app = document.getElementById("app")

//Create Header Title
const newH1 = document.createElement("h1")
const newTextH1 = document.createTextNode("Desarrollo Web Básico")
newH1.appendChild(newTextH1)
app.appendChild(newH1)

//Create unordered list
const newUL = document.createElement("ul")
app.appendChild(newUL)

//Create list
const unList = document.getElementsByTagName("ul")
const newTextLI = ["HTML","CSS","JavaScript"]

for (let i = 0; i < newTextLI.length; i++){    
    let newLI = document.createElement("li")
    newLI.appendChild(document.createTextNode(newTextLI[i]))
    unList[0].appendChild(newLI)    
}




