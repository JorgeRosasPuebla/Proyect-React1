import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 3,
    padding: 5,
    borderWidth: 3,
    backgroundColor: "#DAD1CF",
  },
  firstModule: {
    margin: 3,
    padding: 50,
    borderWidth: 3,
  },
  secontModule: {
    margin: 3,
    padding: 5,
    borderWidth: 3,
    alignItems: 'center',
  },
  thirdModule: {
    flex: 1,
    margin: 3,
    padding: 5,
    borderWidth: 3,
  },
  innerModule: {
    justifyContent: "space-around",
    flexDirection: "row",
    margin: 5,
    padding: 5,
    borderWidth: 3,
    width: 350,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    fontSize: 16,
    backgroundColor: "white",
    width: 350,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic',
  },
  containerHome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  boxHome: {
    width: "100%",
    height: 200,
    borderWidth: 2,
    borderColor: 'blue',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    marginBottom: 4,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 4,
  },
  innerBoxHome: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
});
