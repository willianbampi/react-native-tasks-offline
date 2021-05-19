import { AppRegistry } from 'react-native'
import ListTask from './src/screens/ListTask'
import { name as appName } from './app.json'

AppRegistry.registerComponent(
    appName,
    () => ListTask
)