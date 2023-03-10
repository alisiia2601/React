import React, { useState } from 'react'
import science from './assets/computer.png'
import science2 from './assets/science2.jpg'
import styling from './assets/styling.jpg'
import './App.css'

function getActiveClassName (activeArticle, currentArticle) {
  if (activeArticle ===  currentArticle) {
    return 'show-article'
  } else {
    return 'hide-article'
  }
}

function App() {
  const [activeArticle, setActiveArticle] = useState('First Article')

  return (
    <>
      <article className={`active ${getActiveClassName(activeArticle, 'First Article')}`} >
      <h1>About Me</h1>
        <p>As a front-end developer, I responsible for designing, implementing, and maintaining user. It involves the creation of HTML, CSS, and JavaScript code to define the look, layout, and behavior of a website. My goal is to make websites and web applications fast, interactive, and easy to use for users.</p>
        <img className='science' src={science} alt="" />
        <p>As a frontend developer, I need to stay up-to-date with the latest technologies and industry trends, have strong problem-solving skills, and be able to communicate effectively with both technical and non-technical team members.</p>
      </article>
      <article className={`active ${getActiveClassName(activeArticle, '2nd Article')}`} >
        <h1>Idea</h1>
        <p>Random number generator: flip a coin or like a dice (1-6).</p>
        <img className='science2' src={science2} alt="" />
        <p>Sound interesting and as a good experience to check my knowledges.</p>
      </article>
      <article className={`active ${getActiveClassName(activeArticle, '3d Article')}`} >
        <h1>Styling</h1>
        <p>Probably as a website</p>
        <img className='styling' src={styling} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque nunc, lacinia non sollicitudin ut, congue lobortis nibh. Vivamus interdum elit ac consequat luctus. Etiam a turpis in turpis sagittis dignissim ornare ut tellus. Mauris et accumsan elit. Fusce scelerisque leo a erat tristique, in ornare mauris mollis. Donec hendrerit turpis eleifend vulputate eleifend. Maecenas pretium quis purus vitae luctus.</p>
      </article>

      
  
      <div className='article'>
        <button onClick={() => {
          setActiveArticle((a) => {
            if (a === 'First Article') {
              return '2nd Article'
            } else if(a != '2nd Article') {
              return 'First Article'
            } else {
              return '3d Article'
            }
          })
        }}>Tap here to see more</button>
      </div>
    </>
  )
}

export default App