import { FC } from "react";
import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList/ProductList";

const Gift: FC = () => {
    return (
        <div className="px-4 pt-2">
        <Banner />
        <ProductList products={[]}/>
      </div>
    )
}

export default Gift;