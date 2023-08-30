const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

class LeaderboardAPI {
  constructor() {
    // example leaderboard ID
    this.leaderboardGameID = 'Zl4d7IVkemOTTVg2fUdz';
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

      if (!response.ok) {
        throw new Error('Failed to create a post.');
      }

      const json = await response.json();
      console.log('this is the response', json);
    } catch (error) {
      console.error('Error creating a post:', error.message);
    }
  };

  getLeaderboard = async () => {
    console.log('retrieving leaderboard...');
    try {
      const response = await fetch(`${baseURL}/games/${this.leaderboardGameID}/scores/`);

      if (!response.ok) {
        throw new Error('Failed to create a post.');
      }
      const json = await response.json();
      console.log('this is the response', json);
    } catch (error) {
      console.error('Error creating a post:', error.message);
    }
  };
}

export default LeaderboardAPI;

