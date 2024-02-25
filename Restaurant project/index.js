//login
document.getElementById("login").addEventListener("click", ()=> {
    document.querySelector(".popup").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", ()=> {
    document.querySelector(".popup").style.display = "none";
});
//signup
document.getElementById("signup").addEventListener("click", ()=> {
    document.querySelector(".popup2").style.display = "flex";
});
document.querySelector(".close2").addEventListener("click", ()=> {
    document.querySelector(".popup2").style.display = "none";
});
//Menu
// document.getElementById("order").addEventListener("click",()=>
// {
//     document.querySelector(".popup3").style.display="flex";
// });
document.querySelector(".close3").addEventListener("click", ()=> {
    document.querySelector(".popup3").style.display = "none";
});
//cart

let carts=document.querySelectorAll(".add");

let products=[
    {
        name:'Veg Manchuria',
        tag:'vegm',
        price:260,
        inCart:0

    },
    {
        name:'Gobi Manchuria',
        tag:'gobim',
        price:275,
        inCart:0

    },
    {
        name:'Chicken 65',
        tag:'c65',
        price:325,
        inCart:0

    },
    {
        name:'Chicken Tandoori',
        tag:'tandoori',
        price:290,
        inCart:0

    },
    {
        name:'Drumstick',
        tag:'Drumstick',
        price:320,
        inCart:0

    },
    {
        name:'Chicken Biriyani',
        tag:'biriyani',
        price:300,
        inCart:0

    },
    {
        name:'Hyderabad Biriyani',
        tag:'sbiriyani',
        price:350,
        inCart:0

    },
    {
        name:'Mutton Biriyani',
        tag:'mbiriyani',
        price:400,
        inCart:0

    },
    {
        name:'Chicken family',
        tag:'fbiriyani',
        price:800,
        inCart:0

    },
    {
        name:'Veg biryani',
        tag:'veg-biryani',
        price:150,
        inCart:0

    },
    {
        name:'Butter chicken',
        tag:'butterc',
        price:330,
        inCart:0

    },
    {
        name:'Chicken Tikka Masala',
        tag:'Chickentikka',
        price:350,
        inCart:0

    },
    {
        name:'Paneer Butter Masala',
        tag:'panner',
        price:280,
        inCart:0

    },
    {
        name:'Paneer Tikka Masala',
        tag:'paneert',
        price:290,
        inCart:0

    },
    {
        name:'Naan',
        tag:'naan',
        price:40,
        inCart:0

    },
    {
        name:'Parota',
        tag:'parota',
        price:35,
        inCart:0

    },
    {
        name:'Butter Naan',
        tag:'butternaan',
        price:45,
        inCart:0

    },
    {
        name:'Rumali Roti',
        tag:'rroti',
        price:35,
        inCart:0

    },
    {
        name:'Tandoori Roti',
        tag:'troti',
        price:30,
        inCart:0

    }

    ]

for(let i=0;i<carts.length;i++)
{
    carts[i].addEventListener('click', ()=>{
        cartnumbers(products[i])
        totalcost(products[i])
    })
}

function onLoadCartnumbers(){
    let productnumbers=localStorage.getItem('cartnumbers');
    if (productnumbers) {
        document.querySelector('.cart span').textContent=productnumbers;
    }
}

function cartnumbers(product){
    
    let productnumbers=localStorage.getItem('cartnumbers');
    productnumbers=parseInt(productnumbers);
    if (productnumbers) {
        localStorage.setItem('cartnumbers',productnumbers+1)
        document.querySelector('.cart span').textContent=productnumbers+1;
    }
    else{
        localStorage.setItem('cartnumbers',1);
        document.querySelector('.cart span').textContent=1;
    }
    setItems(product)
}

function setItems(product)
{
    let cartItems=localStorage.getItem('ProductsInCart')
    cartItems=JSON.parse(cartItems)

    if(cartItems!=null)
    {
        if(cartItems[product.tag]==undefined)
        {
            cartItems={
                ...cartItems,
                [product.tag]:product
            }
        }


        cartItems[product.tag].inCart += 1
    }
    else
    {
        product.inCart=1

        cartItems={
            [product.tag]:product
        }

    }
    
    localStorage.setItem("ProductsInCart",JSON.stringify(cartItems))
}

function totalcost(product)
{
    let cartcost=localStorage.getItem('totalcost')
    

    if(cartcost!=null)
    {
        cartcost=parseInt(cartcost)
        localStorage.setItem("totalcost",cartcost+product.price)
    }
    else
    {
        localStorage.setItem("totalcost",product.price)
    }
    
}


function displayCart()
{
    let cartItems=localStorage.getItem("ProductsInCart")
    cartItems=JSON.parse(cartItems)
    let productContainer=document.querySelector(".products")
    let cartcost=localStorage.getItem('totalcost')

    if(cartItems && productContainer)
    {
        productContainer.innerHTML='';
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./images/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price}/-</div>
            <div class="quantity">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
            
            <span>${item.inCart}</span>
            
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </div>
            
            <div class="total">
                ${item.inCart * item.price}/-
             </div>

            `
        })

        productContainer.innerHTML += `
            <div class="CartTotalContainer">
                <h4 class="CartTotalTitle">
                    Cart Total
                </h4>
                <h4 class="CartTotal">
                    ${cartcost} /-
                </h4>
        `
    }
}
onLoadCartnumbers();
displayCart();