document.addEventListener("DOMContentLoaded", function() {
  const characters = ['P', 'E', 'Z', 'O', 'L', 'C', 'F', 'T', 'D'];
  const lines = [
      { id: "line1", chars: 1 },
      { id: "line2", chars: 2 },
      { id: "line3", chars: 3 },
      { id: "line4", chars: 4 },
      { id: "line5", chars: 5 },
      { id: "line6", chars: 6 },
      { id: "line7", chars: 7 },
      { id: "line8", chars: 8 },
      { id: "line9", chars: 9 },
      { id: "line10", chars: 10 },
      { id: "line11", chars: 11 },
  ];
  const shuffle = (array) =>  {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  lines.forEach(line => {
        const randomChars = shuffle(characters).slice(0, line.chars).join('');
        document.getElementById(line.id).textContent = randomChars;
    });
});
