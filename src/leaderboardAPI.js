const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

class LeaderboardAPI {
  constructor() {
    // example leaderboard ID
    this.leaderboardGameID = '8aE0wakebZEvh6TGqKup';
  }

  makeLeaderboard = async () => {
    console.log('making leaderboard...');
    try {
      const response = await fetch(`${baseURL}/games/`, {
        method: 'POST',
        body: JSON.stringify({
          name: 'Vikingos',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.status) {
        throw new Error('Failed to create a post.');
      }
    } catch (error) {
      console.error('Error creating a post:', error.message);
    }
  };

  getLeaderboard = async () => {
    console.log('retrieving leaderboard...');
    try {
      const response = await fetch(`${baseURL}/games/${this.leaderboardGameID}/scores/`);

      if (!response.status) {
        throw new Error('Failed to create a post.');
      }
      const leaderboardResponse = await response.json();
      return leaderboardResponse.result;
    } catch (error) {
      console.error('Error retrieving the leaderboard:', error.message);
    }
    return [];
  };

  postScore = async (user, score) => {
    console.log('posting score...');
    try {
      const response = await fetch(`${baseURL}/games/${this.leaderboardGameID}/scores/`, {
        method: 'POST',
        body: JSON.stringify({
          user,
          score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.status) {
        throw new Error('Failed to create a post.');
      }
    } catch (error) {
      console.error('Error creating a post:', error.message);
    }
  };
}

export default LeaderboardAPI;
