import { AppRegistry, UIManager  } from 'react-native';
import App from './src/app';

UIManager.setLayoutAnimationEnabledExperimental(true); // Ainakin animointia varten tarvitsee
AppRegistry.registerComponent('tech_stack', () => App);
