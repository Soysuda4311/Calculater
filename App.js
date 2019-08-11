import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: ' ',
      op: ' ',
      op2: ' ',
      a: ' ',
      b: ' ',
      ans: '0',
    };
  }

  input(num) {
    switch (num) {
      case '1':
        this.setState({ a: this.state.a + '1' });
        this.setState({ ans: this.state.a + '1' });
        break;

      case '2':
        this.setState({ a: this.state.a + '2' });
        this.setState({ ans: this.state.a + '2' });
        break;

      case '3':
        this.setState({ a: this.state.a + '3' });
        this.setState({ ans: this.state.a + '3' });
        break;

      case '4':
        this.setState({ a: this.state.a + '4' });
        this.setState({ ans: this.state.a + '4' });
        break;

      case '5':
        this.setState({ a: this.state.a + '5' });
        this.setState({ ans: this.state.a + '5' });
        break;

      case '6':
        this.setState({ a: this.state.a + '6' });
        this.setState({ ans: this.state.a + '6' });
        break;

      case '7':
        this.setState({ a: this.state.a + '7' });
        this.setState({ ans: this.state.a + '7' });
        break;

      case '8':
        this.setState({ a: this.state.a + '8' });
        this.setState({ ans: this.state.a + '8' });
        break;

      case '9':
        this.setState({ a: this.state.a + '9' });
        this.setState({ ans: this.state.a + '9' });
        break;

      case '0':
        this.setState({ a: this.state.a + '0' });
        this.setState({ ans: this.state.a + '0' });
        break;

      case '.':
        this.setState({ a: this.state.a + '.' });
        this.setState({ ans: this.state.a + '.' });
        break;
    }
  }

  clear() {
    this.setState({ ans: '0', a: ' ', b: ' ' });
  }

  operation(op) {
    if (op == '=') {
      switch (this.state.op2) {
        case '+':
          this.setState({ a: Number(this.state.b) + Number(this.state.a) });
          this.setState({ ans: Number(this.state.b) + Number(this.state.a) });
          break;

        case '-':
          this.setState({ a: Number(this.state.b) - Number(this.state.a) });
          this.setState({ ans: Number(this.state.b) - Number(this.state.a) });
          break;

        case '*':
          this.setState({ a: Number(this.state.b) * Number(this.state.a) });
          this.setState({ ans: Number(this.state.b) * Number(this.state.a) });
          break;

        case '/':
          this.setState({ a: Number(this.state.b) / Number(this.state.a) });
          this.setState({ ans: Number(this.state.b) / Number(this.state.a) });
          break;
      }
    } else {
      this.setState({ b: this.state.a });
      this.setState({ a: ' ' });
      this.setState({ op2: op });
    }
  }

  render() {
    return (
      <LinearGradient
        colors={['#000000', '#000000', '#000000']}
        style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }} />

          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.container5}>{this.state.ans}</Text>
          </View>

          <View
            style={{
              flex: 1.1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.container4}
              onPress={() => this.clear()}>
              <Text style={styles.text2}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container4}>
              <Text style={styles.text2}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container4}>
              <Text style={styles.text2}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container3}
              onPress={() => this.operation('/')}>
              <Text style={styles.text}>/</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1.1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.container}
              onPress={() => this.input('7')}>
              <Text style={styles.text}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container}
              onPress={() => this.input('8')}>
              <Text style={styles.text}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container}
              onPress={() => this.input('9')}>
              <Text style={styles.text}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container3}
              onPress={() => this.operation('*')}>
              <Text style={styles.text}>x</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1.1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.container}
              onPress={() => this.input('4')}>
              <Text style={styles.text}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container}
              onPress={() => this.input('5')}>
              <Text style={styles.text}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container}
              onPress={() => this.input('6')}>
              <Text style={styles.text}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container3}
              onPress={() => this.operation('-')}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1.1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.container}
              onPress={() => this.input('1')}>
              <Text style={styles.text}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container}
              onPress={() => this.input('2')}>
              <Text style={styles.text}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container}
              onPress={() => this.input('3')}>
              <Text style={styles.text}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container3}
              onPress={() => this.operation('+')}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1.1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.container2}
              onPress={() => this.input('0')}>
              <Text style={styles.text}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container}
              onPress={() => this.input('.')}>
              <Text style={styles.text}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container3}
              onPress={() => this.operation('=')}>
              <Text style={styles.text}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 25,
  },

  text2: {
    color: 'black',
    fontSize: 25,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
    borderRadius: 100,
    height: 60,
    padding: 8,
    margin: 9,
  },

  container2: {
    flex: 2.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
    borderRadius: 100,
    height: 60,
    padding: 8,
    margin: 9,
  },

  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500',
    borderRadius: 100,
    height: 60,
    padding: 8,
    margin: 9,
  },

  container4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEBEBE',
    borderRadius: 100,
    height: 60,
    padding: 8,
    margin: 9,
  },

  container5: {
    flex: 1,
    backgroundColor: '#000000',
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
});
