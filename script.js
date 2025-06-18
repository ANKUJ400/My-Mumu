 const colors = ['#ff4d4d', '#ffcc00', '#66ff66', '#66ccff', '#cc99ff'];

    function createBalloon() {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      balloon.style.left = Math.random() * window.innerWidth + 'px';
      balloon.style.animationDuration = (Math.random() * 5 + 5) + 's';

      const string = document.createElement('div');
      string.classList.add('string');
      balloon.appendChild(string);

      document.body.appendChild(balloon);

      setTimeout(() => {
        balloon.remove();
      }, 100000);
    }

    setInterval(createBalloon, 500);