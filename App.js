import React from 'react';
import scan from './Screens/scan';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
render(){
  return(
    <AppContainer/>
  )

}
}
const TabNavigator = createBottomTabNavigator({
  Read:{screen : scan}
})

const AppContainer  = createAppContainer