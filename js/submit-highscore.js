window.onload = () => {
    const username = document.getElementById('username');
    const highscore = document.getElementById('highscore');

    console.log(localStorage.getItem('username'));

    const lsUsername = localStorage.getItem('username')
    const lsHighscore = localStorage.getItem('score')

    if(lsUsername !== null) {
        username.value = lsUsername
    }
    highscore.innerHTML = `Highscore: ${lsHighscore}`;
}


const scoreForm = document.getElementById('scoreForm'); 

scoreForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameVal = document.getElementById('username').value;
    const highscoreVal = document.getElementById('highscore').value;
    const lsHighscore = localStorage.getItem('score')

    localStorage.setItem('username', usernameVal);
    const scoreData = {
        username: usernameVal,
        score: lsHighscore
    }
    window.location.replace('index.html')

    console.log(usernameVal, lsHighscore);
})