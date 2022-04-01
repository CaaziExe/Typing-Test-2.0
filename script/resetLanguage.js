export function resetLanguage(value){
    localStorage.setItem("lang", value);
    location.reload();
}