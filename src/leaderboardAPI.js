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

      if (!response.ok) {
        throw new Error('Failed to create a post.');
      }
    } catch (error) {
      console.error('Error creating a post:', error.message);
    }
  };

  getLeaderboard = async () => {
    console.log('retrieving leaderboard...');
    let scoreList;
    try {
      const response = await fetch(`${baseURL}/games/${this.leaderboardGameID}/scores/`);

      if (!response.ok) {
        throw new Error('Failed to create a post.');
      }
      scoreList = await response.json();
      console.log('this is the response', scoreList);
    } catch (error) {
      console.error('Error creating a post:', error.message);
    }
    return scoreList;
  };
}

export default LeaderboardAPI;
