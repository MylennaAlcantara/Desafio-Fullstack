import { SafeAreaView, View, StyleSheet, Text, Image } from "react-native"

export const Footer = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>by Mylenna Alcantara | 2023</Text>
            <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Text style={styles.text}>Email: </Text>
                <Text style={{color: "#CCC"}}>mylenna.a.a.corinthiana@gmail.com</Text>
            </View>
            <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Text style={styles.text}>Whatsapp: </Text>
                <Text style={{color: "#CCC"}}>(81) 9 9359-0099</Text>
            </View>
            <View style={styles.icones}>
                <Image source={require("../../../public/images/icones/instagram_icon.png")} style={styles.ico}/>
                <Image source={require("../../../public/images/icones/github_icon.png")} style={styles.ico}/>
                <Image source={require("../../../public/images/icones/linkedin_icon.png")} style={styles.ico}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: "100%",
        backgroundColor: "#1a1a1a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    icones: {
        display: "flex",
        flexDirection: "row"
    },
    ico: {
        height: 30,
        width: 30,
        margin: 5
    },
    text: {
        color: "#555555",
        fontWeight: "bold",
        margin: 5
    }
})