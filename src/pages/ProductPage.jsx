import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { GripVertical } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ModalButton from "../components/ModalButton";
import { fetchProducts } from '../lib/http';
import DiscountButton from "../components/DiscountButton";
const ProductPage = () => {
    const [list, setList] = useState([])
    const [productList, products, setProductItems] = useDragAndDrop(
        [],
        { group: "productList", dragHandle: ".handle" }
    );
        useEffect(() => {
        async function fetchList(){
           let productList = await fetchProducts()
           setProductItems(productList)
            setList(productList)
        }

        fetchList()
        
    }, [])
    // if(!list) return
    return (
        <div className='w-full h-full'>
            <div className="container">
                <div className='py-10'>
                    <h2 className='font-semibold text-[16px] mb-6'>Add Products </h2>
                    <div>
                        <table>
                            <thead className="h-[50px]">
                                <tr>
                                    <td className='w-[50px]'>&nbsp;</td>
                                    <td className='font-bold w-[250px]'>Product</td>
                                    <td className='font-bold px-4'>Discount</td>
                                </tr>
                            </thead>
                            <tbody ref={productList}>
                                {list.length &&
                                    products.map((product, index) => (
                                        <tr>
                                            <td className="flex pt-2 my-3"
                                                key={product?.id}>
                                                <span className="handle me-1"><GripVertical className="text-black/50 w-5 " /></span>
                                                {index + 1}.
                                            </td>
                                            <td><ModalButton title={product.title}/></td>
                                            <td className="px-4"><DiscountButton discountAmount={25}/></td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
