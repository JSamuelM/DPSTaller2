import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    color: '#000000',
    justifyContent: 'center',
    flex: 1,
  },
  content: {
    width: '80%',
  },
  text: {
    textAlign: 'center',
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 15,
  },
  form: {marginVertical: 15},
  label: {
    color: '#000',
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    height: 40,
    padding: 10,
    marginBottom: 15,
  },
  result: {
    display: 'flex',
    flexDirection: 'row',
  },
  textResult: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  total: {
    color: 'red',
  },
});
