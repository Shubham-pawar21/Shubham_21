const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const expressError = require("../utils/expressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAurhor,
} = require("../middleware.js");

const reviewController = require("../controllers/review.js");

//Post review route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);

//Delete review route
router.delete(
  "/:reviewID",
  isLoggedIn,
  isReviewAurhor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
