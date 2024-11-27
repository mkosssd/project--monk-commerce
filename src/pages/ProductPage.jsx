import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { GripVertical } from 'lucide-react';
import React, { useEffect } from 'react';
import { fetchProducts } from '../lib/http';
const ProductPage = () => {
    const [productList, products, setProductItems] = useDragAndDrop(
        [],
        { group: "productList", dragHandle: ".handle" }
    );

    useEffect(() => {
        async function fetchList() {
            let productList = await fetchProducts()
            setProductItems(productList)
        }

        fetchList()

    }, [])

    return (
        <div className='w-full h-full'>
            <div className="container">
                <div className='py-10'>
                    <h2 className='font-semibold text-[16px] mb-6'>Add Products </h2>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <td className='w-[50px]'>&nbsp;</td>
                                    <td className='font-bold w-[300px]'>Product</td>
                                    <td className='font-bold'>Discount</td>
                                </tr>
                            </thead>
                            <tbody ref={productList}>
                                {products.length &&
                                    products.map((product, index) => (
                                        <tr>
                                            <td className="flex"
                                                key={product?.id}>
                                                <span className="handle me-1"><GripVertical className="text-black/50 w-5 " /></span>
                                                {index + 1}.
                                            </td>
                                            <td>{product?.title}</td>
                                            {/* <td>{product}</td> */}
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
