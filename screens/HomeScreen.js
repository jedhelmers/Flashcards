import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux'
import Question from './homepages/Question'
import Deck from './homepages/Deck'
import AddQuestion from './homepages/AddQuestion'
import Home from './homepages/Home'

class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 'home',
      deck: {}
    }

    this.pageHandler = this.pageHandler.bind(this)
  }

  static navigationOptions = {
    header: null,
  }

  pageHandler(page, deck = {}){
    this.setState({
      page: page,
      deck: deck
    })
  }

  async componentDidMount(){

    this.setState({
      page: 'home',
      deck: {}
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    // console.log('HOMESCREEN 1: ', prevProps )
    // console.log('HOMESCREEN 2: ', prevState )
    // console.log('HOMESCREEN 3: ', snapshot )

    let { navigation, decks } = this.props
    let itemId = navigation.getParam('deck', 'NO-DECK');

    if(typeof decks[itemId] !== 'undefined' && itemId !== 'NO-DECK' && decks[itemId] !== this.state.deck ){
      // this.pageHandler('deck', decks[itemId])
      this.setState({
        page: 'deck',
        deck: decks[itemId]
      })
    }

    // console.log('HOMESCREEN: ', itemId)
  }

  render() {
    let { decks, navigation } = this.props
    let { page, deck } = this.state
    let itemId = navigation.getParam('deck', 'NO-DECK');

    console.log('PROPS: ', decks[itemId])

    return (
      <React.Fragment>
        {page === 'home' && (
          <Home decks={decks} pageHandler={this.pageHandler}/>
        )}
        {page === 'question' && (
          <Question deck={deck} pageHandler={this.pageHandler}/>
        )}
        {page === 'deck' && (
          <Deck deck={deck} pageHandler={this.pageHandler}/>
        )}
        {page === 'addQuestion' && (
          <AddQuestion deck={deck} pageHandler={this.pageHandler}/>
        )}
      </React.Fragment>
    )
  }
}


function mapStateToProps({decks}){
  return {
    decks
  }
}

export default connect(mapStateToProps)(HomeScreen)
