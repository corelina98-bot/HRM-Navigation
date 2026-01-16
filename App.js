import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, SectionList} from 'react-native';
import {
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@react-navigation/elements';


function WelcomeScreen() {
  const navigation = useNavigation();

  React.useEffect(() => {
    console.log('WelcomeScreen mounted');
    return () => console.log('WelcomeScreen unmounted');
  }, []);

  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.header}>Welcome to HRM Company</Text>
      
      <Image
        source={{ uri: 'https://img.freepik.com/premium-vector/hrm-human-resource-management-icon-linear-design_116137-7757.jpg?w=740' }}
        style={styles.logo}
      />
      <Button onPress={() => navigation.navigate('Login')}>Get Started</Button>
    </View>
  );
}

function LoginScreen() {
  const navigation = useNavigation();

  React.useEffect(() => {
    console.log('LoginScreen mounted');
    return () => console.log('LoginScreen unmounted');
  }, []);

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.header}>HRM Company</Text>
      <Image
        source={{ uri: 'https://img.freepik.com/premium-vector/hrm-human-resource-management-icon-linear-design_116137-7757.jpg?w=740' }}
        style={styles.logo}
      />
      <TextInput style={styles.input} placeholder="Enter Your Username" />
      <TextInput style={styles.input} placeholder="Enter Your Password" secureTextEntry={true} />
      <Button onPress={() => navigation.navigate('Signup')}>Login</Button>
    </View>
  );
}

function SignupScreen() {
  const navigation = useNavigation();

  React.useEffect(() => {
    console.log('SignupScreen mounted');
    return () => console.log('SignupScreen unmounted');
  }, []);

  return (
    <View style={styles.signupContainer}>
      <Text style={styles.header}>Create an Account</Text>
      <Image
        source={{ uri: 'https://img.freepik.com/premium-vector/hrm-human-resource-management-icon-linear-design_116137-7757.jpg?w=740' }}
        style={styles.logo}
      />
      <TextInput style={styles.input} placeholder="Enter Your Username" />
      <TextInput style={styles.input} placeholder="Enter Your Email Address" />
      <TextInput style={styles.input} placeholder="Enter Your Password" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Confirm Your Password" secureTextEntry={true} />
      <Button onPress={() => navigation.navigate('Login')}>Sign Up</Button>
    </View>
  );
}

function HomeScreen() {
  const navigation = useNavigation();

  React.useEffect(() => {
    console.log('HomeScreen mounted');
    return () => console.log('HomeScreen unmounted');
  }, []);

  return (
    <View style={styles.homeContainer}>
      <TextInput style={styles.input} placeholder="🔍  Search" />
        <ScrollView>
    <Image source={logo_1} />
        <Text style={{fontSize: 20, textAlign: 'right'}}>Recruitments</Text>
            <Image source={logo_2} />
        <Text style={{fontSize: 20, textAlign: 'right'}}>Applications</Text>
            <Image source={logo_3} />
        <Text style={{fontSize: 20, textAlign: 'right'}}>Interviews</Text>
            <Image source={logo_4} />
        <Text style={{fontSize: 20, textAlign: 'right'}}>Resume Screening</Text>
            <Image source={logo_5} />
        <Text style={{fontSize: 20, textAlign: 'right'}}>Checklist</Text>
            <Image source={logo_6} />
        <Text style={{fontSize: 20, textAlign: 'right'}}>Documents</Text>
            <Image source={logo_7} />
        <Text style={{fontSize: 20, textAlign: 'right'}}>Training</Text>
            <Image source={logo_8} />
        <Text style={{fontSize: 20, textAlign: 'right'}}>Feedback</Text>
            <Image source={logo_9} />
        <Text style={{fontSize: 20, textAlign: 'right'}}>Profile</Text>
  </ScrollView>
      <Button onPress={() => navigation.navigate('Details')}>Go to Details</Button>
    </View>
    
  );
}

function DetailsScreen() {
  const navigation = useNavigation();

  React.useEffect(() => {
    console.log('DetailsScreen mounted');
    return () => console.log('DetailsScreen unmounted');
  }, []);

  return (
    <View style={styles.detailsContainer}>

          <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'Functions:', data: ['Staffing', 'Training and Development', 'Maintenance']},
          {title: 'Others:', data: ['Talent Management', 'Employee Relations', 'Performance Management', 'Legal Compliance']},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
      <Button onPress={() => navigation.navigate('Home')}>Back</Button>
    </View>
  );
}

const LoginStack = createNativeStackNavigator();

function LoginStackScreen() {
  return (
    <LoginStack.Navigator initialRouteName="Welcome">
      <LoginStack.Screen name="Welcome" component={WelcomeScreen} />
      <LoginStack.Screen name="Login" component={LoginScreen} />
      <LoginStack.Screen name="Signup" component={SignupScreen} />
    </LoginStack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
    
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="LoginStack" component={LoginStackScreen} />
      <Tab.Screen name="HomeStack" component={HomeStackScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const logo_1 = {
  uri: 'https://www.ismartrecruit.com/upload/blog/main_image/Banner_Designs_(1)2.webp',
  width: 200,
  height: 100,
};
const logo_2 = {
  uri: 'https://media.istockphoto.com/id/1149466575/photo/apply-now-button-on-computer-keyboard.jpg?s=612x612&w=0&k=20&c=-9JcOl1HAZQtMr0Akk5H7K3ZYpB1m4M1OAX4x-HlhdA=',
  width: 200,
  height: 100,
};
const logo_3 = {
  uri: 'https://hatrabbits.com/wp-content/uploads/2018/04/design-thinking-interviews.jpg',
  width: 200,
  height: 100,
};
const logo_4 = {
  uri: 'https://lh3.googleusercontent.com/gr1-cMvRWHlqK0V-4gYecDxYOWbbXS2Xi2pYTWcHdNW6-NmgCyLxhe5T6Trv24-x1aZe7PRHrTo2BbMEybU3oLjqSiLPaUaBzSXLtplZYALHXDPLZmei5gQM_pCFP2yJeB0Wmjn0q5IcErySSF6ajWMdnZKJ_TuRHP5waPeWhi61bzA4bN6Wqz9N0g',
  width: 200,
  height: 100,
};
const logo_5 = {
  uri: 'https://cheqmark.io/blog/wp-content/uploads/2023/03/what-is-checklist.jpg',
  width: 200,
  height: 100,
};
const logo_6 = {
  uri: 'https://media.istockphoto.com/id/1359932120/vector/contract-document-icon-in-flat-style-report-with-folder-vector-illustration-on-isolated.jpg?s=612x612&w=0&k=20&c=eJUJzNLAWNHutYtNiX1x0ORNXMpOriOMH0S4aX0vUm0=',
  width: 200,
  height: 100,
};
const logo_7 = {
  uri: 'https://fastdo.vn/wp-content/uploads/2023/01/training-la-gi-5.jpg',
  width: 200,
  height: 100,
};
const logo_8 = {
  uri: 'https://plus.unsplash.com/premium_photo-1682310144714-cb77b1e6d64a?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  width: 200,
  height: 100,
};
const logo_9 = {
  uri: 'https://www.shutterstock.com/shutterstock/photos/255319276/display_1500/stock-vector-male-and-female-avatar-profile-picture-silhouette-light-shadow-255319276.jpg',
  width: 200,
  height: 100,
};




const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#faebd7',
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#faebd7',
  },
  signupContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#faebd7',
  },
  homeContainer: {
    flex: 1,
    padding: 30,
    backgroundColor: '#faebd7',
  },
  detailsContainer: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#faebd7',
  },
  header: {
    fontSize: 30,
    marginBottom: 30,
    color: '#000',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  input: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

