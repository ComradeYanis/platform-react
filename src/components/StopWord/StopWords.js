import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListWords from "./components/ListStopWord";
import WordsSender from './components/SendStopWord';

class Words extends Component {
  static propTypes = {
    sendWords: PropTypes.func.isRequired,
    words: PropTypes.array.isRequired,
    fetchWords: PropTypes.func.isRequired,
    deleteWords: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchWords } = this.props;

     fetchWords();
  }

  render() {
    const {words, fetchWords, sendWords, deleteWords} = this.props;

    return (
      <div>
        <h2>Stop words</h2>
        <WordsSender sendWords={sendWords} />
        <ListWords
          words={words}
          fetchWords={fetchWords}
          deleteWords={deleteWords}
        />
      </div>
    );
  }
}

export default Words;

