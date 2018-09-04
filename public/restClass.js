class Restaurant {
    constructor (singleRestData) {
        this.name = singleRestData.name
        this.address = singleRestData.location.address
        this.averageCostForTw0 = singleRestData.average_cost_for_two
        this.userRating = singleRestData.user_rating.aggregate_rating
        this.ratingColor = singleRestData.user_rating.rating_color 
        this.image = singleRestData.featured_image
        this.menuUrl = singleRestData.menu_url
    }
}

class RestRecs {
    constructor (allRestData) {
        this.allRestData = allRestData.restaurants
        this.restArray = []
    }
    createRestArray (restData) {
        for (rest in restData) {
            let newRest = new Restaurant (rest)
            this.restArray.push(newRest)
        }
    } 
}


export default RestRecs