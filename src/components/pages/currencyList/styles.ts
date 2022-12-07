import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    bottom: 80,
  },
  headerRow: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    alignItems: 'center',
    marginTop: 10,
  },
  base: {
    color: 'whitesmoke',
    fontSize: 23,
  },
  baseResult: {
    color: 'whitesmoke',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  amountData: {
    color: 'whitesmoke',
    paddingHorizontal: 10,
    fontSize: 23,
  },
});
