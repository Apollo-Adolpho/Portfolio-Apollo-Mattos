function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split('');
    let i = 0;
  
    document.querySelector(eleRef).textContent = '';
  
    function typeLetter() {
      if (i < letters.length) {
        document.querySelector(eleRef).textContent += letters[i];
        i++;
        setTimeout(typeLetter, delay); 
      }
    }
  
    typeLetter();
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    typeSentence("Olá, eu sou Apollo Mattos", "#typewriter", 100);
  });
  