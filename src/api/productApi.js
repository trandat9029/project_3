import axiosClient from "./axiosClient";

const productApi = {
    async getAll(params){

        const page = params._page || 1;
        const limit = params._limit || 9;
        const skip = (page-1) * limit;

        

        //Fetch product list + count
        let url = '/products';
        if (params.categorySlug) {
            url = `/products/category/${params.categorySlug}`;
        }

        const productList = await axiosClient.get(url, {
        params: {
            limit,
            skip,
            sortBy: params.sortBy,
            order: params.order,
            ...(params.price_gte && { price_gte: params.price_gte }),
            ...(params.price_lte && { price_lte: params.price_lte }),
        },
        });

        if (params.categorySlug) {
            return {
              data: productList.products,
              pagination: {
                limit,
                page,
                total: productList.total || productList.products?.length || 0,
              }
            };
          }
        // const count =  await axiosClient.get('/products/count', {params: newParams});

        //Build response and return 
        return{
            data: productList.products,
            pagination: {
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