const goodies= document.querySelector(".goodies")
const checkoutPage= document.querySelector(".checkoutPage")
const filteredPage= document.querySelector(".filteredPage")
const shoppingCart= document.querySelector(".shoppingCart")
const filterContainer= document.querySelector(".filterContainer")
let input = document.querySelectorAll("input")
const filter= document.querySelector(".filter")
const filterBtn= document.querySelector(".filterBtn")
let span1 = document.querySelector("#quantity")
let total = document.querySelector("#total")

let buyItems = []

let varor = [{
    item:"shoes",
    color:"Black",
    brand:"adidas",
    img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/be1bbb9f718e4a94ba10ab220129295f_9366/Duramo_SL_Shoes_Svart_FV8794_01_standard.jpg",
    size:45,
    price:1299,
    season:"summer"
},
{
    item:"jacket",
    color:"Pink",
    brand:"adidas",
    img:"https://cdn.shopify.com/s/files/1/1123/3534/products/adidas-pink-track-top-1_2000x2000.jpg?v=1499260442",
    size:"large",
    price:799,
    season:"summer"
},
{
    item:"hoodie",
    color:"White",
    brand:"gucci",
    img:"https://hoodiemerch.com/wp-content/uploads/2020/11/Gucci-White-Hoodie.jpg",
    size:"medium",
    price:599,
    season:"witer"
},
{
    item:"socks",
    color:"Black",
    brand:"rick owens",
    img:"https://www.birkenstock.com/on/demandware.static/-/Sites-master-catalog/default/dw3306e8fa/14772/14772.jpg",
    size:45,
    price:2500,
    season:"all"
}
]
 let bugg = 0

let filterFunction =(item)=>{
    item.forEach(e=>{
    let list = document.createElement("p")
    let img = document.createElement("img")
    let buyBtn = document.createElement("button")
    let card = document.createElement("div")
    buyBtn.classList="buyBtn"
    buyBtn.innerText="Add to cart"
    img.classList="img"
    img.src=e.img
    list.classList="list-text"
    card.classList="goodies-container"
    list.innerText=`${e.item} \n Brand: ${e.brand} \n Size: ${e.size} \n Price: ${e.price}kr`
    card.appendChild(img)
    card.appendChild(list)
    card.appendChild(buyBtn)
    filteredPage.appendChild(card)
                    
    
    buyBtn.addEventListener("click", () =>{
    buyItems.push(e)
    span1.innerText++
    total.innerText= Number(total.innerText) + e.price
    })
    })
}

shoppingCart.addEventListener("click",()=>{
    if (bugg===0){
        bugg=1
    checkoutPage.style.display="flex"
    goodies.style.display="none"
    filteredPage.style.display="none"
    let header = document.createElement("h1")
    header.innerText="Checkout"
    header.classList="checkoutHeader"
    checkoutPage.appendChild(header)
    buyItems.forEach(e=>{
        let ol = document.createElement("ol")
        let list = document.createElement("li")
        list.innerText=`1x ${e.brand} ${e.item}`
        checkoutPage.appendChild(ol)
        ol.appendChild(list)
    })
    }
})

filter.addEventListener("click", ()=>{
    
        
    filterContainer.style="display: block;"
    
    })

filterBtn.addEventListener("click", ()=>{
    input.forEach(e=>{
        goodies.innerText=""
        if (e.checked){
            if (e.id==="shoes"){
                filterFunction(shoes)
            }if(e.id==="jacket"){
                filterFunction(jackets)
            }if  (e.id==="hoodie"){
                filterFunction(hoodies)
            }if  (e.id==="socks"){
                filterFunction(socks)

            }
            
        }
    })
    
})

let shoes = varor.filter(e=>{
    if (e.item=== "shoes"){
        return e
    }
})
let jackets = varor.filter(e=>{
    if (e.item=== "jacket"){
        return e
    }
})
let hoodies = varor.filter(e=>{
    if (e.item=== "hoodie"){
        return e
    }
})
let socks = varor.filter(e=>{
    if (e.item=== "socks"){
        return e
    }
})


varor.forEach(e=>{
    // toUpperCase(goodies.item)
    let list = document.createElement("p")
    let img = document.createElement("img")
    let buyBtn = document.createElement("button")
    let card = document.createElement("div")
    buyBtn.classList="buyBtn"
    buyBtn.innerText="Add to cart"
    img.classList="img"
    img.src=e.img
    list.classList="list-text"
    card.classList="goodies-container"
    list.innerText=`Brand: ${e.brand} \n Size: ${e.size} \n Price: ${e.price}kr`
    card.appendChild(img)
    card.appendChild(list)
    card.appendChild(buyBtn)
    goodies.appendChild(card)
    
    
    buyBtn.addEventListener("click", () =>{
        buyItems.push(e)
        span1.innerText++
        total.innerText= Number(total.innerText) + e.price
    })
    
})

