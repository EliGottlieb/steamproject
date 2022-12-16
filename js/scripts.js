function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("demo").innerHTML =
        this.responseText;
    }
    let key = "F2B50EF3BD93CB433B2CB0C60F4D53E9"
    let steamID = "76561198368190026"
    let params = "?key=" + key + "&input_json={\"steamid\":" + steamID + "}"
    let url = "https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/"
    xhttp.open("GET", url + params);
    xhttp.send();
}