import React from 'react'
import { View, StyleSheet } from 'react-native'
import  {
  BarChart
} from 'react-native-interactive-charts'

const App = () => {

  return (
    <View style={styles.container}>
      <BarChart
        data={[
          { label: 'one', value: 100 },
          { label: 'two', value: 200 },
          { label: 'Three', value: 300 },
          { label: 'four', value: 400 },
          { label: 'five', value: 500 },
          { label: 'six', value: 600 },
          { label: 'seven', value: 700 },
          { label: 'eight', value: 800 },
          { label: 'nine', value: 900 }
        ]}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
