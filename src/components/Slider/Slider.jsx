import {
    nextSlide,
    prevSlide,
    dotSlide
} from "../../features/slices/sliderSlice.jsx";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../../assets/data/dummyData.jsx";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";

const Slider = () => {

    const slideIndex = useSelector((state) => state.slider.value);
    const dispatch = useDispatch();

    return (
        <div className="relative pb-4">
            <div>
                {sliderData.map((item) => {
                    return (
                        <div key={item.id}
                        className={
                            parseInt(item.id) === slideIndex ? 
                            "opacity-100 duration-700 ease-in-out scale-100" : 
                            "opacity-0 duration-700 ease-in-out scale-110"
                        }>
                            <div>
                                {parseInt(item.id) === slideIndex && (
                                    <img className="h-[850px] w-full" src={item.img}
                                    alt="shoes"
                                    />
                                )}
                            </div>
                            <div className="absolute top-10 mx-auto inset-x-1/4">
                                <p className="text-white text-2xl font-inter font-bold tracking-normal leading-none">
                                    {parseInt(item.id) === slideIndex && item.text}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex absolute bottom-12 left-[45%]">
                {
                    sliderData.map((dot, index) => {
                        return (
                            <div className="mr-4"
                            key={index}>
                                <div className={parseInt(dot.id) === slideIndex ? "bg-green-300 rounded-full p-2 cursor-pointer" : "bg-white rounded-full p-2 cursor-pointer"}
                                onClick={() => dispatch(dotSlide(parseInt(dot.id)))}></div>
                            </div>
                        );
                    })
                }
            </div>
            <div>
                <button className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300" 
                onClick={() => dispatch(nextSlide(slideIndex + 1))}>
                    <MdOutlineNavigateNext/>
                </button>
                <button className="absolute top-[50%] left-4 bg-white rounded-full p-2
                hover:bg-green-300" 
                onClick={() => dispatch(prevSlide(slideIndex - 1))}>
                    <MdOutlineNavigateBefore/>
                </button>
            </div>
        </div>
    )
}

export default Slider;