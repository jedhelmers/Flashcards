import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';
import LottieView from 'lottie-react-native'
import { answerQuestionHandler } from '../../redux/actions/shared'
import { getScoreHandler } from '../../redux/actions/shared'
import { Icon } from 'react-native-elements'

export default class Question extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cardFlipped: [],
      index: 0
    }

    this.flipHandler = this.flipHandler.bind(this)
    this.indexHandler = this.indexHandler.bind(this)
  }

  flipHandler(index){
    let newArry = this.state.cardFlipped
    newArry[index] = !newArry[index]

    this.setState({
      cardFlipped: newArry
    })
  }

  static navigationOptions = {
    title: 'Links',
  }

  static navigationOptions = {
    header: null,
  }

  indexHandler(){
      this.setState({
        index: this.state.index + 1
      })
  }

  actionHandler(deck, index, correct){
    // deck.questions[index] = deck.questions[index].push({ correct: correct })
    // console.log('QUESTION: ', )
    answerQuestionHandler(Object.assign(deck.questions[index], { correct: correct }))
    // getScoreHandler('React', true)
    this.flipHandler(index)
    this.flipHandler(index)
    // this.props.pageHandler('home', deck)
  }

  async componentDidMount(){
    this.animation.play()
    this.animation.play(30, 120)

    let cardCnt = this.props.deck.questions.map(q => false)

    this.setState({
      cardFlipped: cardCnt
    })
  }

  render() {
    let { deck } = this.props
    let { cardFlipped, index } = this.state
    // console.log('QUESTION: ', cardFlipped)

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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
              <View style={{ flex: 1, flexDirection: 'row' }}>
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

          <View style={styles.getStartedContainer}>
            {
              typeof cardFlipped[index] !== 'undefined' ? (
                !cardFlipped[index] ? (
                  <TouchableOpacity key={index} style={[styles.card, typeof deck.questions[index].correct !== 'undefined' && ( deck.questions[index].correct ? styles.rightBorder : styles.wrongBorder ), styles.cardBlack]} onPress={() => this.flipHandler(index)}>
                    <View style={{ height: 40, flexDirection: 'row', justifyContent: 'flex-end', padding: 10 }}>
                      <Icon
                        name='sync'
                        type='material'
                        color='white'
                        size={24}
                      />
                    </View>
                    <Text style={{ flex: 1, color: '#fff', textAlign: 'center', fontSize: 24 }}>{deck.questions[index].question}</Text>
                  </TouchableOpacity>
                ) : (
                  <React.Fragment>
                    <TouchableOpacity key={index} style={[styles.card]} onPress={() => this.flipHandler(index)}>
                      <View style={{ justifyContent: 'space-between', flex: 1 }}>
                      {typeof deck.questions[index].correct !== 'undefined' && (
                        <View style={deck.questions[index].correct ? styles.right : styles.wrong}><Text style={{ color: 'white' }}>{deck.questions[index].correct ? 'Correct!' : 'Wrong!'}</Text></View>
                      )}
                      <View style={{ height: 40, flexDirection: 'row', justifyContent: 'flex-end', padding: 10 }}>
                        <Icon
                          name='sync'
                          type='material'
                          color='#24292e'
                          size={24}
                        />
                      </View>
                      <View style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center', paddingLeft: 10, flex: 1 }}>
                        <Text style={{ color: '#24292e', fontSize: 24 }}>{deck.questions[index].answer}</Text>
                      </View>
                      {typeof deck.questions[index].correct === 'undefined' && (
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                          <Button
                            title='Right?'
                            onPress={() => this.actionHandler(deck, index, true)}
                            color='#63b72b'
                          ></Button>
                          <Button
                            title='Wrong?'
                            onPress={() => this.actionHandler(deck, index, false)}
                            color='#cc0000'
                          ></Button>
                        </View>
                      )}
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.indexHandler()}>
                      <Text>{index === deck.questions.length - 1 ? 'Results' : 'Next'}</Text>
                    </TouchableOpacity>
                  </React.Fragment>
                )
              ) : (
                <React.Fragment>
                  <Text style={{ fontSize: 30, marginBottom: 20 }}>Results</Text>
                  {deck.questions.map((d, i) => (
                      <TouchableOpacity key={i} style={[styles.card]} onPress={() => this.flipHandler(i)}>
                        <View style={{ justifyContent: 'space-between', flex: 1 }}>
                        {typeof d.correct !== 'undefined' && (
                          <View style={d.correct ? styles.right : styles.wrong}><Text style={{ color: 'white' }}>{d.correct ? 'Correct!' : 'Wrong!'}</Text></View>
                        )}
                        <View style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center', paddingLeft: 10, flex: 1 }}>
                          <Text style={{ color: '#24292e', fontSize: 24 }}>{d.answer}</Text>
                        </View>

                        </View>
                      </TouchableOpacity>
                  ))}
                </React.Fragment>
              )
          }

          </View>



        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: { height: 3, width: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    borderRadius: 4,
    borderColor: '#7caee3',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 10,
    width: 300,
    minHeight: 150,
    flex: 1,
    justifyContent: 'center'
  },
  cardBlack: {
    backgroundColor: '#24292e'
  },
  right: {
    backgroundColor: '#63b72b',
    height: 36,
    justifyContent: 'space-between',
    width: '100%',
    justifyContent: 'center'
  },
  wrong: {
    backgroundColor: '#cc0000',
    height: 36,
    justifyContent: 'space-between',
    width: '100%',
    justifyContent: 'center'
  },
  rightBorder: {
    borderColor: '#63b72b',
    borderWidth: 4
  },
  wrongBorder: {
    borderColor: '#cc0000',
    borderWidth: 4
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
    marginBottom: 20,
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
