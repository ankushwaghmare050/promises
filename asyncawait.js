console.log("person1 : shows ticket")
console.log("person2 : shows ticket")



async function preMovie() {

    let buyTicket = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("I buy your ticket")
        },5000)
    })


    let getPopcorn = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("I buy your Popcorn")
        },2000)
    })


    let getCandy = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("I buy your Candy")
        },1000)
    })


    let geCoke = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("I buy your Coke")
        },2000)
    })


    let  getColdDrinks  = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("I buy your ColdDrink")
        },1000)
    })



    let gticket = await buyTicket
    console.log("Done:" + gticket)

    let gpopcorn = await getPopcorn
    console.log("Done:" + gpopcorn)

    let gcandy = await getCandy
    console.log("Done:" + gcandy)

    let gcoke = await geCoke
    console.log("Done:" + gcoke)

    let gcolddrink = await getColdDrinks
    console.log("Done:" + gcolddrink)




    return [gticket,gpopcorn,gcandy,gcoke,gcolddrink]



      

}


preMovie().then()
  





console.log("person4 : shows ticket")
console.log("person5 : shows ticket")
console.log("person6 : shows ticket")