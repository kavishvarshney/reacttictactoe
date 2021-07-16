import React, { useState } from 'react';
import Icons from './Icons';
//importing toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//importing reactstrap
import { Button, Container, Card, CardBody, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
//importing own styles
import './style.css';

const tictacArray = new Array(9).fill('');
const App = () => {
  let [isCross, setIsCross] = useState(true);
  let [winMessage, setWinMessage] = useState('');

  //reset the game for a new one
  const playAgain = () => {
    setIsCross(true);
    setWinMessage('');
    tictacArray.fill('');
  };

  //checking for the winner
  const findWinner = () => {
    if (
      tictacArray[0] === tictacArray[1] &&
      tictacArray[0] === tictacArray[2] &&
      tictacArray[0] !== ''
    ) {
      setWinMessage(tictacArray[0] + ' has won!');
    } else if (
      tictacArray[3] === tictacArray[4] &&
      tictacArray[3] === tictacArray[5] &&
      tictacArray[3] !== ''
    ) {
      setWinMessage(tictacArray[3] + ' has won!');
    } else if (
      tictacArray[6] === tictacArray[7] &&
      tictacArray[6] === tictacArray[8] &&
      tictacArray[6] !== ''
    ) {
      setWinMessage(tictacArray[6] + ' has won!');
    } else if (
      tictacArray[0] === tictacArray[3] &&
      tictacArray[0] === tictacArray[6] &&
      tictacArray[0] !== ''
    ) {
      setWinMessage(tictacArray[0] + ' has won!');
    } else if (
      tictacArray[1] === tictacArray[4] &&
      tictacArray[1] === tictacArray[7] &&
      tictacArray[1] !== ''
    ) {
      setWinMessage(tictacArray[1] + ' has won!');
    } else if (
      tictacArray[2] === tictacArray[5] &&
      tictacArray[2] === tictacArray[8] &&
      tictacArray[2] !== ''
    ) {
      setWinMessage(tictacArray[2] + ' has won!');
    } else if (
      tictacArray[0] === tictacArray[4] &&
      tictacArray[0] === tictacArray[8] &&
      tictacArray[0] !== ''
    ) {
      setWinMessage(tictacArray[0] + ' has won!');
    } else if (
      tictacArray[2] === tictacArray[4] &&
      tictacArray[2] === tictacArray[6] &&
      tictacArray[2] !== ''
    ) {
      setWinMessage(tictacArray[2] + ' has won!');
    } else if (
      tictacArray[0] !== '' &&
      tictacArray[1] !== '' &&
      tictacArray[2] !== '' &&
      tictacArray[3] !== '' &&
      tictacArray[4] !== '' &&
      tictacArray[5] !== '' &&
      tictacArray[6] !== '' &&
      tictacArray[7] !== '' &&
      tictacArray[8] !== ''
    ) {
      setWinMessage('the game is drawn!!!');
    }
  };

  //changing item on the board
  const changeItem = (index) => {
    if (winMessage) {
      return toast('The game is over!! please start a new game..', {
        type: 'success',
      });
    }
    if (tictacArray[index] === '') {
      tictacArray[index] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return toast('place is already filled please select another', {
        type: 'error',
      });
    }
    findWinner();
  };

  //main game logic
  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center"></ToastContainer>
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div>
              <h1 className="text-center">{winMessage}</h1>
              <Button onClick={playAgain}>Play Again</Button>
            </div>
          ) : (
            <h1>{isCross ? "cross's Turn" : "circle's Turn"}</h1>
          )}
          <div className="grid">
            {tictacArray.map((value, index) => (
              <Card onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icons choice={tictacArray[index]} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
