import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native'
import { connect } from 'react-redux'
import { addCardToDeck } from '../../redux/actions/shared'
import { Icon } from 'react-native-elements'

export default class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.actionHandler = this.actionHandler.bind(this)
  }

  static navigationOptions = {
    title: 'Add Question',
  };

  async componentDidMount(){
    this.animation.play()
    this.animation.play(30, 120)
  }

  actionHandler(deck, question, answer){
    deck.questions = deck.questions.concat({question, answer})
    // console.log('ADDQUESTION: ', deck)
    addCardToDeck(deck)
    this.props.pageHandler('home')
  }

  changeHandler(txt){
    this.setState({
      text: txt
    })
  }

  textCleaner(txt){
    return txt.replace(/[^\w\s]/gi, '')
  }

  render() {
    let { deck } = this.props
    let { question, answer } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>

          <TouchableOpacity style={[{ justifyContent: 'center', width: 30, height: 34, margin: 20 }]}  onPress={() => this.props.pageHandler('deck', deck)}>
            <Icon
              name='arrow-back'
              type='material'
              color='#24292e'
              size={24}
            />
          </TouchableOpacity>

          <View style={{ flex: 1, height: 60 }}>
            <View style={{ flex: 1 }}>
              <LottieView
                ref={animation => {
                  this.animation = animation
                }}
                source={require('../../assets/lottie/topBounceAlt2.json')}
              />
            </View>
          </View>

          <TouchableOpacity style={[{ justifyContent: 'center', width: 30, height: 34, margin: 20 }]}  onPress={() => this.props.pageHandler('home')}>
            <Icon
              name='home'
              type='material'
              color='#24292e'
              size={24}
            />
          </TouchableOpacity>

        </View>

          <Text style={{ fontSize: 30, marginBottom: 20 }}>Add a new question!</Text>
          <TextInput
            style={styles.input}
            onChangeText={(question) => this.setState({question})}
            placeholder='Enter Question'
            value={this.state.question}
          />

          <TextInput
            style={styles.input}
            onChangeText={(answer) => this.setState({answer})}
            placeholder='Enter Answer'
            value={this.state.answer}
          />

          <Button
            title='+ Add to Deck'
            onPress={() => this.actionHandler(deck, question, answer)}
            color='#7caee3'
          ></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  input: {
    borderBottomWidth: 2,
    borderColor: 'pink',
    borderStyle: 'solid',
    height: 40,
    marginBottom: 20
  },
  card: {
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: { height: 3, width: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    borderRadius: 4,
    borderColor: '#24292e',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 10,
    width: 300,
    height: 150,
    flex: 1,
    justifyContent: 'center'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 50,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
