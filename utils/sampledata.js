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

function formatDeck({ key, title, questions = [] }){
  return {
    [key]: {
      title: title,
      questions: questions
    }
  }
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
