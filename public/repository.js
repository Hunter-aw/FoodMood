import RestRecs from './restClass.js'

class host{
    constructor(ajaxRequester){
        this.cuisines = []
        this.restaurants = []
        this.ajax = ajaxRequester
        this.city = ""
        this.cityId;
        this.cuisineId = 0;
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
    getRestauantRecs() {
        return this.ajax.searchRestaurants(this.cityId, this.cuisineId)
        .then((data) => {
            let restData = new RestRecs(data)
            restData.createRestArray()
            this.ajax.addRestaurantsToDB(restData.restArray);
            return restData.restArray
        })
    }
}

export default host
