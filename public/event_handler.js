class eventsHandler {
    constructor(repository, render) {
        this.repository = repository;
        this.render = render;
        this.$city = $(".city")
        this.$cuisines = $(".cuisines");
        this.array =  [
        {id:25,cuisine_name: "Chinese"},
        {id:73,cuisine_name: "Mexican"},
        {id:55,cuisine_name: "Italian"}
      ]
    }
    showCuisinesforCity() {
        $('#addCity').on('click', () => {
            let city = $('.cityName').val();
            console.log(city)
            if (city === "") {
                alert("Please enter text!");
            } else {
                this.repository.addCuisines(this.array);
                this.render.rendercuisines(this.repository.cuisines)
                this.repository.addCity(city)
            }
        });
    }

    chooseCuisine() {
        $('.cuisines').on('click', '.cuisine', () => {
            let cuisineId = $('.cuisine').data().id;
            this.repository.addCuisineId(cuisineId);
            this.repository.getRestauantRecs()
            .then((data) => {
                this.repository.addRestaurants(data);
                console.log(this.repository.restaurants)
                this.render.renderRestRecs(this.repository.restaurants);
            })
        })
    }
  

}
export default eventsHandler;