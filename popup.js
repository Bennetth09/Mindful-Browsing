document.getElementById('takeBreak').addEventListener('click', () => {
    // Provide a mindfulness tip
    fetch('tips.json')
      .then(response => response.json())
      .then(data => {
        const randomTip = data[Math.floor(Math.random() * data.length)];
        document.getElementById('mindfulnessTip').innerText = randomTip;
      });
  });
  