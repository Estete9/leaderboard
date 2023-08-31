import './style.css';
import LeaderboardAPI from './leaderboardAPI.js';
import Leaderboard from './Leaderboard.js';
import resetInputs from './utils.js';
import refreshIcon from '../assets/refresh.svg';

const refreshBtn = document.getElementById('refresh-btn');
const postScoreBtn = document.getElementById('submit-btn');
const leaderboardApi = new LeaderboardAPI();
const leaderboard = new Leaderboard(leaderboardApi);
const refreshSvg = document.getElementById('refresh-icon');

refreshSvg.src = refreshIcon;

leaderboard.updateLeaderboard();
refreshBtn.onclick = leaderboard.updateLeaderboard;
postScoreBtn.addEventListener('click', async () => {
  const user = document.getElementById('user-name');
  const score = document.getElementById('user-score');
  leaderboardApi.postScore(user.value, parseInt(score.value, 10));
  resetInputs([user, score]);
});

