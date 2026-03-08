const pdfFiles = [

"Australian National Cinema (National Cinemas) (Tom ORegan) (Z-Library).pdf",
"Film in Australia.pdf",
"Seal - 2007 - ANZAC The sacred in the secular.pdf"

]

const pdfList = document.getElementById("pdf-list")

function displayPDFs(list){

pdfList.innerHTML=""

list.forEach(file => {

const div = document.createElement("div")
div.className="pdf-item"

div.innerHTML = `

<strong>${file}</strong>

<br><br>

<a href="pdf/${file}" target="_blank">
<button>Read</button>
</a>

<a href="pdf/${file}" download>
<button>Download</button>
</a>

`

pdfList.appendChild(div)

})

}

displayPDFs(pdfFiles)

document.getElementById("search").addEventListener("input", function(){

const keyword = this.value.toLowerCase()

const filtered = pdfFiles.filter(file =>
file.toLowerCase().includes(keyword)
)

displayPDFs(filtered)

})