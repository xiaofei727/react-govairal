import React from 'react';
import ChallengesFilters from './ChallengesFilters';
import AllChallenges from './AllChallenges';

class Challenges extends React.Component {
  render() {
    return (
      <div>
        <ChallengesFilters />
        <AllChallenges />
      </div>
    );
  }
}

export default Challenges;
