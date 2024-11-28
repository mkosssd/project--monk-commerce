import { Button, Select, SelectItem } from '@nextui-org/react'
import React from 'react'

const DiscountButton = ({ discountAmount }) => {
    const discountType = ['% off', 'flat off']
    if (!discountAmount) {
        return <Button className='bg-[#008060] min-w-[140px] text-white px-4 py-2 rounded'>
            Add Discount
        </Button>
    }
    return (
        <div className='flex gap-2'>
            <input type='number'  className='w-[100px] px-2 shadow-custom ' />
            <Select
                placeholder="Select discount type"
                className="w-[100px] "
                defaultSelectedKeys={["% off"]}
            >
                {discountType.map((type) => (
                    <SelectItem key={type}  >
                        {type}
                    </SelectItem>
                ))}
            </Select>
        </div>
    )
}

export default DiscountButton
