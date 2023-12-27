document.addEventListener('DOMContentLoaded', () => {
    const getNewJokeBtn = document.getElementById('getNewJokeBtn');
  
    if (getNewJokeBtn) {
      getNewJokeBtn.addEventListener('click', () => {
        window.location.reload(); 
      });
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    function regenerateJoke() {
      const currentCategory = '<%= joke.category %>';
      window.location.href = `/get-joke/${currentCategory}`;
    }
  });
