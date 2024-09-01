import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import CONSTANTS from '../../Utils/constant';

export const imageApi = createApi({
	reducerPath: 'imageApi',
	baseQuery: fetchBaseQuery({ baseUrl: CONSTANTS.SWIGGY_IMAGE_BASE_URL }),
	endpoints: (builder) => ({
		getImage: builder.query({
			query: (id) => `upload/fl_lossy,f_auto,q_auto,w_660/${id}`,
		}),
	}),
});

export const { useGetImageQuery } = imageApi;
