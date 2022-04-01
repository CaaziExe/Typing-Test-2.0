let langugage = localStorage.getItem("lang");
if(langugage == null){
    langugage = "id";
}
console.log(language);

fetch(`source/word/${langugage}-words.txt`)
.then(r => r.text())
.then(data => sessionStorage.setItem("words", data))
