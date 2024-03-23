document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const colors = ['#FFC300', '#FF5733', '#C70039', '#900C3F', '#581845'];
    let activeColorIndex = 0;
  
    function changeBackgroundColor() {
      header.style.background = colors[activeColorIndex];
      activeColorIndex++;
      if (activeColorIndex >= colors.length) {
        activeColorIndex = 0;
      }
      setTimeout(changeBackgroundColor, 3000); // Change color every 3 seconds
    }
  
    changeBackgroundColor();
  });
  