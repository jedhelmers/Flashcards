let decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      },
      {
        question: 'What are the features of React? I',
        answer: 'It uses the virtual DOM instead of the real DOM'
      },
      {
        question: 'What are the features of React? II',
        answer: 'It uses server-side rendering'
      },
      {
        question: 'What are the features of React? III',
        answer: 'It follows uni-directional data flow or data binding'
      },
      {
        question: 'What are some major advantages of React? I',
        answer: 'It increases the application’s performance'
      },
      {
        question: 'What are some major advantages of React? II',
        answer: 'It can be conveniently used on the client as well as server side'
      },
      {
        question: 'What are some major advantages of React? III',
        answer: 'Because of JSX, code’s readability increases'
      },
      {
        question: 'What are some major advantages of React? IV',
        answer: 'React is easy to integrate with other frameworks like Meteor, Angular, etc'
      },
      {
        question: 'What are some major advantages of React? V',
        answer: 'Using React, writing UI test cases become extremely easy'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  CPP: {
    title: 'C++',
    questions: []
  }
}

let score = {
  React: {
    correct: 0,
    incorrect: 0
  },
  JavaScript: {
    correct: 0,
    incorrect: 0
  },
  CPP: {
    correct: 0,
    incorrect: 0
  },
}

function formatDeck({ key, title, questions = [] }){
  return {
    [key]: {
      title: title,
      questions: questions
    }
  }
}

export function getScore(key, answer){
  return new Promise((res, rej) => {
    if(answer){
      decks[key].correct++
    } else {
      decks[key].incorrect++
    }
    setTimeout(() => res(decks[key]), 1000)
  })
}

export function getInitialData(){
  return Promise.all([_getDecks()])
  .then(([decks]) => ({decks}))
}


export function _getDecks(){
  return new Promise((res, rej) => {
    setTimeout(() => res({...decks}), 1000)
  })
}

export function _addDeck({ key, title }){
  return new Promise((res, rej) => {
    const formattedDeck = formatDeck({ key, title })

    setTimeout(() => {
      decks = {
        ...decks,
        formattedDeck
      }

      res(formattedDeck)
    }, 1000)
  })
}

export function addDeck(deck){
  return _addDeck(deck)
}

export function _addCard(deck){
  return new Promise((res, rej) => {
    setTimeout(() => {
      deck
    })
  })
}

export function addCard(deck){
  return _addCard(deck)
}

export function _answerQuestion(deck){
  return new Promise((res, rej) => {
    setTimeout(() => {
      deck
    })
  })
}

export function answerQuestion(deck){
  return _answerQuestion(deck)
}

export function resetDeck(deck){
  console.log('SAMPLEDATA: ', deck)
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(deck.questions.map(question => question.correct = null))
    })
  }, 1000)
}
