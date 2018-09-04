class eventsHandler {
    constructor(repository, render) {
        this.repository = repository;
        this.render = render;
        this.$cuisines = $(".cuisines");
        this.array = [{name:"guy",age:22},{name:"alon",age:30},{name:"tomer",age:40},{name:"tomer",age:40},{name:"tomer",age:40}];
    }
    showCuisines() {
        $('.serachCuisines').on('click', () => {
            let $input = $('.cityName');
            if ($input.val() === "") {
                alert("Please enter text!");
            } else {
                this.repository.addCuisines(this.array);
                this.render.rendercuisines(this.repository.cuisines)
            }
        });
    }
}
export default eventsHandler;