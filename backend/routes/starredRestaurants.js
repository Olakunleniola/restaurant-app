const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { restaurants } = require("./restaurants");
const router = express.Router();
const ALL_RESTAURANTS = require("./restaurants").restaurants;

/**
 * A list of starred restaurants.
 * In a "real" application, this data would be maintained in a database.
 */
let STARRED_RESTAURANTS = [
  {
    id: "a7272cd9-26fb-44b5-8d53-9781f55175a1",
    restaurantId: "869c848c-7a58-4ed6-ab88-72ee2e8e677c",
    comment: "Best pho in NYC",
  },
  {
    id: "8df59b21-2152-4f9b-9200-95c19aa88226",
    restaurantId: "e8036613-4b72-46f6-ab5e-edd2fc7c4fe4",
    comment: "Their lunch special is the best!",
  },
];

/**
 * Feature 6: Getting the list of all starred restaurants.
 */
router.get("/", (req, res) => {
  /**
   * We need to join our starred data with the all restaurants data to get the names.
   * Normally this join would happen in the database.
   */
  const joinedStarredRestaurants = STARRED_RESTAURANTS.map(
    (starredRestaurant) => {
      const restaurant = ALL_RESTAURANTS.find(
        (restaurant) => restaurant.id === starredRestaurant.restaurantId
      );

      return {
        id: starredRestaurant.id,
        comment: starredRestaurant.comment,
        name: restaurant.name
      };
    }
  );

  res.json(joinedStarredRestaurants);
});



/**
 * Feature 7: Getting a specific starred restaurant.
 */

router.get("/:id", (req, res) => {
  const {id} = req.params;
  const starredRestaurantById = STARRED_RESTAURANTS.find(rest => rest.id === id) 
  if (starredRestaurantById) {
    res.status(200).json(starredRestaurantById)
  }else {
    res.status(400).send()
  }
});


/**
 * Feature 8: Adding to your list of starred restaurants.
 */

router.post("/", (req, res) => {
  const {id} = req.body;
  const starredRestaurant = ALL_RESTAURANTS.find(restaurant => restaurant.id === id);
  if (starredRestaurant) {
    isAlreadyStarred = STARRED_RESTAURANTS.some(starred_restaurant => starred_restaurant.restaurantId === starredRestaurant.id )
    if(!isAlreadyStarred) {
      const newId = uuidv4()
      const newStarredRestaurant = {id: newId, restaurantId: id, comment: null}
      STARRED_RESTAURANTS.push(newStarredRestaurant);
      res.status(200).send({
        id: newStarredRestaurant.id,
        comment: newStarredRestaurant.comment,
        name: starredRestaurant.name
      });
    }else {res.sendStatus(400)}
  }else {res.sendStatus(404)}
});


/**
 * Feature 9: Deleting from your list of starred restaurants.
 */
router.delete("/:id", (req, res) => {
  const {id} = req.params;
  const restaurantIndex = STARRED_RESTAURANTS.findIndex(itm => itm.id === id )
  if(restaurantIndex !== -1) {
    STARRED_RESTAURANTS.splice(restaurantIndex, 1);
    res.sendStatus(200);
  }
})


/**
 * Feature 10: Updating your comment of a starred restaurant.
 */

router.put("/:id", (req, res) => {
  const {newComment} = req.body;
  const {id} = req.params;
  const isExist = STARRED_RESTAURANTS.some(itm => itm.id === id)
  if(isExist) {
    STARRED_RESTAURANTS = STARRED_RESTAURANTS.map(itm => {
      if(itm.id === id) {
        itm.comment = newComment
      }
      return itm;
    });
    res.status(200).send();
  }else{res.sendStatus(400)};
})




module.exports = router;