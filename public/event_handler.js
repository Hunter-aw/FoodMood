class eventsHandler {
    constructor(repository, render) {
        this.repository = repository;
        this.render = render;
        this.$city = $(".city")
        this.$cuisines = $(".cuisines");
        this.array = [{cuisine_id: 1, cuisine_name: "American"},
                      {cuisine_id: 25, cuisine_name: "Chinese"},
                      {cuisine_id: 73, cuisine_name: "Mexican"},
                      {cuisine_id: 55, cuisine_name: "Italian"}
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
            let cuisineId = $('.cuisine').data().id
            this.repository.addCuisineId(cuisineId)
            this.repository.getRestauantRecs()
            .then((data) => {
                console.log(data)
                this.render.renderRestRecs(data)})
        })
    }
}
export default eventsHandler;