const express = require("express");
const router = express.Router();


const RlocationController = require('../Controllers/locations');
const mealTypeController = require('../Controllers/MealType');
const RestroController = require('../Controllers/Restaurents');
const userController = require('../Controllers/user');
const paymentGatewayController = require('../Controllers/PaymentGateway');
const ordersController = require('../Controllers/order');

//getMealtypecontro assignmentfrom edu
const getmealtypeNameContro = require('../Controllers/getMealtype');

router.get('/location',RlocationController.getLocations);
router.post('/addlocation',RlocationController.addLocation);
router.get('/mealtype',mealTypeController.getMealType);
router.get('/restaurantsbylocation/:locationId',RestroController.getRestaurentsByLOcation);
router.post('/filter',RestroController.filterRestaurants);
router.get('/restaurantbyid/:restaurantId',RestroController.getRestaurantDeatailsById);
router.get('/menuitemsbyrestaurant/:restaurantId', RestroController.getMenuItemsByRestaurant);
//registration of user :- saving details pf user:- It will be post API
router.post('/signup',userController.getSignUp);
router.post('/login',userController.getLoggedIn);
//addorder :- which will add the order to db
router.post('/addorder',ordersController.getOrderDetails);
router.get('/getorderbyemail/:userId',ordersController.getOrderHistory);

//payments APIs
router.post('/payment', paymentGatewayController.payment);
router.post('/callback', paymentGatewayController.callback);

//get meatype API
router.get('/getmealtype', getmealtypeNameContro.getMealType );

//export the routes...
module.exports=router;




