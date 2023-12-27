import logo from "../../assets/images/logo.png";
import Cart from "../Cart/Cart.jsx";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/slices/authSlice";
import { Avatar } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { IoBagHandleOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const user = useSelector((state) => state.user.user);
    const { name, image } = user;
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    const dispatch = useDispatch();

    return (
        <>
          <div className="bg-black p-4 w-full flex justify-center items-center">
            <p className="text-white font-inter text-2xl font-bold">
                The Store
            </p>
          </div>
          <div className="flex justify-around items-center">
            <div>
                <img className="h-28 w-full" src={logo} alt="store"></img>
            </div>
            <div className="flex flex-row items-center cursor-pointer" onClick={handleOpen}>
                {totalAmount > 0 ? (
                    <span className="rounded-full bg-gray-300 px-2 font-inter text-sm mr-1">
                        {totalAmount}
                    </span>
                ) : (
                    <IoBagHandleOutline/>
                )}
                <p className="font-inter text-base font-medium tracking-normal leading-none text-center">Shopping Bag</p>
                <div className="flex">
                    <div>
                        {open && <Cart openModal={open} setOpen={setOpen}></Cart>}
                    </div>
                </div>
                <div className="flex flex-row items-center cursor-pointer pl-4">{
                    image && (
                        <Avatar
                        src={image}
                        alt="avatar"
                        size="sm"
                        className="mr-2"></Avatar>
                    )
                }
                <div onClick={() => dispatch(logout())}>
                    <Tooltip content="Sign Out" placement="bottom">
                        <p className="font-inter text-sm font-medium tracking-normal leading-none">
                            Hi {name.charAt(0).toUpperCase() + name.slice(1)}
                        </p>
                    </Tooltip>
                </div>
                </div>
            </div>
          </div>
          <div className="bg-black p-4 w-full flex items-center justify-center mx-auto">
            <p className="text-white font-inter text-base font-medium">50% OFF</p>
            <p className="text-white font-inter text-base font-medium mx-96">
                Free shipping and returns
            </p>
            <p className="text-white font-inter text-base font-medium">
                Different payment methods
            </p>
          </div>
        </>
    )
}

export default Navbar;