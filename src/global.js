window.repo = "PCG06/pokeyaeeh/YAEEH"
window.checkUpdate = "4 YAEEH"


fetch('https://raw.githubusercontent.com/ydarissep/dex-core/main/index.html').then(async response => {
	return response.text()
}).then(async rawHTMLText => {
	const parser = new DOMParser()
	const doc = parser.parseFromString(rawHTMLText, 'text/html')
    document.querySelector('html').innerHTML = doc.querySelector('html').innerHTML


    document.title = "YAEHH Dex"
    document.getElementById("footerName").innerText = "YAEEH idk something\nYdarissep Pokedex"


    document.getElementById("speciesPanelTMHMTable").getElementsByTagName("caption")[0].innerText = "Teachable"
    document.getElementById("speciesPanelTutorTable").classList.add("hide")


    await fetch("https://raw.githubusercontent.com/ydarissep/dex-core/main/src/global.js").then(async response => {
        return response.text()
    }).then(async text => {
        await eval.call(window,text)
    }).catch(error => {
        console.warn(error)
    })    

}).catch(error => {
	console.warn(error)
})


