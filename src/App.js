import React, { useState, useEffect } from "react";
import Title from "./components/Title.js";
import "./App.css";
import Card from "./components/Card.js";
import Footer from "./components/Footer.js";
import images from "./image.js";
import Header from "./components/Header.js";

function App() {
  const [photoItem, setphotoItem] = useState(images);
  const [counter, appCounter] = useState(0);
  const [msg, appMsg] = useState({ message: "Displays your guesses here!" });
  const [highscore, sethighscore] = useState(0);

  useEffect(() => {
    return () => {
    };
  }, [counter]);
  
  const appArr = arr => {
    return arr.map(element => {
      element.clicked = false;
      return element;
    });
  };

  function mixUp(arr) {
    let tally = arr.length;
    let temp;
    let index;
   
    while (tally > 0) {
      index = Math.floor(Math.random() * tally);
      tally--;
      temp = arr[tally];
      arr[tally] = arr[index];
      arr[index] = temp;
    }
    return arr;
  }
  const clickTracker = id => {
    for (let i = 0; i < photoItem.length; i++) {
      if (photoItem[i].id == id) {
        if (photoItem[i].clicked == false) {
          photoItem[i].clicked = true;
          appCounter(counter + 1);
          if (counter >= highscore) {
            sethighscore(highscore + 1);
          }
          appMsg({ message: "You selected correctly..!" });
          setphotoItem(mixUp(photoItem));
          break;
        } else {
          if (counter > highscore) {
            sethighscore(counter);
          }
          appCounter(0);
          setphotoItem(appArr(photoItem));
          appMsg({ message: "You selected incorrectly..!" });
        }
      }
    }
  };

  return (
    <div>
      <Header message={msg.message} score={counter} highscore={highscore} />
      <Title />
      <Card cards={photoItem} ClickCount={clickTracker} />
      <Footer />
    </div>
  );
};

export default App;
