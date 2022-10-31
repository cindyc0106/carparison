const getUserById = function(data, id) {
  let result = [];
  for (let dat of data) {
    if (dat.id === id) {
      result.push(dat)
    }
  }
  return result[0];
}

const getReviewsByCarId = function(reviews, id) {
  let results = [];
  for (let review of reviews) {
    if (review.car_id === id) {
      results.push(review)
    }
  }
  return results;
}

export {
  getUserById,
  getReviewsByCarId
};