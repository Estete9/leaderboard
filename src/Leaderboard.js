class Leaderboard {
  constructor(scoresList) {
    this.scoresList = scoresList;
  }

  updateLeaderboard = () => {
    // if list is empty, add a score-item placeholder
    console.log(`scoresList length ${this.scoresList.length}`);
    if (!this.scoresList.length) {
      const scoresListContainer = document.getElementById('all-scores-list');
      scoresListContainer.innerHTML = '';
      const scoreItem = document.createElement('li');

      scoreItem.classList.add('score-item');
      scoreItem.id = 'empty-list-item';
      // prettier-ignore
      scoreItem.innerHTML = `
        <li class="score-item">There are no submissions yet...</li>
    `;
      scoresListContainer.appendChild(scoreItem);
      return;
    }
    // if list is not empty empty, populate with the scoresList elements
    const scoresListContainer = document.getElementById('all-scores-list');
    scoresListContainer.innerHTML = '';
    this.scoresList.forEach((score, index) => {
      const scoreItem = document.createElement('li');

      scoreItem.classList.add('score-item');
      scoreItem.id = index;
      // prettier-ignore
      scoreItem.innerHTML = `
        <li class="score-item">${score.name}: ${score.score}</li>
    `;

      scoresListContainer.appendChild(scoreItem);
    });
  };
}

export default Leaderboard;

