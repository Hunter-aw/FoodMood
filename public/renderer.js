class renderer {
    constructor(){
        this.$cuisines = $(".cuisines");
        this.$cuisinesTemplate = $('#cuisines-template').html();
        this.$restTemplate = $('#rest-template').html();
    }
    rendercuisines(array){
        this.$cuisines.empty();
        let cuisineObj = {cuisines:array}
        let template = Handlebars.compile(this.$cuisinesTemplate);
        let newHTML = template(cuisineObj);
        console.log(newHTML);
        this.$cuisines.append(newHTML);
    }
    renderRestRecs(restaurants) {
        this.$cuisines.empty();
        let template = Handlebars.compile(this.$restTemplate);
        let newHTML = template({restaurants});
        this.$cuisines.append(newHTML);
    }
    noCityError() {
        this.$cuisines.empty();
        this.$cuisines.append("<h2> We currently do not have restaurants for this city, please try again")
    }

}

export default renderer