import axios from "axios";

const baseUrl = 'http://localhost:8000/';

const axiosProvider = axios.create({
    baseURL: baseUrl,
    headers : {
        'Content-type': 'application/json',
        accept: 'application/json',
    }
});

axiosProvider.interceptors.response.use(
    (response) => {
        return response
    },
    async function(error){
        const originalRequest = error.config;

        if (typeof error.response === 'undefined'){
            alert(
                'A server/network error occured. ' +
                'Looks like CORS might be the problem. ' +
                'Sorry about this - we will get it fixed shortly.'
            );
            return Promise.reject(error);
        }

        if(error.response.status === 401 && originalRequest.url === baseUrl + 'refresh/'){
            window.location.href = '/';
            return Promise.reject(error)
        }

        if(error.response.data.code === 'token_not_valid' && error.response.status === 401 && error.response.statusText === 'Unauthorized'){
            const refreshToken = localStorage.getItem('refresh_token');

            if(refreshToken){
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

                const now = Math.ceil(Date.now() / 1000);

                if(tokenParts.exp > now){
                    return axiosProvider.post('refresh/', { refresh: refreshToken }).then((response) => {
                        localStorage.setItem('access_token', response.data.access);
                        localStorage.setItem('refresh_token', response.data.refresh);

                        axiosProvider.defaults.headers['Authorization'] = 'JWT ' + response.data.access;
                        originalRequest.headers['Authorization'] = 'JWT ' + response.data.access;

                        return axiosProvider(originalRequest);
                    }).catch((err) => {
                        console.log(err);
                    })
                } else {
                    console.log('Refresh token is expired', tokenParts.exp, now);
                    window.location.href = '/';
                }
            } else {
                console.log('Refresh token is not available.');
                window.location.href = '/';
            }
        }

        // specific error handling
        return Promise.reject(error)
    }
)

export default axiosProvider;