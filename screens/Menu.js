import * as React from 'react';
import { View, Text , Button} from 'react-native';
import TopBar from "../components/TopBar";

export default function Menu({navigation}){
    return (
        <>
      <TopBar />

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <Text>Menu!</Text>
          <Button 
          onPress={() => navigation.toggleDrawer()}
          >Menu</Button>
        </View>
        </>
      );
}