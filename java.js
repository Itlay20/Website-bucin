
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 10 + 's';
            document.getElementById('hearts').appendChild(heart);
            setTimeout(() => heart.remove(), 10000);
        }
        setInterval(createHeart, 500);

        function respond(choice) {
            const responseDiv = document.getElementById('response');
            if (choice === 'sayang') {
                responseDiv.innerHTML = 'Yey! ai tahu klu aldy sayang ai juga! 💖 !';
            } else if (choice === 'tidak') {
                responseDiv.innerHTML = 'Hiks... eumm sedih bgtt klu ndak sayang! 😢 ';
            }

        }
