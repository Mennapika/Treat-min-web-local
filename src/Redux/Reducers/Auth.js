const authReducerDefault = {
    isLogin: false,
    name: "",
    email: "",
    phone: "",
    gender: "",
    birth: "",
    id: ""
};

const authReducer = ((state = authReducerDefault, action) => {
    switch(action.type){
        case 'SET_AUTH':
            return {...state, isLogin: action.isLogin};
        case 'SET_USER_PROFILE':
            return {...state, ...action.profile}
        default: return state;
    }
})

export default authReducer;