import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserList} from '../components/redux/action';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.reducer[0].users);
 
  React.useEffect(() => {
    dispatch(getUserList());
  }, []);
    console.warn(userList);
  return  (
    <View style={{ flex: 1 }}>
      {userList.length ? (
       userList.map((user, index) => (
          <View key={index}>
            <Text>Name: {user.firstName} {user.lastName}</Text>
            <Text>Email: {user.email}</Text>
            {/* Display other user properties as needed */}
          </View>
        ))
      ) : (
        <Text>No users found.</Text>
      )}
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({});