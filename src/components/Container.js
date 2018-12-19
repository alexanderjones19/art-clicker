import React, { Component } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';
import images from '../images.json';

class Container extends Component {
  state = {
    score: 0,
    highScore: 0,
    images,
    guessed: [],
    message: 'Click an image to begin!'
  };

  componentDidMount() {
    this.setState({
      images: this.shuffleImages(this.state.images)
    });
  }

  // Durstenfeld shuffle algorithm
  shuffleImages = array => {
    for (let i = array.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  imageClick = id => {
    if (this.state.guessed.indexOf(id) === -1) {
      this.setState({
        score: this.state.score + 1,
      }, () => {
        if (this.state.score >= this.state.highScore) {
          this.setState({
            highScore: this.state.score
          });
        }
        this.checkForWin(id);
      });
    }
    else {
      this.gameOver();
    }
  };

  checkForWin = id => {
    if (this.state.score < 12) {
      this.setState(prevState => ({
        guessed: [...prevState.guessed, id],
        message: 'Good! Keep going!'
      }));
      this.shuffleImages(this.state.images);
    }
    else if (this.state.score === 12) {
      this.setState({
        message: 'You win!'
      });
    }
    else {
      this.gameOver();
    }
  };

  gameOver = () => {
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      guessed: [],
      message: 'Oops! Try again!',
    });
    this.shuffleImages(this.state.images);
  };

  render() {
    return (
      <div className="page-flexbox-wrapper">
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
          message={this.state.message}
        />
        <Header/>
        <main>
          <div className="container">
            <div className="section">
              <div className="row">
                {this.state.images.map(image => (
                  <Card
                    id={image.id}
                    key={image.id}
                    image={image.image}
                    clicked={image.clicked}
                    imageClick={this.imageClick}
                    gameOver={this.gameOver}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default Container;