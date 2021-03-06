const getVisibleEntities = (entities) => {
    return entities.sort((a, b) => {
        return a.name.toLowerCase() < b.name.toLowerCase()? -1 : 1;
    });
}

export default getVisibleEntities;