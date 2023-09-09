import { useEffect, useState } from "react";
import { SiMediamarkt } from "react-icons/si";
import FormatedPrice from './FormatedPrice';
import { useDispatch, useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../../type";
const CartPayment = () => {
    const { productData, userInfo } = useSelector(
        (state: StateProps) => state.next
      );
    
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        let amt = 0;
        productData.map((item: StoreProduct) => {
          amt += item.price * item.quantity;
          return;
        });
        setTotalAmount(amt);
      }, [productData]);



  return (
    <div className='flex flex-col gap-4'>
        <div className='flex gap-2'>
            <span className='bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1'>
                <SiMediamarkt />
                
            </span>
            <p className="text-sm">
                Your order qualifies for FREE Shipping by Choosing this option at
                checkout. See details....
            </p>
        </div>
        <p className="flex items-center justify-between px-2 font-semibold">
        Total:{" "}
        <span className="font-bold text-xl">
          <FormatedPrice amount={totalAmount} />
        </span>
      </p>
      {userInfo ? (
        <div className="flex flex-col items-center">
          <button
            // onClick={handleCheckout}
            className="w-full h-10 text-sm font-semibold bg-amazon_blue text-white rounded-lg hover:bg-amazon_yellow hover:text-black duration-300"
          >
            Proceed to Buy
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <button className="w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50 text-white rounded-lg cursor-not-allowed">
            Proceed to Buy
          </button>
          <p className="text-xs mt-1 text-red-500 font-semibold animate-bounce">
            Please login to continue
          </p>
        </div>
      )} 
    </div>
  )
}

export default CartPayment