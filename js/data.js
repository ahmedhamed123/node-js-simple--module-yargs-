const fs = require("fs")


const addPerson = (id , fname , lname ,age, city) =>{
    const allData = loadData()

    const duplicatedDate = allData.filter((obj) => {
        return obj.id === id 
      })

    //   console.log(duplicatedDate)

      if (duplicatedDate.length == 0) {
        allData.push({
            id : id,
            fname : fname,
            lname : lname,
            age : age,
            city : city
         })
   
         saveAllData(allData)
      } else {
        console.log("ERROR DUPLICATED ID")
      }

}


//--------------------- Load Data -------------------

const loadData = () =>{
    try{
        const dataJson = fs.readFileSync("data10.json").toString()
        return JSON.parse(dataJson)
    }

    catch{
        return []
    }
}

//--------------Save AllData-------------------

const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData)
    fs.writeFileSync("data10.json",saveAllDataJson)
}


//---------------- Delete person -----------------

const deletePerson = (id) => {
    const allData = loadData()
    const dataToKeep=allData.filter((obj)=>{
        return obj.id != id
    })
    saveAllData(dataToKeep)

    console.log("You have deleted the Data of the Person Number "+id)
}


//--------------- Read Person Data -----------------

const readData = (id)=>{
    const allData = loadData()

    const itemNeeded = allData.find((obj)=>{
        return obj.id == id
    })

    if(itemNeeded){
        console.log("The Data of the Person you needed is => "+"id : "+itemNeeded.id+
        " , Name : "+itemNeeded.fname+" "+itemNeeded.lname+
        " , Age : "+itemNeeded.age+" , City : "+itemNeeded.city)
        
        
        // console.log(itemNeeded)

    }
    else{
        console.log("The id you Enter is NOT FOUND")
    }
}



//----------------------- List Data ---------------------

const listData =() =>{
    const allData = loadData()
    allData.forEach((obj) => {
        console.log("id : "+obj.id+" => "+obj.fname , obj.lname +" , "+ obj.age)

    });
}







//------------------------- Exports -----------------------

module.exports = {
    addPerson,
    deletePerson,
    readData,
    listData
}





//    node js/script.js add --id="10" --fname="Islam" --lname="Khaled" --age="30" --city="Sadat"

//    node js/script.js list

//    node js/script.js read  --id="5" 

//    node js/script.js delete  --id="5"
