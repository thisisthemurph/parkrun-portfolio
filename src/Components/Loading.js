import React from 'react';
import './Loading.scss';

const loadingGifs = [
  "https://giphy.com/embed/l2Sqc3POpzkj5r8SQ",
  "https://giphy.com/embed/CUHXyh3yXr9kI",
  "https://giphy.com/embed/HNJHYpKqtuqRy",
  "https://giphy.com/embed/5lLQ4I8vQYxJm",
  "https://giphy.com/embed/2y77qqREIzrQk",
  "https://giphy.com/embed/NRkK2XCXPd2Du",
  "https://giphy.com/embed/yOZ5hsdLjAp8Y",
  "https://giphy.com/embed/3oEjHW0rhhhVopXFVm",
  "https://giphy.com/embed/l0MYyrLWpUM3YQSqs"
]

function Loading() {
  return (
    <div className='Loading'>
      <p>Just <span>running</span> that for you...</p>
      <div className='Loading-gif'>
        {getRandomGif()}
      </div>
      <p>This can take some time, depending on how busy you've been!</p>
    </div>
  );
}

const getRandomGif = () => {
  const r = Math.floor(Math.random() * loadingGifs.length)
  const url = loadingGifs[r]
  return <iframe title='Loading' src={url} width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
}

export default Loading;
