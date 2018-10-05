window.onload = () => {
    // output the personal highscore
    const personalHighscoreLs = localStorage.getItem('score')
    const username = localStorage.getItem('username');
    const personalHighscore = document.getElementById('personalHighscore');
    personalHighscore.innerHTML += `<h4>${username}: ${personalHighscoreLs}</h4>`;
  
    
}