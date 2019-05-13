import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import LottieView from 'lottie-react-native'
import { answerQuestionHandler } from '../../redux/actions/shared'

export default class Question extends React.Component {
  static navigationOptions = {
    title: 'Links',
  }

  static navigationOptions = {
    header: null,
  }

  actionHandler(deck, index, correct){
    // deck.questions[index] = deck.questions[index].push({ correct: correct })
    console.log('QUESTION: ', Object.assign(deck.questions[index], { correct: correct }))
    answerQuestionHandler(deck)
    this.props.pageHandler('home', deck)
  }

  async componentDidMount(){
    this.animation.play()
    this.animation.play(30, 120)
  }

  render() {
    let { deck } = this.props
    console.log('QUESTION: ', deck)

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <View style={{ width: 300, height: 60 }}>
              <View style={{ flex: 1 }}>
                <LottieView
                  ref={animation => {
                    this.animation = animation
                  }}
                  source={require('../../assets/lottie/topBounceAlt.json')}
                />
              </View>
            </View>
          </View>

          <View style={styles.getStartedContainer}>
            {deck.questions.map((d, i) => (
              <TouchableOpacity key={i} style={[styles.card]} onPress={() => this.actionHandler(deck, i, true)}>
                {typeof d.correct !== 'undefined' && (
                  <View style={d.correct ? styles.right : styles.wrong}><Text style={{ color: 'white' }}>{d.correct ? 'Correct!' : 'Wrong!'}</Text></View>
                )}
                <Text style={{ color: '#24292e', textAlign: 'center', fontSize: 24 }}>{d.question}</Text>
              </TouchableOpacity>
            ))}

          </View>



        </ScrollView>
      </View>
    );
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
    height: 150,
    flex: 1,
    justifyContent: 'center'
  },
  right: {
    backgroundColor: '#63b72b',
    position: 'absolute',
    top: 0,
    height: 36,
    width: '100%',
    justifyContent: 'center'
  },
  wrong: {
    backgroundColor: '#cc0000',
    position: 'absolute',
    top: 0,
    height: 36,
    width: '100%',
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
