import innerData from '../mockdatas/innerData'; 

export const getInnerData = async () => {
  // API'ye geçtiğimde ya da json a çevirdiğimde...: const response = await axios.get('json dosya yolum ya da api adresi'); return response.data;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(innerData);
    }, 1500);
  });
};