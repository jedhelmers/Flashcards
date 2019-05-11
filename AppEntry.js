import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { connect } from 'react-redux'
import { handleInitialData } from './redux/actions/shared'
import AppNavigator from './navigation/AppNavigator';
import LottieView from 'lottie-react-native'

class AppEntry extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  async componentDidMount(){
    this.props.handleInitialData()
    this.animation.play()
    this.animation.play(30, 120)
    this._loadResourcesAsync()

    setTimeout(function() {
      this.setState({
        isLoadingComplete: true
      })
    }.bind(this), 2000)
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      let decks = Object.keys(this.props.decks)
      console.log('APPENTRY: ', decks)

      return (
        <View style={styles.container}>
          <View style={styles.inner}>
            <LottieView
              ref={animation => {
                this.animation = animation
              }}
              source={require('./assets/lottie/qa.json')}
            />
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator/>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ])
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24292e',
  },
  inner: {
    flex: 1,
    margin: 60
  }
})

function mapStateToProps({decks}){
  return {
    decks
  }
}

export default connect(mapStateToProps,{handleInitialData})(AppEntry)
