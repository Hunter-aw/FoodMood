class renderer {
    constructor(){
        this.$cuisines = $(".cuisines");
        this.$cuisinesTemplate = $('#cuisines-template').html();
        this.$restTemplate = $('#rest-template').html();
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
    renderRestRecs(restaurants) {
        this.$cuisines.empty();
        let template = Handlebars.compile(this.$restTemplate);
        let newHTML = template({restaurants});
        this.$cuisines.append(newHTML);
    }

}

export default renderer