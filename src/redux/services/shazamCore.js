import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';




    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1' ,
        prepareHeaders: (headers) => {
         headers.set('X-RapidAPI-Key', '90d9cad4aemsh0c2ae781060c8c2p1a0ee0jsna36176967a11');

        return headers;
      },
     }),
        endpoints: (builder) => ({
          getTopCharts: builder.query({ query: () => '/charts/world' }),  
        }),


    })

    export const {
    useGetTopChartsQuery, 
    } = shazamCoreApi
    