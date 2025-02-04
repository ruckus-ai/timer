function startCountdown() {
    const eventName = document.getElementById('eventName').value;
    const dateInput = document.getElementById('dateInput').value;
    const targetDate = new Date(dateInput).getTime();

    if (!eventName || isNaN(targetDate)) {
        alert("Bitte geben Sie einen Event-Namen und ein gültiges Datum ein.");
        return;
    }

    // Event-Namen in der Überschrift anzeigen
    document.getElementById('eventTitle').innerText = eventName;

    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = `Zeit abgelaufen, ${eventName} erreicht!
