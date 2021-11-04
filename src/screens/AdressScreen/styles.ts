import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet .create({
    container:{ padding: 10, width: WIDTH, },
    picker:{ backgroundColor:"#bcbcbc", },
    row:{ marginVertical: 10 },
    input:{
        backgroundColor: "white", 
        padding: 5, 
        marginVertical: 5,
        borderColor:"black",
        borderRadius: 3,
        borderWidth: 0.5
    },
})

export default styles;