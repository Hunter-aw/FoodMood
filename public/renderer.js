class renderer {
    constructor(){
        this.$cuisines = $(".cuisines");
        this.$cuisinesTemplate = $('#cuisines-template').html();
    }
    rendercuisines(array){
        this.$cuisines.empty();
        let template = Handlebars.compile(this.$cuisinesTemplate);
        for (let x in array) {
          let newHTML = template(array[x]);
          console.log(newHTML);
          this.$cuisines.append(newHTML);
        }
    }

}

export default renderer