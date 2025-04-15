window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const selected = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      contents.forEach(c => {
        c.classList.add('hidden');
      });

      document.getElementById(selected).classList.remove('hidden');
    });
  });

  const urlParams = new URLSearchParams(window.location.search);
  const targetTab = urlParams.get('tab');

  if (targetTab) {
    const targetButton = document.querySelector(`.tab[data-tab="${targetTab}"]`);
    if (targetButton) {
      targetButton.click(); 
    }
  }
});

