import RestRecs from './restClass.js'

class host{
    constructor(ajaxRequester){
        this.cuisines = []
        this.ajax = ajaxRequester
        this.city = ""
        this.cityId = 0
        this.cuisineId = 0
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
    }
    getRestauantRecs() {
        return this.ajax.searchRestaurants(this.cityId, this.cuisineId)
        .then((data) => {
            let restData = new RestRecs(data)
            restData.createRestArray()
            console.log(restData.restArray)
            this.ajax.addRestaurantsToDB(restData.restArray)
        })
    }
}

export default host
