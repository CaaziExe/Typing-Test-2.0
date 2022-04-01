let langugage = localStorage.getItem("lang");
if(langugage == null){
    langugage = "id";
}

fetch(`source/word/${langugage}-words.txt`)
.then(r => r.text())
.then(data => sessionStorage.setItem("words", data))

console.log(language);
