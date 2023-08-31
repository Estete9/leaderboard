import './style.css';
import LeaderboardAPI from './leaderboardAPI.js';
import Leaderboard from './Leaderboard.js';

const leaderboardApi = new LeaderboardAPI();
const refreshBtn = document.getElementById('refresh-btn');
const leaderboard = new Leaderboard(leaderboardApi.getLeaderboard());

leaderboard.updateLeaderboard();
refreshBtn.onclick = leaderboardApi.getLeaderboard();
