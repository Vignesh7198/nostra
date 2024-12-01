menuIcon = document.getElementById('menuicon')
sideBar = document.getElementById('sidebar')
closeIcon = document.getElementById('close-icon')
prodContainer = document.querySelectorAll("#products_list>div")
prodContainerNew = []

menuIcon.addEventListener('click', function () {
   sideBar.style.right = 0
})

closeIcon.addEventListener('click', function () {
   sideBar.style.right = "-50%";
})

productsList=[];


let colors = document.querySelectorAll(".Colors")

colors.forEach((color)=>{
    color.addEventListener('change',function(){
        if(!productsList.includes(color.defaultValue)){
            if(this.checked){
            productsList.push(color.defaultValue)
            prodContainer.forEach((products)=>{
                textContent = products.querySelector("h1").textContent.toLowerCase().trim()
                textArray = textContent.split(" ");
                textArray.forEach((text)=>{
                    if(productsList.includes(text)){
                        products.style.display="block"
                    }
                    else if(!productsList.includes(text)){
                        products.style.display="none"
                    }
                })
               
             })
        }
        }
        else{
            if(!this.checked){

                index = productsList.indexOf(color.defaultValue) //red
                productsList.splice(index,1)

            }

            prodContainer.forEach((prod)=>{
               prodArray =  prod.querySelector('h1').textContent.toLowerCase().trim().split(" ")
               console.log(prodArray,color.defaultValue)
                    if(prodArray.includes(color.defaultValue)){
                        console.log("test")

                        prod.style.display ='none'
                    }

            })
            if(productsList.length==0){
                prodContainer.forEach((prod)=>prod.style.display="flex")
            }
        }
    })
})


let occasions = document.querySelectorAll(".Occasion")

occasions.forEach((occasion)=>{
   occasion.addEventListener('change',function(){
       if(!productsList.includes(occasion.defaultValue)){
           if(this.checked){
           productsList.push(occasion.defaultValue)
           prodContainer.forEach((products)=>{

            stopLoop=false;
                  if(!stopLoop){
               textContent = products.querySelector("h1").textContent.toLowerCase().trim()
               textArray = textContent.split(" ");

               textArray.forEach((text)=>{
                if(!stopLoop){
                   if(productsList.includes(text)){
                       products.style.display="flex"
                       stopLoop=true;
                   }
                   else if(!productsList.includes(text)){
                       products.style.display="none"

                   }
                }
                
               })
            }
            })
       }
       }
       else{
           if(!this.checked){

               index = productsList.indexOf(occasion.defaultValue) //red
               productsList.splice(index,1)

           }

           prodContainer.forEach((prod)=>{
              prodArray =  prod.querySelector('h1').textContent.toLowerCase().trim().split(" ")
              console.log(prodArray,occasion.defaultValue)
                   if(prodArray.includes(occasion.defaultValue)){

                       prod.style.display ='none'
                   }
                   else{
                    prod.style.display ='flex'

                   }

           })
           if(productsList.length==0){
               prodContainer.forEach((prod)=>prod.style.display="flex")
           }
       }
   })
})




