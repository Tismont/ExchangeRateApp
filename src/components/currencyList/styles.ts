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
  column: {
    justifyContent: 'space-around',
  },
  headerContainer: {
    alignItems: 'center',
    bottom: 80,
  },
  base: {
    color: 'whitesmoke',
    fontSize: 23,
  },
  baseContent: {
    color: 'whitesmoke',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  amountDateContainer: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    alignItems: 'center',
    marginTop: 10,
  },
  amountDataText: {
    color: 'whitesmoke',
    paddingHorizontal: 10,
    fontSize: 23,
  },
  itemContainer: {
    width: 100,
    height: 42,
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    margin: 10,
  },
  itemText: {
    alignContent: 'center',
  },
});
