function loadRecentlyPlayed() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("demo").innerHTML =
        this.responseText;
    }
    xhttp.open("GET", "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=F2B50EF3BD93CB433B2CB0C60F4D53E9&steamid=76561198368190026&format=json");
    xhttp.send();
}