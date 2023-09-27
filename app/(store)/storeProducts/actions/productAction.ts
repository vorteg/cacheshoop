import { siteConfig } from '@/config/site';
import { useProductStore } from '../slices/productsSlices';
import { getProductsAPI} from '@/utils/products-dto';
import { product } from '@/app/api/products/types';
import { Product } from '@/types/product';

export const fetchProductsAction = async () => {
  try {
    useProductStore.setState({isLoading:true})
    const products = await getProductsAPI();
    useProductStore.setState({products:products})

  } catch (error) {
    console.error(error);
  } finally {
    useProductStore.setState({isLoading:false})
  }
};

export const readProductsAction = async () => {
  const {products} = useProductStore.getState()
  return products
}

export const readLoadingProductsAction = async () => {
  const {isLoading} = useProductStore.getState()
  return isLoading
}

export const filterProductsAction = async (data:Product[]) => {
  try {
    useProductStore.setState({isLoading:true})
    
    useProductStore.setState({products:data})

  } catch (error) {
    console.error(error);
  } finally {
    useProductStore.setState({isLoading:false})
  }
}