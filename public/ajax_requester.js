class AjaxRequester {
    getCityId(cityName) {
        return $.ajax({
            type: 'GET',
            beforeSend: function(request) {
                request.setRequestHeader('user-key', 'ce008e4a701de9bdddcd308959a440f5')
            },
            url: `https://developers.zomato.com/api/v2.1/cities?q=${cityName}`
        })
        .catch((err)=> {throw err})
    }
    searchRestaurants(cityID, cuisineID) {
        return $.ajax({
            type: 'GET',
            beforeSend: function(request) {
                request.setRequestHeader('user-key', 'ce008e4a701de9bdddcd308959a440f5')
            },
            url: `https://developers.zomato.com/api/v2.1/search?entity_id=${cityID}&entity_type=city&count=8&cuisines=${cuisineID}&sort=rating&order=desc`
        })
        .catch((err)=> {throw err})
    }
    voteForRestaurant(id){
        return $.ajax({
            type:'POST',
            url:'voted/id'
        })
    }
    addRestaurantsToDB(restaurantData) {
        return $.ajax ({
            type: 'POST',
            url: 'recommendations',
            data: {restaurantData: JSON.stringify(restaurantData)}
        })
        .catch((err)=> {throw err})
    }
    fetchCuisineByName(name){
        return $.ajax({
            type:'GET',
            url:'test/'+name,
        })
        .catch((err)=>{throw err})
    }
    refreshAjaxPage() {
        $ajax({
            
        })
    }
}
export default AjaxRequester