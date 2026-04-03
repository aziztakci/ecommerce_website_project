import axios from 'axios';
import  shopData  from '../mockdatas/shopData'; 

export const getShopData = async (page) => {
  // jsona çevirdiğinde shopdatayı, axios ile veriyi çek buraya yaz. 
  // const response = await axios.get('json dosya yolun');
  // return response.data;

  // mockdata üzerinden kontrol etmek için new promise yapısı, ileride değişecek ??? belki.. diğer yöntemi de kullanabilirim, apiden gelen veride hata varsa mevcut mockdataları kullan gibi,
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${page}. sayfa verisi isteniyor...`);
      resolve(shopData);
    }, 1500); 
  });
};