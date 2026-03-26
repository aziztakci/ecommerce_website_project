import layoutData from '../mockdatas/layoutData'; 

export const getLayoutData = async () => {
  // API'ye geçtiğimde ya da json a çevirdiğimde...: const response = await axios.get('json dosya yolum ya da api adresi'); return response.data;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(layoutData);
    }, 1500);
  });
};