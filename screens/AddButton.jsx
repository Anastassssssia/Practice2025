import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation, useNavigationState } from '@react-navigation/native';
import {FontAwesome6} from '@expo/vector-icons';

export default function AddButton() {
  const navigation = useNavigation();
  const currentRoute = useNavigationState(state => state.routes[state.index]?.name);

  const handleAddPress = () => {
    switch (currentRoute) {
      case 'Нерухомість':
        navigation.navigate('AddProperty');
        break;
      case 'Заявки':
        navigation.navigate('AddRequest');
        break;
      case 'Договори':
        navigation.navigate('AddContract');
        break;
      default:
        console.log('Немає відповідного екрану для додавання');
    }
  };

  return (
    <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
      <FontAwesome6 name="plus" size={28} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButton: {
    width: 60,
    height: 60,
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6246EA',
    borderWidth: 5,
    borderRadius: 30,
    borderColor: '#fff',
  },
});