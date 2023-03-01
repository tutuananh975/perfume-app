import { FC, useState, useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import axios from "axios";
import { useLocation } from "react-router-dom";




interface Product {
    imgSrc: string;
    name: string;
    desc: string;
    sex: string;
    retailPrice: number;
    ourPrice: number;
    id: any;
  }

const BestSellers: FC = () => {

    const { state } = useLocation();

    const searchValue = state?.searchValue ?? '';
    

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      getProductList().then((data: Product[]) => {
        const bestSellersProducts = data.filter((product) => product.name.toLowerCase().includes(searchValue))
        setProducts(bestSellersProducts);
        
      });
    }, [searchValue]);
  
    async function getProductList() {
      let response = await axios.get(
        "https://63782c6a5c477765122d0c95.mockapi.io/perfume-products"
      );
      let result = response.data;
      console.log(result);
      
      return result;
    }
  
      return (
          <div className="px-4 pt-2">
        <ProductList products={products} isNavigate={false}/>
      </div>
      )
}

export default BestSellers;