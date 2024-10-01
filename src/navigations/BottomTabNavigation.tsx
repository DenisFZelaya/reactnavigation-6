import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen name="Home" component={Test} />
      <Tab.Screen name="Settings" component={Test} />
      <Tab.Screen name="Menu" component={Test} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation

const MenuItem = ({ title, image, price }) => (
  <TouchableOpacity
    style={tw`bg-white rounded-lg shadow-md p-4 mb-4`}>
    <Image source={{ uri: image }} resizeMode='contain'
      style={tw`w-full h-40 rounded-lg mb-2`} />
    <Text style={tw`text-lg font-semibold`}>{title}</Text>
    <Text style={tw`text-gray-600`}>${price.toFixed(2)}</Text>
  </TouchableOpacity>
);

const CategoryButton = ({ title, active }) => (
  <TouchableOpacity
    style={tw`px-4 py-2 rounded-full mr-2 bg-gray-300`}

  >
    <Text
      style={tw`font-medium`}>
      {title}
    </Text>
  </TouchableOpacity>
);

function Test() {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const categories = ['All', 'Pizza', 'Burgers', 'Sushi', 'Desserts'];
  const menuItems = [
    { id: 1, title: 'Margherita Pizza', price: 12.99, image: 'https://png.pngtree.com/png-clipart/20230412/original/pngtree-modern-kitchen-food-boxed-cheese-lunch-pizza-png-image_9048155.png' },
    { id: 2, title: 'Cheeseburger', price: 8.99, image: 'https://img.freepik.com/free-photo/delicious-burguer-isolated-white-background_125540-3368.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726876800&semt=ais_hybrid' },
    { id: 3, title: 'California Roll', price: 14.99, image: 'https://png.pngtree.com/png-clipart/20231124/original/pngtree-california-roll-on-transparent-background-png-image_13700680.png' },
    { id: 4, title: 'Chocolate Cake', price: 6.99, image: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL21vdGFybzdfcGhvdG9fb2ZfYV9jaG9jb2xhdGVfZnVkZ2VfY2FrZV9pc29sYXRlZF9vbl9hX3doaXRlX2JhY19lN2ZjMTE1My1hYWViLTQ0ZTQtYTczYS1kMTAwYWNiZDY1YTMucG5n.pnghttps://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL21vdGFybzdfcGhvdG9fb2ZfYV9jaG9jb2xhdGVfZnVkZ2VfY2FrZV9pc29sYXRlZF9vbl9hX3doaXRlX2JhY19lN2ZjMTE1My1hYWViLTQ0ZTQtYTczYS1kMTAwYWNiZDY1YTMucG5n.png' },
  ];

  return (
    <View style={tw`flex-1 bg-gray-100 p-4`}>
      <Text style={tw`text-3xl font-bold mb-6`}>Delicious Eats</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}
        style={tw`mb-6`}>
        {categories.map((category) => (
          <CategoryButton
            key={category}
            title={category}
            active={category === activeCategory}
          />
        ))}
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false}>
        {menuItems.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </ScrollView>
    </View>
  );
}