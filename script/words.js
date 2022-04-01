export function getRandomWord(){
    try{
        let data = sessionStorage.getItem("words").replaceAll("\r", "");
        console.log(sessionStorage.getItem("words"));
        let listData = data.split("\n");
        return listData[Math.floor(Math.random() * (listData.length-1))];
    }catch{
        location.reload()
    }
}
