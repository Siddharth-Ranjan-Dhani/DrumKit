function HouseKeeper (name, age, yearsOfExperience, language) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.language = language;
    this.moveLuggage = function(){
        alert("hii");
    }
};

var audio = new HouseKeeper("Siddharth", 23, 10, "Hindi");

audio.moveLuggage();