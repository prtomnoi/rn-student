import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./img/img1.png')}
        style={{width: 100, height: 100 }}
      />
      <Text style={{fontSize : 30 , color:'#401fe5' }}>ชื่อ ต้อมน้อย ประวัติ</Text>
      <Text style={{color: '#eaa40f' , fontSize : 18 }}>รหัสนักเรียน : 5743470045</Text>
      <Text style={{color: '#da144c' , fontSize : 16 }}>ชั้นมัธยมศึกษาปีที่ 1/99 </Text>
      <Text style={{color: '#0ba93d' , fontSize : 16 }}>อายุ 12 ปี</Text>
      <Text style={{color: '#0ba93d' , fontSize : 12 }}>ที่อยู่ 999 / 9 กรุงเทพมหานคร 10700</Text>
       <Text>สิ่งที่ชอบ </Text>
        <Image source={require('./img/img2.jpg')}
          style={{width: 100, height: 100 , marginTop: 10, }}
        />
        <Image source={require('./img/img3.jpg')}
          style={{width: 100, height: 100 , marginTop: 10, }}
        /> 
        <Image source={require('./img/img4.jpg')}
         style={{width: 100, height: 100 , marginTop: 10, }}
       />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
