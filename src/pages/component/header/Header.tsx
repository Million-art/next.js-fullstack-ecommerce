import Image from "next/image";
 import { removeUser } from "@/store/nextSlice";
 import logo from "@/images/logo.png";
import { SlLocationPin } from "react-icons/sl";
import cartIcon from "@/images/cartIcon.png";
import { MdFavorite } from 'react-icons/md';
import { HiOutlineSearch } from "react-icons/hi";
import { addUser } from "@/store/nextSlice";
import Link from "next/link";
import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {StateProps} from '../../../../type'
import { useSession, signIn, signOut } from "next-auth/react"
const Header = () => {

  const {data:session}=useSession()
  const {productData,favoriteData , userInfo}= useSelector((state : StateProps) =>state.next)
  const dispatch=useDispatch()
  useEffect(() => {
     if(session){
      dispatch(addUser({
        name:session?.user?.name,
        email:session?.user?.email,
        Image:session?.user?.image
      }))
     }
  
    
  }, [dispatch, session])
  
   const handleSignOut = () => {
    signOut();
    dispatch(removeUser());
  };

 
  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4"> 
      {/* {logo} */}
      <Link 
        href={"/"}
        className=" px-2 border  border-transparent hover:border-white  cursor-pointer duration-300 flex item-center  justify-center   ">  
      <Image className="w-28 object-cover mt-2" src={logo} alt="logoImg" />
      </Link>
              {/* {delivery} */}
      <div className=" px-2 border  border-transparent hover:border-white  cursor-pointer duration-300 item-center  justify-center hidden xl:inline-flex gap-1">
        <SlLocationPin />
        <div>
            <p>deliver to</p>
            <p className="text-whiite font-bold uppercase">USA</p>
        </div>
        
      </div>
              {/* {search} */}
              <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input
            
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
            type="text"
            placeholder="Search products here..."
          /> 
          <span className="w-12 h-full bg-amazon_yellow text-black flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
      </div>        
              {/* {signin} */}
              {userInfo ? (
          <div className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
             👋
            <span className="text-xs text-gray-100 flex flex-col justify-between">
              <p className="text-white font-bold">{userInfo.name}</p>
               
            </span>
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]"
          >
            <p>Hello, sign in</p>
            <p className="text-white font-bold flex items-center">
              Account & Lists{" "}
              <span>
              
               </span>
            </p>
     
          </div>
        )}
        <span className="w-15 h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
                    
                    {userInfo && (
                  <button
                    onClick={handleSignOut}
                    className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 hover:text-red-400 text-amazon_yellow cursor-pointer duration-300"
                  >
                    Sign Out
                  </button>
                )}

              </span>
              {/* {favorite} */}
      <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
  
          {favoriteData.length > 0 && (
            <span className="    right-2 top-2 w-4 h-4     flex items-center justify-center text-xs text-amazon_yellow">
              {favoriteData.length}
            </span>
          )}
          <MdFavorite size={24} color="red" />
          <p>favorite</p>
      </div>
              {/* {cart} */}
        <Link
          href={"/Cart"}
          className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <Image
            className="w-auto object-cover h-8"
            src={cartIcon}
            alt="cartImg"
          />
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
          {productData ? productData.length : 0}

          </span>
        </Link>
    </div>
  </div>
  );
};

export default Header;
