    // Fungsi untuk memasukkan angka ke input PIN
    function enterNumber(num) {
        let pinInput = document.getElementById("pin-input");
        if (pinInput.value.length < 6) {
            pinInput.value += num;
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        let audio = document.getElementById("background-music");
    
        // Cek apakah musik harus diputar kembali
        if (localStorage.getItem("musicPlaying") === "true") {
            audio.play();
        }
    });

 
    document.addEventListener("DOMContentLoaded", function() {
        let audio = new Audio("Beauty and the Beast (From Beauty and the Beast) [Instrumental Philharmonic Orchestra Version].mp3");
        audio.loop = true; // Agar musik tetap berulang
        
        // Cek status musik dari localStorage
        let musicPlaying = localStorage.getItem("musicPlaying");
        
        if (musicPlaying === "true") {
            audio.play();
        }
    
        // Tambahkan tombol play/pause jika ingin mengontrol musik di main.html
        document.getElementById("play-music").addEventListener("click", function() {
            audio.play();
            localStorage.setItem("musicPlaying", "true");
        });
    
        document.getElementById("pause-music").addEventListener("click", function() {
            audio.pause();
            localStorage.setItem("musicPlaying", "false");
        });
    });
    
    // Fungsi untuk menghapus angka terakhir
    function deleteNumber() {
        let pinInput = document.getElementById("pin-input");
        pinInput.value = pinInput.value.slice(0, -1);
    }

    // Fungsi untuk menghapus semua angka
    function clearPIN() {
        document.getElementById("pin-input").value = "";
    }

    // Fungsi untuk mengecek PIN
    function checkPIN() {
        let pinInput = document.getElementById("pin-input").value;
        let errorMessage = document.getElementById("error-message");

        if (pinInput === "020406") {
            window.location.href = "main.html"; // Ganti dengan halaman utama setelah PIN benar
        } else {
            errorMessage.textContent = "PIN salah, coba lagi ya sayang 💕";
            errorMessage.style.color = "red";
            setTimeout(() => {
                errorMessage.textContent = "";
                clearPIN();
            }, 2000);
        }
    }

    // Fungsi animasi getaran romantis
    gsap.to(".getar", {
        x: 2,  
        y: 2,  
        duration: 0.5,  
        repeat: -1,  
        yoyo: true,  
        ease: "power1.inOut"
    });
