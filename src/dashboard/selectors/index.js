import {createSelector} from 'reselect';
import * as APIUtils from  '../../utils/APIUtils';

export const getIsFetching = (state) => state.dashboard.isUserFetching

export const getIsFetched = (state) => state.dashboard.isUserFetched

export const getIsFetchError = (state) => state.dashboard.isUserFetchError

export const getFetchResponse = (state) => state.dashboard.userFechResponse

export const getFetchSuccess = createSelector(
    getFetchResponse, getIsFetched, getIsFetchError, 
    (response, isFetched, isError) => {
        if (isFetched && !isError && !!response) {
            return response
        }
    } 
)


const leads = [{
    "date": "2013-09-20",
    "inventory": "Suzuki",
    "model": "Swift",
    "city": "Bangalore",
    "total_leads": 4,
    "total_sales": 2,
    "total_cash": 289000,
    "discount": 20000
}, {
    "date": "2013-09-20",
    "inventory": "Tata",
    "model": "Nano",
    "city": "Bangalore",
    "total_leads": 4,
    "total_sales": 1,
    "total_cash": 189000,
    "discount": 10000
}, {
    "date": "2013-09-27",
    "inventory": "Tata",
    "model": "Nano",
    "city": "Bangalore",
    "total_leads": 1,
    "total_sales": 3,
    "total_cash": 189000,
    "discount": 14000
}, {
    "date": "2013-09-27",
    "inventory": "Tata",
    "model": "Nano",
    "city": "Chennai",
    "total_leads": 1,
    "total_sales": 2,
    "total_cash": 150000,
    "discount": 14000
}, {
    "date": "2013-09-27",
    "inventory": "Tata",
    "model": "Indica",
    "city": "Chennai",
    "total_leads": 7,
    "total_sales": 3,
    "total_cash": 381000,
    "discount": 14000
}, {
    "date": "2013-09-27",
    "inventory": "Tata",
    "model": "Indica",
    "city": "Bangalore",
    "total_leads": 7,
    "total_sales": 4,
    "total_cash": 481000,
    "discount": 14000
}, {
    "date": "2013-09-27",
    "inventory": "Tata",
    "model": "Vista",
    "city": "Mumbai",
    "total_leads": 3,
    "total_sales": 1,
    "total_cash": 181000,
    "discount": 14000
}, {
    "date": "2013-09-27",
    "inventory": "Tata",
    "model": "Vista",
    "city": "New Delhi",
    "total_leads": 1,
    "total_sales": 1,
    "total_cash": 72000,
    "discount": 9000
}, {
    "date": "2013-09-27",
    "inventory": "Tata",
    "model": "Vista",
    "city": "Hyderabad",
    "total_leads": 1,
    "total_sales": 0,
    "total_cash": 0,
    "discount": 0
}, {
    "date": "2013-11-13",
    "inventory": "Hyundai",
    "model": "Eon",
    "city": "Chennai",
    "total_leads": 7,
    "total_sales": 4,
    "total_cash": 442000,
    "discount": 14000
}, {
    "date": "2013-11-13",
    "inventory": "Hyundai",
    "model": "Eon",
    "city": "Secunderabad",
    "total_leads": 1,
    "total_sales": 1,
    "total_cash": 92000,
    "discount": 7000
}]