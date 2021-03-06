

var React = require('react-native');
var Util = require('./../util');

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  AlertIOS,
  } = React;

var DeleteUser = React.createClass({

  render: function(){
    return (
      <ScrollView>

        <View style={{height:35, marginTop:30,}}>
          <TextInput style={styles.input} password={true} placeholder="请输入用户的邮箱"/>
        </View>

        <View>
          <TouchableOpacity onPress={this._deleteUser}>
            <View style={styles.btn}>
              <Text style={{color:'#FFF'}}>删除用户</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  },

  _deleteUser: function(){
    AlertIOS.alert('提示', '确认删除该用户？', [
      {text: '删除', onPress: () => console.log('Foo Pressed!')},
      {text: '取消', onPress: ()=>null},
    ]);
  }

});

var styles = StyleSheet.create({
  input:{
    flex:1,
    marginLeft:20,
    marginRight:20,
    height:35,
    borderWidth:1,
    borderColor:'#ddd',
    borderRadius:4,
    paddingLeft:5,
    fontSize:13,
  },
  btn:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    backgroundColor:'#1DB8FF',
    height:38,
    marginLeft:20,
    marginRight:20,
    borderRadius:4,
  }
});



module.exports = DeleteUser;