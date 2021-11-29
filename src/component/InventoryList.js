import React from 'react'

const InventoryList = ({productTotalAmount}) => {
    return (
        <div>
            {/* Mapping */}
            {productTotalAmount.map(item=>
            <p>{item.productName} = {item.productAmount}</p>
            )}
        </div>
    )
}

export default InventoryList
