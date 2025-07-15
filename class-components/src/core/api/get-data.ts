export const get = async () => {
    const url = 'http://stapi.co/api/v1/rest/organization/search?name=21st'
    try {
        const response = await fetch(url,{method: 'GET'})
       if (!response.ok) {
        throw  new Error ('responce hasn`t been got');
       }
       const data = await response.json()
       console.log(data)
    } catch (err) {
        console.error(err);
    }
}



class ApiService {
    categoryEndpont :string
    searchEndpoint: string
    constructor (_categoryEndpont: string, _searchEndpoint:string) {
        this.categoryEndpont = _categoryEndpont
        this.searchEndpoint = _searchEndpoint
    }

    private createUrl = ():string => {
        const url = `https://stapi.co/api/v1/rest/${this.categoryEndpont}/serch?`
        return url
    }
}



