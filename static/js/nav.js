document.addEventListener('DOMContentLoaded', () => {
  const textElements = document.querySelectorAll('.animate-text');
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  textElements.forEach(element => {
    element.addEventListener('mouseover', (event) => {
      let iteration = 0;
      const interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split('')
          .map((letter, index) => {
            if (index < iteration) return event.target.dataset.value[index];
            else return letters[Math.floor(Math.random() * letters.length)];
          })
          .join('');
  
        iteration += 1 / 5;
  
        if (iteration > event.target.innerText.length) clearInterval(interval);
      }, 25);
    });
  });
});