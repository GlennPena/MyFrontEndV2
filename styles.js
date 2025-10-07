import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header: {
        fontSize: 28,            
        fontWeight: '700',        
        color: '#333333',        
        marginBottom: 20,         
        textAlign: 'center',      
        paddingTop: 10,           
    },

    button: {
        backgroundColor: '#fff',
        paddingVertical: 12, 
        paddingHorizontal: 100,
        borderRadius: 8,
    },

    container: { 
        flex: 1,
        justifyContent: 'center', 
        padding: 20, 
        backgroundColor: '#72bfd6ff'
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: "#fff",
    },

    text: {
        textAlign: 'center',
        fontSize: 20,
        margin: 15,
        color: '#333',
        fontFamily: 'Arial',
    },

    card: {
        backgroundColor: "#d9f6ffff",
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        width: '25%',
        alignSelf: 'center',
        justifyContent: 'center',
    },

    homeCard: {
        backgroundColor: "#d9f6ffff",   // you can remove the 'ff' since it's full opacity
        padding: 20,
        marginVertical: 10,
        borderRadius: 12,
        width: '55%',
        alignSelf: 'center',
    },
});