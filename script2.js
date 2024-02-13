document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter');
  
    envelope.addEventListener('click', function() {
      // Toggle the display property of the letter
      if (letter.style.display === 'none') {
        letter.style.display = 'block';
      } else {
        letter.style.display = 'none';
      }
    });
  });