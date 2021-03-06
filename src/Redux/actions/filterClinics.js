//Clinics Actions
export const setFetchHospitals = (fetchHospital = false) => {
    return {
        type: 'SET_FETCH_HOSPITALS',
        fetchHospital
    }
}

export const setFetchCities = (fetchCity = false) => {
    return {
        type: 'SET_FETCH_CITY',
        fetchCity
    }
}

export const setFetchRegions = (fetchRegion = false) => {
    return {
        type: 'SET_FETCH_REGION',
        fetchRegion
    }
}
export const setRegionDR = (region = '') => {
    return {
        type: 'SET_REGION_CLINIC',
        region
    }
}

export const setCityDR = (city = '') => {
    return {
        type: 'SET_CITY_CLINIC',
        city
    }
}

export const fetchClinic = (fetch = false) => {
    return {
        type: 'SET_FETCH_CLINIC',
        fetch
    }
}

export const fetchEntities = (fetchEntities = false) => {
    return {
        type: 'SET_FETCH_ENTITIES',
        fetchEntities
    }
}
export const setTextFilter = (text = '') => {
    //for searching
    return {
        type: 'SET_TEXT_FILTER_DR',
        text
    };
}

export const setSpeciality = (speciality = '') => {
    return {
        type: 'SET_SPECIALITY_DR',
        speciality
    };
}

export const setDrName = (drName = '') => {
    return {
        type: 'SET_DR_NAME',
        drName
    };
}

export const setHospitalName = (hospital = '') => {
    return {
        type: 'SET_HOSPITAL_NAME_DR',
        hospital
    };
}

export const setPrice = (price = 0) => {
    return {
        type: 'SET_PRICE_DR',
        price
    };
}

export const setSideBar = (isSideBar = true) => {
    return {
        type: 'ACTIVE_SIDE_BAR',
        isSideBar
    }
}

export const setSortBy = (sortBy = '') => {
    return {
        type: 'SORT_BY_DR',
        sortBy
    }
}

export const resetFilterClinics = () => {
    return {
        type: 'REST_FILTER_CLINICS'
    }
}