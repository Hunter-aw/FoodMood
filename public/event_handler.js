class eventsHandler {
    constructor(repository, render) {
        this.repository = repository;
        this.render = render;
        this.$city = $(".city")
        this.$cuisines = $(".cuisines");
        this.array =  [
        {id:25,cuisine_name: "Chinese"},
        {id:73,cuisine_name: "Mexican"},
        {id:55,cuisine_name: "Italian"},
        {id:959, cuisine_name: "Donuts"}
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
                $('.city-text').append(`City: ${city}`)
            }
        });
    }
    getRestaurantsbyCuisine() {
        this.repository.getRestauantRecs()
        .then((data) => {
            this.repository.addRestaurants(data);
            console.log(this.repository.restaurants)
            // this.render.renderRestRecs(this.repository.restaurants);
        })
    }

    searchCuisines(){
        $('.cuisines').on('click', '#addCuisine', (()=>{
        let cuisineName = $('.cuisineName').val()
        this.render.hostLoadingPage()
        this.repository.searchCuisine(cuisineName)
        .then(() => this.getRestaurantsbyCuisine())
        }))
    }

    chooseCuisine() {
        $('.cuisines').on('click', '.cuisine', (event) => {
            let cuisineId = $(event.currentTarget).data().id;
            console.log(this)
            this.repository.addCuisineId(cuisineId);
            this.render.hostLoadingPage()
            this.getRestaurantsbyCuisine()
            })
        }
    hostRestaurantRender() {
        $('.cuisines').on('click', '.voteNow', () => {
            this.render.renderRestRecs(this.repository.restaurants);
        })
    }
    searchAgain() {
        $('.cuisines').on('click', '.search-again', () => {
            this.repository.refreshPage()
        })
    } 
}
export default eventsHandler;