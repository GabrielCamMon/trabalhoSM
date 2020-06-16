import uuid from "uuid";
import api from '../../axios/api';


export const addImageData = imageUrl => ({ type: "ADD_IMAGE_DATA", imageUrl });


export const startAddImage =  (imageUrl = {}) => {
    return dispatch => {
        console.log(imageUrl)
          api.post('/', imageUrl).then(function (response) {
            dispatch(addImageData(response.data.result));
            console.log(response);
        }).catch(function (error) {
            console.log(error.response);
        });

    };
};

