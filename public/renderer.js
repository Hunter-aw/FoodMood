class renderer {
    constructor(){
        this.$cuisines = $(".cuisines");
        this.$cuisinesTemplate = $('#cuisines-template').html();
        this.$restTemplate = $('#rest-template').html();
        this.$hostLoadingPage = $('#host-loading-template').html();
        this.$winnerTemplate = $('#winner-template').html();
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
    hostLoadingPage() {
        this.$cuisines.empty();
        let cuisineObj = {}
        let template = Handlebars.compile(this.$hostLoadingPage);
        let newHTML = template(cuisineObj);
        console.log(newHTML);
        this.$cuisines.append(newHTML);
    }
    noCityError() {
        this.$cuisines.empty();
        this.$cuisines.append("<h2> We currently do not have restaurants for this city, please try again")
    }
    rederResults(winnerData) {
        this.$cuisines.empty();
        let template = Handlebars.compile(this.$winnerTemplate);
        let newHTML = template(winnerData);
        this.$cuisines.append(newHTML)
    }

}

export default renderer