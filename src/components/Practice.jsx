import React ,{useState} from "react";


function products(){
  const initial=[
    {id:1,name:"one",price:100},
    {id:2,name:"two",price:200},
    {id:3,name:"three",price:300},
  ];



  const [cart,setCart]=useState([]);

  // addto cart

  const addtocart=(product)=>{

    const update=[...cart];
    const index=update.findIndex((p)=>p.id==product.id);

    if(index!==1){
      update[index].quantity+=1;
      update[index].price+=product.price;
    }
    else{
      update.push[{...product,quantitu:1,price:product.price}];
    }
    setCart(update);


  }


  const removecart=(product)=>{

    const update=[...cart];
    const index=update.findIndex((p)=>p.id==product.id);

    if(index!==1){
      update[index].quantity-=1;
      update[index].price-=product.price;
    }
    if(update[index].quantity<=0){
      update.splice(index,1);
    }
    
    setCart(update);


  }
  const total=()=>{
    return cart.reduce((total,product)=>total+product.price,0);
  }

 



}