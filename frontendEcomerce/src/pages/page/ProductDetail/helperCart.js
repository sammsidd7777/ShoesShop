export async function handleAddToCart(productId){
    try {
      let response = await fetch("http://localhost:5200/cart/add/"+productId, {credentials: "include"})
      if(!response.ok) throw new Error("Something went wrong!")
      response = await response.json()

      alert("Product add to your cart")

      // prodcutaddtocart("Added in cart")

      console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  }






   export async function handleAddToWish(item) {
      console.log(item)
      try {
        let responses = await fetch("http://localhost:5200/wish/add/"+ item , {credentials:"include"})
        if (!responses.ok) throw new Error("something went wrong")
        const data = responses = await responses.json()
        console.log(data)
  
      } catch (error) {
        console.log(error.message)
      }
  
    }

