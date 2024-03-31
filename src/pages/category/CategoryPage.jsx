import Layout from "../../components/layout/Layout";
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import myContext from "../../context/MyContext";
import { useContext } from "react";
import { Loader } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/CartSlice";
import toast from "react-hot-toast";

function CategoryPage() {
    const { categoryname } = useParams()
    const navigate = useNavigate()
    const { getAllProduct, loading } = useContext(myContext)

    // filter category name
    const filterProduct = getAllProduct.filter((item) => item.category.includes(categoryname))
    console.log('filterProduct :>> ', filterProduct);

    const cartItems = useSelector((state) => state.cart)

    const dispatch = useDispatch()

    // add to card function
    const addCart = (item) => {
        dispatch(addToCart(item))
        toast.success("Added to cart")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item))
        toast.success("Deleted from cart")
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <Layout>

            <div className="mt-10">
                <h1 className=" text-center mb-5 text-2xl font-semibold first-letter:uppercase">{categoryname}</h1>
            </div>

            {loading ?
                <div className="flex justify-center"><Loader /></div>
                :

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-5 mx-auto">



                        <div className="flex flex-wrap -m-4 justify-center">
                            {filterProduct.length > 0
                                ?
                                <>
                                    {filterProduct.slice(0, 8).map((item, index) => {
                                        const { id, productImageUrl, title, price } = item
                                        return (
                                            <div key={index} className="p-4 w-full md:w-1/4">
                                                <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                                    <img
                                                        onClick={() => navigate(`/ProductInfo/${id}`)}
                                                        className="lg:h-80  h-96 w-full"
                                                        src={productImageUrl}
                                                        alt="img"
                                                    />
                                                    <div className="p-6">
                                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                            E-pakistan
                                                        </h2>
                                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                            {title.substring(0, 25)}
                                                        </h1>
                                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                            ₹{price}
                                                        </h1>

                                                        <div className="flex justify-center ">
                                                            {cartItems.some((product) => product.id === item.id)
                                                                ?
                                                                <button 
                                                                onClick={()=> deleteCart(item)}
                                                                className=" bg-red-900 hover:bg-red-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                                    Delete From Cart
                                                                </button>
                                                                :
                                                                <button
                                                                onClick={()=> addCart(item)}
                                                                className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                                    Add To Cart
                                                                </button>
                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}</>
                                :

                                <div>
                                    <div className="flex justify-center">
                                        <img className=" mb-2" src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png" alt="" />
                                    </div>
                                    <h1 className=" text-black text-xl">No {categoryname} product found</h1>
                                </div>

                            }

                        </div>
                    </div>
                </section>
            }


        </Layout>

    )
}

export default CategoryPage
