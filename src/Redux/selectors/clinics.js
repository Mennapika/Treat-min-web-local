const getVisibleClinics = (clinics, {text, speciality, drName, hospital, price, city, region, sortBy}) => {
    return clinics.filter((clinic) => {
        const textMatch = text === '' || clinic.doctor.name.toLowerCase().includes(text.toLowerCase()) ||
                         clinic.specalist.toLowerCase().includes(text.toLowerCase()) ||
                         clinic.hospital.name.toLowerCase().includes(text.toLowerCase()) || false;
        const specialityMatch = (speciality === '') || (clinic.specalist === speciality);
        const drNameMatch = (drName === '') || (clinic.name === drName);
        const hospitalMatch = (hospital === '') || (clinic.hospital.name === hospital);
        const priceMatch = (price === 0) || (clinic.price <= price);
        const genderMatch = true //there is no field in card related to gender
        const cityMatch = (city === '') || (clinic.hospital.city === city);
        const regionMatch = (region === '') || (clinic.hospital.area === region);
        return cityMatch && textMatch && specialityMatch && drNameMatch && hospitalMatch && priceMatch && genderMatch  && regionMatch;
    }).sort((a, b) => {
        if(sortBy === 'A to Z' || sortBy === 'ا الى ي'){
            return a.doctor.name.toLowerCase() < b.doctor.name.toLowerCase()? -1 : 1;
        }
        else if(sortBy === 'Z to A' || sortBy === 'ي الى ا'){
            return a.doctor.name.toLowerCase() < b.doctor.name.toLowerCase()? 1 : -1;
        }else if(sortBy === 'Lowest Price' || sortBy === 'اقل سعر'){
            return a.price < b.price? -1 : 1;
        }else if(sortBy === 'Highest Price' || sortBy === 'اغلى سعر'){
            return a.price < b.price? 1 : -1;
        }
    });
}

export default getVisibleClinics;