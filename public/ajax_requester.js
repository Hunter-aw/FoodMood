class AjaxRequester {
    getCityId(cityName) {
        $.ajax({
            type: 'GET',
            beforeSend: function(request) {
                request.setRequestHeader('user-key', 'ce008e4a701de9bdddcd308959a440f5')
            },
            url: `https://developers.zomato.com/api/v2.1/cities?q=${cityName}`,
            success: (data) => {
                return data.location_suggestions[0].id
            }
        })
    }
    searchRestaurants(cityID, cuisineID) {
        return $.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityID}&entity_type=city&count=8&cuisines=${cuisineID}&sort=rating&order=desc`)
    }
    addRestaurantsToServer(restaurantData) {
        return $.ajax ({
            type: 'POST',
            url: 'saveRestaurants',
            data: restaurantData
        })
    }
}
export default AjaxRequester