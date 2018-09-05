class AjaxReq {
    getRestaurants() {
        return $.ajax({
            type: 'GET',
            url: '/getRestaurants'
        }).catch((err)=>{console.log(err)})
    }
}
var ajaxReq = new AjaxReq();
export default ajaxReq;