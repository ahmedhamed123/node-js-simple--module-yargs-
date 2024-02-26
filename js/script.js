

const data = require("./data")

const yargs = require("yargs")

yargs.command({
    command:"add",
    describe : "To add an item ",
    builder :{
        id :{
            describe:"This is the id : ",
            demandOption : true 
        },
        fname : {
            describe: "this is the first name description in add command",
            demandOption: true,
            type : "string"
         },
         lname : {
           describe: "this is the last name description in add command",
           demandOption: true,
           type : "string"
        }
    },

    handler:(x) =>{
        data.addPerson(x.id,x.fname,x.lname,x.age,x.city)
    }

})

//----------------------- delete -----------

yargs.command({
    command: "delete",
    describe : "To Delete an item ",
    builder : {
        id:{
            describe : "this is the id desc in delete command",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x)=>{
        data.deletePerson(x.id)
    }

})


//-------------------------- read ----------------

yargs.command({
    command : "read",
    describe : "To Read Data",
    builder : {
        id:{
            describe : "this is the id desc in read command",
            demandOption : true,
            type : "string"
        }
    },
    handler: (x)=>{
        data.readData(x.id)
    }
})

//-------------------List Data ---------------------

yargs.command ({
    command : "list",
    describe : "to list data" ,
    handler : () => {
      data.listData()
    }
  })


/////-----
yargs.parse()

