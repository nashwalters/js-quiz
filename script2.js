scoreBtn.addEventListener('click', showScore)
function showScore() {
    results.classList.add('hide');
    finalScores.classList.remove('hide');

    var highScore =JSON.parse(window.localStorage.getItem("highScore")) || [];

    highScore.sort((a,b) => b.score - a.score);

    highScore.forEach(function(score) {
    var liTag = document.createElement("li");
    liTag.textContent = score.username + " - " + score.score;
    scoreBoard.appendChild(liTag);
  });
}

scoreBtn.addEventListener('click', function(){
    finalScores.classList.remove('hide');
    main.classList.add('hide');
    quizBtnEl.classList.add('hide');
    scoreBtn.classList.add('hide');
    liTag.textContent = score.username + " - " + score.score;
})

clearBtn.addEventListener('click', clearScores)
function clearScores() {                               
  localStorage.removeItem("highscore");
  window.location.reload();
}
