import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import useFetchAxios from "../../hooks/UseFetchAxios";
import Image from "../../components/Image";
import { selectUser } from "../Customeraccount/featurnes/useSlice";
import { useSelector } from "react-redux";
import { UserContext } from "../../context/UserContextProvider";
import { Link } from "react-router-dom";
import Overflay from "../../components/overflay/Overflay";

const ProductDetail: FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [addCartSuccess, setAddCartSuccess] = useState(false)
  const { idUser, isLogin } = useSelector(selectUser);

  const { id } = useParams();
  const { responses, doFetch } = useFetchAxios(
    "https://63782c6a5c477765122d0c95.mockapi.io/perfume-products/" + id
  );

  const { responses: addCartResponses, doFetch: addCart } = useFetchAxios(
    "https://63782c6a5c477765122d0c95.mockapi.io/users/" + idUser
  );

  const { data, isLoading } = responses;
  const { isLoading: isLoadingAddCart } = addCartResponses;
  const { cart, handleSetTotalItems, totalItems, handleSetCart } = useContext(UserContext);

  const onDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onCrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddCart = () => {
    let newCart: any = [];
    let isExistInCart: boolean = false;

    if (cart.length < 1) {
      newCart = [
        {
          id: 1,
          imgSrc: data.imgSrc,
          name: data.name,
          desc: data.desc,
          retailPrice: data.retailPrice,
          ourPrice: data.ourPrice,
          amount: quantity,
        },
      ];
    } else {
      cart.forEach((product: any) => {
        if (product.name === data.name && product.imgSrc === data.imgSrc) {
          isExistInCart = true;
          newCart.push({
            ...product,
            amount: Number(product.amount) + quantity,
          });
        } else {
          newCart.push(product);
        }
      });
      if (!isExistInCart) {
        newCart.push({
          id: Number(cart[cart.length - 1].id) + 1,
          imgSrc: data.imgSrc,
          name: data.name,
          desc: data.desc,
          retailPrice: data.retailPrice,
          ourPrice: data.ourPrice,
          amount: quantity,
        });
      }
    }

    addCart({
      method: "PUT",
      data: {
        cart: newCart,
      },
    });
    handleSetCart(newCart);
    setAddCartSuccess(true)

    handleSetTotalItems(totalItems + quantity);
  };

  useEffect(() => {
    doFetch({
      method: "GET",
    });
  }, [doFetch]);

  return (
    <>
      {(isLoading || isLoadingAddCart) && <Loading />}
      {data && (
        <div className="block md:grid grid-cols-12 px-4">
          <div className="col-span-6">
            <Image w="75%" h="auto" alt={data.name} src={data.imgSrc} />
          </div>
          <div className="col-span-6 px-4 pt-36">
            <div className="pt-18">
              <p className="flex justify-start tracking-normal text-black uppercase font-semiboldleading-6 text-xl font-bold py-8">
                {data.name}
              </p>
              <p className="text-base pb-8 font-light">{data.desc}</p>
              <b className="text-base line-through text-gray-400">
                {(data.retailPrice * quantity).toFixed(2)}
              </b>
              <span className="text-xl font-bold ml-4 text-red-600">
                {(data.ourPrice * quantity).toFixed(2)}
              </span>
              <br />
              <div>
                <b className="text-lg flex items-cente mt-4">
                  <span className="mr-4">Quantity</span>
                  <div
                    onClick={onDecrease}
                    className="flex justify-center items-center w-7 h-7 cursor-pointer border border-slate-300 mr-3 hover:bg-black hover:text-white"
                    style={{
                      borderRadius: "50%",
                    }}
                  >
                    <span
                      style={{
                        position: "relative",
                        top: "-2px",
                      }}
                    >
                      -
                    </span>
                  </div>
                  <span>{quantity}</span>
                  <div
                    onClick={onCrease}
                    className="flex justify-center items-center w-7 h-7 cursor-pointer border border-slate-300 ml-3 bg-black hover:opacity-60"
                    style={{
                      borderRadius: "50%",
                    }}
                  >
                    <span
                      className="text-white relative"
                      style={{
                        top: "-2px",
                      }}
                    >
                      +
                    </span>
                  </div>
                </b>
                <div className="mt-4">
                  For:{" "}
                  <span className="uppercase font-semibold">{data.sex}</span>
                </div>
              </div>
              <div>
                <button
                  className={
                    isLogin
                      ? "mt-20 bg-rose-500 hover:bg-rose-400  py-4 px-12 rounded font-medium text-white"
                      : "mt-20 bg-rose-200  py-4 px-12 rounded font-medium text-white"
                  }
                  onClick={handleAddCart}
                  disabled={!isLogin}
                >
                  ADD TO CART
                </button>
                <Link to="/cart">
                  <button
                    className={
                      isLogin
                        ? "mt-20 bg-black hover:bg-slate-800 py-4 px-12 rounded font-medium text-white ml-4"
                        : "mt-20 bg-slate-200 py-4 px-12 rounded font-medium text-white ml-4"
                    }
                    disabled={!isLogin}
                  >
                    VIEW CART
                  </button>
                </Link>
              </div>
              {!isLogin && (
                <h3 className="mt-3 ml-3 text-red-500 text-sm">
                  You must be logged in to use these features!{" "}
                </h3>
              )}
              {addCartSuccess && 
              <div>
                <div className="modal-ta">
                  <p className="text-lg font-semibold">Add to Cart Successfully!</p>
                  <div className="flex justify-center items-center mt-4">
                    <button className=" bg-teal-500 text-white text-base py-1 rounded hover:bg-teal-300 px-6" onClick={() => setAddCartSuccess(false)}>
                      Ok
                    </button>
                    <Link to="/cart">
                      <button className=" text-white text-base ml-4 py-1 rounded px-6 bg-black hover:bg-slate-800">
                        View Cart
                      </button>
                    </Link>
                  </div>
                </div>
                <Overflay />
              </div>
              }

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
