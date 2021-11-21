
import React ,{useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, SafeAreaView, Image, ScrollView , FlatList} from 'react-native';




function Home ({navigation}) {

    const [recipe, setRecipe] = useState([
        {id: 1, title: 'Apple Crumble' , ingredients: 'Apple,Flour,Sugar,Eggs' , steps:'Step 1.Lorem Ipsum faieha aijdafaih asdihausdhasid aiduhaiuhasicasc'},
        {id: 2, title: 'Chicken Rice', ingredients: 'Rice,Chicken,Cucumber,Water' , steps:'Step 1.Lorem Ipsum faieha aijdafaih asdihausdhasid aiduhaiuhasicasc'},
        {id: 3, title: 'Bacon and Eggs', ingredients: 'Bacon,Eggs' , steps:'Step 1.Lorem Ipsum faieha aijdafaih asdihausdhasid aiduhaiuhasicasc'},
        {id: 4, title: 'Curry Puffs', ingredients: 'Curry,Flour,Eggs,Chicken' , steps:'Step 1.Lorem Ipsum faieha aijdafaih asdihausdhasid aiduhaiuhasicasc'},
        {id: 5, title: 'Hokkien Mee', ingredients: 'Hokkien Person,Noodles,Egg' , steps:'Step 1.Lorem Ipsum faieha aijdafaih asdihausdhasid aiduhaiuhasicasc'},
        {id: 6, title: 'Steak and Mash', ingredients: 'Beef Steak, Potatoes, Salt, Pepper' , steps:'Step 1.Lorem Ipsum faieha aijdafaih asdihausdhasid aiduhaiuhasicasc'},
    ]);
    
    

    

    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList 
                data = {recipe}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=> navigation.navigate(`Details`,item)}>
                        
                            <Text style={styles.cardStyle}>{item.title}</Text>
                        
                        
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    ) 
}
const styles = {
    cardStyle: {
        width: 300,
        height: 300,
        backgroundColor: "gray",
        borderRadius: 10,
        

        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        margin: 20,

        
    }
}
export default Home;