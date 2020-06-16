export default (state = [], action) => {
  switch (action.type) {
    case "ADD_IMAGE_DATA":
      return action.imageUrl;
    default:
      return state;
  }
};