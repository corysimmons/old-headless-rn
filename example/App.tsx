import { StyleSheet, Text, View } from 'react-native';

import * as HeadlessRn from 'headless-rn';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{HeadlessRn.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
