import productDetailData from '../mockdatas/productDetailData'; 

export const getProductData = async () => {
 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productDetailData);
    }, 1500);
  });
};