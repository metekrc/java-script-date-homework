// ******* Kodluyoruz Saat Odevi ******* 

// prompt seklinde ziyaretciden isimini alma kısımı
let name = prompt("Adınız Nedir?")
let myName = document.querySelector("#myName")
myName.innerHTML = `${name}`


function updateDateTime() {
    var now = new Date();
    var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    var dayName = days[now.getDay()];

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Saat, dakika ve saniyeyi iki basamaklı göstermek için:
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var currentTime = dayName + ', ' + hours + ':' + minutes + ':' + seconds;

    document.getElementById('myClock').innerText = currentTime;
}

// Sayfa yüklendiğinde ve her saniye güncellemek için:
window.onload = function() {
    updateDateTime();
    setInterval(updateDateTime, 1000);
}
