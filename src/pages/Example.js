//import { ToggleButton } from '@mui/material';
import React, {useState, useEffect} from 'react'
import InventoryList from '../component/InventoryList';

let productData = localStorage.getItem('inventory' ) ? JSON.parse(localStorage.getItem('inventory')) : [];
const Example = () => {
    //count initialized to zero, setCount will update the count argument, call setCount function in line 11 will add 1 to count variable
    const [count, setCount] = useState(0);
    const [userName, setUsername] = useState('Hi This is Ron');
    const [timer, setTimer] = useState(0);
    const [isActive, setisActive] = useState(false);
    //for product information useState hook
    const [productName, setProductName] =useState('');
    const [productAmount, setProductAmount] =useState(0);
    const [productTotalAmount, setProductTotalAmount] =useState(productData);
   

    const handleproductName = (e) => {
        setProductName(e.target.value); 
    };
    const handleproductAmount = (e) => {
        setProductAmount(e.target.value);
    };
    const handleProductDelete = () => {
        setProductTotalAmount([]);
    };
    const handleProductSubmit = (e) => {
        e.preventDefault();
        
        if (productName!=='' && productAmount>0 ) {
            const product = {productName, productAmount};
            alert (JSON.stringify(product))
            setProductTotalAmount([...productTotalAmount, product]); //product will be inside the spread array totalAmount
        }
        else {
            alert('Invalid product name or amount');
        }
        setProductName('');
        setProductAmount(0);
        
    } 
    
    //ToggleButton =() => {
     //   setisActive(!isActive);
    //}
    function ToggleButton () {
        setisActive(!isActive);
    }
    function reset () {
        setisActive(false) ;
        setTimer(0);
    }
    useEffect(()=>{
        localStorage.setItem('inventory', JSON.stringify(productTotalAmount));},[productTotalAmount]);
        
        // const getInfo =()=> {
        // let invetoryArray = [];
        // invetoryArray = JSON.parse(localStorage.getItem('inventory'));
        // document.getElementById('showHere').innerText=invetoryArray;
        // //console.table(invetoryArray);
        // }

        const delInfo=()=> {
            localStorage.removeItem('inventory');
        }
        // let interval = 0;
        // if (isActive ) {
        //     interval = setInterval(()=>setTimer(timer=>timer+1),1000); //setinterval
        // }
        // else if (!isActive && timer!==0) {
        //     clearInterval(interval); //will reset to zero
        // }
        // return ()=>clearInterval(interval);

     //[isActive, timer]);
     return (
        <div align='center' sx={{padding:'20px'}}>
            <h1>Product Information</h1>
                <form name='product' onSubmit={handleProductSubmit}>
                    <label for="product">Product</label><br/>
                    <input type='text' name='product' id='product' value={productName} onChange={handleproductName}></input><br/>
                    <label for='amount'>AMount</label><br/>
                    <input type='number' name='amount' id='amount' value={productAmount} onChange={handleproductAmount}></input><br/><br/>
                    <button type='submit'>Submit</button>
                    
                </form>
                <InventoryList productTotalAmount={productTotalAmount}/>
                <h4>Total {productTotalAmount.reduce((accumulator, currrentvalue)=>{
                    return (accumulator+=parseFloat(currrentvalue.productAmount));
                },0)}</h4>
                {/* <button onClick={getInfo}>Retrieve</button> */}
                <button onClick={handleProductDelete}>Delete</button>
                {/* <button onClick={delInfo}>Delete</button> */}
                {/* <p id='showHere'></p> */}

            <h2>{userName} </h2>
            <input type="text" value={userName} onChange={(event)=>setUsername(event.target.value)}></input>

            <p>You click {count} times</p>
            <button onClick={()=>setCount(count+1)}>
                    Click Me
            </button>

            <div >
                <p >This is the Timer</p>
                {timer}{<br/>}
                <button onClick={ToggleButton} >{!isActive?'Start':'Pause'}</button>
                <button onClick={reset}>Reset</button>
            </div>

            
        </div>
    )
}

export default Example
