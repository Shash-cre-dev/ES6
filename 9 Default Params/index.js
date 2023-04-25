//DEFAULT PARAMS

const leadSinger = () => {
    console.log("Chris Martin is the lead singer of Cold Play");
}

leadSinger();

//Chris Martin is the lead singer of Cold Play

const leadSinger1 = (artist) => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger1("Chris Martin");

//Chris Martin is the lead singer of Cold Play


//But if the user forgot to input the value
//or by any means if the parameter is not passed

const leadSinger2 = (artist) => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger2();
//here parameter not passed

//undefined is the lead singer of Cold Play


//To remove undefined, default can be used
//default will work when you have not passed a parameter


const leadSinger3 = (artist = "someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger();
//someone is the lead singer of Cold Play

//But when a parameter is passed, it will overide the default

const leadSinger4 = (artist = "someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger("Chris Martin");
//Chris Martin is the lead singer of Cold Play
