function dataSetup(){
    fetch("./../source/word/id-words.txt")
    .then(response => response.text())
    .then(text => sessionStorage.setItem("words", text))
}

export function getRandomWord(){
    dataSetup();
    let listData = sessionStorage.getItem("words").split("\r\n");
    return listData[Math.floor(Math.random() * (listData.length-1))];
}