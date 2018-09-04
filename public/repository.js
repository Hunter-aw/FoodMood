class host{
    constructor(ajaxRequest){
        this.cuisines = []
        // this.ajax = ajaxRequest
    }
    addCuisines(array){
        for(let x in array){
            this.cuisines.push(array[x]);
        }
    }
}

export default host
