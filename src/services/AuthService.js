export const login = (email) => {
    localStorage.setItem('email', email)
};

export const getUser = () => {
    let email = localStorage.getItem('email');
    return email
};

export const isAutentication = () => {
    return Boolean(getUser());
};

