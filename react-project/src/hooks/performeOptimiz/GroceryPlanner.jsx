import React, { useCallback, useMemo, useState } from 'react'

function GroceryPlanner() {
    const groceryItems = [
        { id: 1, name: "Rice", prices: { shopA: 70, shopB: 45, shopC: 90 } },
        { id: 2, name: "Tea", prices: { shopA: 40, shopB: 65, shopC: 20 } },
        { id: 3, name: "Oil", prices: { shopA: 730, shopB: 435, shopC: 2040 } },
        { id: 4, name: "Flour", prices: { shopA: 40, shopB: 55, shopC: 95 } },
        { id: 5, name: "Lentils", prices: { shopA: 72, shopB: 35, shopC: 64 } },
    ]
    const shops = ["shopA", "shopB", "shopC"]

    const [quantities, setQuantities] = useState({})

    const handleQuantity = useCallback((id, value) => {
        setQuantities(prev => ({ ...prev, [id]: Number(value) }))
    }, [])

    const totalcosts = useMemo(() => {
        const totals = { shopA: 0, shopB: 0, shopC: 0 }
        groceryItems.forEach(item => {
            const qty = quantities[item.id] || 0
            shops.forEach(shop => {
                totals[shop] += item.prices[shop] * qty
            })
        })
        return totals
    }, [quantities])

    const bestShop = useMemo(() => {
        let minCost = Infinity;
        let selectedShop = '';
        for (let shop in totalcosts) {
            if (totalcosts[shop] < minCost) {
                minCost = totalcosts[shop];
                selectedShop = shop;
            }
        }
        return selectedShop;
    }, [totalcosts])

    return (
        <div>
            <h1>Grocery Planner</h1>

            {groceryItems.map(item => (
                <div key={item.id} style={{ marginBottom: "20px" }}>
                    <strong>{item.name}</strong>
                    <div style={{ margin: '5px 0' }}>
                        {shops.map(shop => (
                            <span key={shop} style={{ margin: '0 10px' }}>
                                {shop} : {item.prices[shop]}
                            </span>
                        ))}
                    </div>
                    <input
                        type="number"
                        min={0}
                        placeholder='Quantity'
                        value={quantities[item.id] || ''}
                        onChange={(e) => handleQuantity(item.id, e.target.value)}
                    />
                </div>
            ))}

            <h3>Total Cost per Shop:</h3>
            {shops.map(shop => (
                <div key={shop}>
                    {shop}: <strong>{totalcosts[shop]}</strong>
                </div>
            ))}

            <h3>Best Shop: {bestShop.toUpperCase()}</h3>
        </div>
    )
}

export default GroceryPlanner
