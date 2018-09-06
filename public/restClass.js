class Restaurant {
    constructor (singleRestData) {
        this.name = singleRestData.name
        this.address = singleRestData.location.address
        this.averageCostForTwo = singleRestData.average_cost_for_two
        this.userRating = singleRestData.user_rating.aggregate_rating
        this.ratingColor = singleRestData.user_rating.rating_color 
        this.image = singleRestData.featured_image
        this.menuUrl = singleRestData.menu_url
        this.id = singleRestData.id
        this.currency = singleRestData.currency
        this.votes = 0;
    }
}

class RestRecs {
    constructor (allRestData) {
        this.allRestData = allRestData.restaurants
        this.restArray = []
    }
    createRestArray () {
        for (let rest of this.allRestData) {
            let newRest = new Restaurant (rest.restaurant)
            this.restArray.push(newRest)
        }
    } 
}


export default RestRecs