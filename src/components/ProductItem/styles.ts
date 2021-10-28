import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        overflow: "hidden",
        alignItems:"center"
    },
    rightContainer: {
        padding: 10,
        width: 230,
    },
    image:{
        width: 120,
        height: 145,
        resizeMode:"contain"
    },
    rating:{
        flexDirection:"row",
        marginVertical: 10,
        alignItems: "center"
    },
    price:{
        fontSize: 18
    },
    oldPrice:{
        fontSize: 12,
        textDecorationLine: "line-through",
        marginHorizontal: 5
    }
})

export default styles;