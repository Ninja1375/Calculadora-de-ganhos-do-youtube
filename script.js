function calculateEarnings() {
    const subscribers = parseInt(document.getElementById("subscribers").value);
    const channelViews = parseInt(document.getElementById("channelViews").value);
    const videoViews = parseInt(document.getElementById("videoViews").value);
    const cpm = parseFloat(document.getElementById("cpm").value);
    
    if (isNaN(subscribers) || isNaN(channelViews) || isNaN(videoViews) || isNaN(cpm)) {
        document.getElementById("earnings").innerText = "Por favor, preencha todos os campos.";
        return;
    }
    
    const monetizedViews = channelViews * 0.6;
    const earnings = (monetizedViews / 1000) * cpm;
    
    document.getElementById("earnings").innerText = `$ ${earnings.toFixed(2)}`;
}

function toggleTheme() {
    document.body.classList.toggle("dark");
    document.querySelector(".youtube-calculadora").classList.toggle("dark");
}
