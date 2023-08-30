import './style.css';
import LeaderboardAPI from './leaderboardAPI.js';

const leaderboard = new LeaderboardAPI();

leaderboard.getLeaderboard();
