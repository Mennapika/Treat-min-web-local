//filter clinic reducer

const filterReducerDefaultState = {
    text: '',
    speciality: '',
    drName: '',
    hospital: '',
    price: 0,
    gender: '',
    sortBy: '',
    city: '',
    region: '',
    isSideBar: true
    //sort by ==> 'A to Z' || 'Z to A' || 'Lowest Price' || 'Highest Price' || 'Date'
};

const filterClinicsReducer = ((state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_CITY_CLINIC':
            return {...state, city: action.city};
        case 'SET_REGION_CLINIC':
            return {...state, region: action.region}
        case 'REST_FILTER_CLINICS': {
            return { ...filterReducerDefaultState }
        }
        case 'SET_TEXT_FILTER_DR':
            return { ...state, text: action.text };
        case 'SET_SPECIALITY_DR':
            return { ...state, speciality: action.speciality };
        case 'SET_DR_NAME':
            return { ...state, drName: action.drName };
        case 'SET_HOSPITAL_NAME_DR':
            return { ...state, hospital: action.hospital };
        case 'SET_PRICE_DR':
            return { ...state, price: action.price };
        /*case 'SET_GENDER':
            return {...state, gender: action.gender};*/
        case 'SORT_BY_DR':
            return { ...state, sortBy: action.sortBy }
        case 'ACTIVE_SIDE_BAR':
            return {...state, isSideBar: action.isSideBar}
        default: return state;
    }
});

export default filterClinicsReducer;