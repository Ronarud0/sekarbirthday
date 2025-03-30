let pin = "";   

function enterNumber(num) {
    if (pin.length < 6) {
        pin += num;
        document.getElementById("pin-input").value = pin.replace(/./g, "•");
    }
}

function clearPIN() {
    pin = "";
    document.getElementById("pin-input").value = "";
}

function checkPIN() {
    let errorMessage = document.getElementById("error-message");
    
    console.log("PIN yang dimasukkan:", pin); // Debugging

    if (pin === "020406") {
        console.log("PIN benar! Akan berpindah ke halaman main.html");

        // Simpan status musik agar tetap nyala di halaman berikutnya
        let audio = document.getElementById("background-music");
        if (!audio.paused) {
            localStorage.setItem("musicPlaying", "true");
        } else {
            localStorage.setItem("musicPlaying", "false");
        }

        // Tambahkan delay untuk memastikan eksekusi sempurna
        setTimeout(() => {
            window.location.href = "main.html"; // Pindah halaman
        }, 500);
    } else {
        console.log("PIN salah! Munculkan pesan error.");

        errorMessage.textContent = "PIN salah, coba lagi ya sayang 💕";
        errorMessage.style.color = "red";

        setTimeout(() => {
            errorMessage.textContent = "";
            clearPIN();
        }, 2000);
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("background-music");
    let playButton = document.getElementById("play-music");
    let pauseButton = document.getElementById("pause-music");

    // Cek apakah musik sudah diputar sebelumnya
    if (localStorage.getItem("musicPlaying") === "true") {
        audio.play();
    }

    playButton.addEventListener("click", function() {
        audio.play();
        localStorage.setItem("musicPlaying", "true"); // Simpan status musik
    });

    pauseButton.addEventListener("click", function() {
        audio.pause();
        localStorage.setItem("musicPlaying", "false"); // Simpan status musik
    });
});







