import RestRecs from './restClass.js'

class host{
    constructor(ajaxRequester){
        this.cuisines = []
        this.restaurants = []
        this.ajax = ajaxRequester
        this.city = ""
        this.cityId;
        this.cuisineId;
        this.restArrayId = 0;
        this.voted = false;
    }
    addCity(city){
        this.city = city
        this.ajax.getCityId(city)
        .then((data) => {
            this.cityId = data.location_suggestions[0].id

        })
    }
    addCuisines(array){
        for(let x in array){
            this.cuisines.push(array[x]);
        }
    }
    addCuisineId(selectedCuisine) {
        this.cuisineId = selectedCuisine
        console.log(this.cuisineId)
    }
    addRestaurants(array){
        for(let x in array){
            this.restaurants.push(array[x]);
        }
    }
    searchCuisine(name){
        return this.ajax.fetchCuisineByName(name).then((data)=>{
           this.cuisineId =(data.cuisine_id);
        })
    }
    getRestauantRecs() {
        return this.ajax.searchRestaurants(this.cityId, this.cuisineId)
        .then((data) => {
            let restData = new RestRecs(data)
            restData.createRestArray()
            this.ajax.addRestaurantsToDB(restData.restArray)
            .then((data)=>{
                this.restArrayId = data._id
            })
            return restData.restArray
        })
    }
    voteForRestaurant(id){
        return this.ajax.voteForRestaurant(id)
    }
    seeResults(){
        return this.ajax.getResults().then((data)=>{
            console.log(data)
            let array = [];
            for(let x of data){
                if(array.length === 0){
                    array.push(x);
                }
                else if(array[0].recArray.votes < x.recArray.votes){
                    array.splice(0,1);
                    array.push(x);
                }
            }
            return array[0].recArray
        })
    }
    // refreshPage() {
    //     this.ajax.refreshAjaxPage()
    // } 
    // IN PROGRESS
}

export default host
