function HausKeeper(name , age , hasworkpermit , languages){
    this.name = name ;
    this.age = age;
    this.hasworkpermit = hasworkpermit;
    this.languages = languages;
    this.clean = function(){
        alert("cleaning now ");
    }
}

var hausKeeper1 = new HausKeeper("Tom" , 12 , true, ["english" , "german"]);