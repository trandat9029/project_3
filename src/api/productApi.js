import axiosClient from "./axiosClient";

const productApi = {
    async getAll(params){

        //Transform _page to _start
        // const newParams = {...params};
        // newParams._start = !params._page || params._page <= 1 
        // ? 
        // 0: (params._page - 1) * (params._limit || 20); 
        
        //Remove un-needed key
        // delete newParams._page;

        const page = params._page || 1;
        const limit = params._limit || 12;
        const skip = (page-1) * limit;


        //Fetch product list + count
        const productList =  await axiosClient.get('/products', {
            params: {
                limit,
                skip,
        }});
        // const count =  await axiosClient.get('/products/count', {params: newParams});

        //Build response and return 
        return{
            data: productList.products,
            pagination: {
                // page: params._page,
                // limit: params._limit,
                // total: count,
                page,
                limit,
                total : productList.total,
            },
        };
    },
    get(id){
        const url = `/products/${id}`;
        return axiosClient.get(url)
    },
    add(data){
        const url = '/products';
        return axiosClient.post(url, data)
    },
    update(data){
        const url = `/products/${data.id}`;
        return axiosClient.patch(url, data)
    },
    remove(id){
        const url = `/products/${id}`;
        return axiosClient.delete(url)
    }
};


export default productApi;