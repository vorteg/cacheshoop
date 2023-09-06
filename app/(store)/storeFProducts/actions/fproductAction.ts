import { siteConfig } from '@/config/site';
import { useFproductStore } from '../slices/fproductSlice';
import { getFProductsAPI } from '@/utils/fake-products';

export const fetchfproductsAction = async () => {
  try {
    useFproductStore.setState({isLoading:true})
    const url = siteConfig.apiUrls.fakeProducts;
    const fproducts = await getFProductsAPI(url);
    useFproductStore.setState({fproducts:fproducts})

  } catch (error) {
    console.error(error);
  } finally {
    useFproductStore.setState({isLoading:false})
  }
};

export const readfproductsAction = async () => {
  const {fproducts} = useFproductStore.getState()
  return fproducts
}

export const readLoadingfproductsAction = async () => {
  const {isLoading} = useFproductStore.getState()
  return isLoading
}