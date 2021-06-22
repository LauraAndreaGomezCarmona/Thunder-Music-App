import React, {useState} from 'react';
import SongsList from '../SongsList';
import {v4 as uuidv4} from 'uuid';
import SweetAlert from "sweetalert2";

export const SongsQuiz = () => {
// Declaration of the state variables currentSong, score, clicked and showScore
  const [currentSong, setCurrentSong] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect){
      setScore(score + 1);
      SweetAlert.fire({
        icon: "success",
        title: "Congratulations, You guess it! :D",
        showConfirmButton: false,
        timer: 1700
      });
      }else{
        SweetAlert.fire({
          icon: "error",
          title: "The song is incorrect",
          showConfirmButton: false,
          timer: 1500
      });
   }
   setClicked(true);
  };

  const handleNextSong = () => {
    setClicked(false);
    if (currentSong < SongsList.length - 1){
      setCurrentSong(currentSong + 1);
    }else{
      setShowScore(true);
    }
  };

  return (
      <section data-testid='songs-quiz-id' className='quiz-container'>
        {showScore ? (
          <div aria-hidden='true'>
            <p className='completed'>completed !</p>
            <section className='score'>Your Score is : {score} out of {SongsList.length} songs</section>
              <button className='play-again' onClick={() => {window.location.reload()}}>Play again</button>
          </div>
        ) : (
        <div aria-hidden='true'>
          <h3 className='game-title'>Songs Quiz</h3>
          <div className='quiz-section' aria-hidden='true'>
            <div className='songs-count' aria-hidden='true'>
              Song {currentSong + 1} of {SongsList.length}
            </div>
            <audio src = {SongsList[currentSong].src} controls></audio>
            <div className='action' aria-hidden='true'>
              <p>Choose the right name of the song: </p>
            </div>
          </div>

          <div className='song-options-wrap' aria-hidden='true'>
              {SongsList[currentSong].answersList.map((answerOption) => (
                <li className='songs-list' key={uuidv4()}>
                  <button 
                    disabled={clicked}
                    className={`correct-song-button ${clicked && answerOption.isCorrect ? 'correct' : ''}`}
                    onClick={() => handleCorrectAnswer(answerOption.isCorrect)}>
                    {answerOption.answer}
                  </button>
                </li>
              ))}
          </div>
      
          <div aria-hidden='true'>
            <button 
              type='submit'
              className='next' 
              disabled={!clicked} 
              onClick={handleNextSong}
              >
              Next
            </button>
          </div>
        </div>
        )}
      </section>
    );
};