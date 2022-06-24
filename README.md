#MERN AMAZON

#Lesson

1. Introduction
2. Install Tools
3. Create React App
4. Create Git Reporsitory
5. List Products

   i. create products array
   ii. add product images
   iii. render products
   iv. style products

6. Add routing
   i. npm i react-router-dom
   ii. create route for home screen
   iii. create router for produt screen

7. Create Node.js Server

   1. run npm init in root folder
   2. Update package.json set type:module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready.
   9. move product.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start

8. Fetch Products From Backend

   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook

9. Manage State By Reducer Hook

   1. define reducer
   2. update fetch data
   3. get state from usReducer

10. Add bootstrap UI Framework

i. npm install react-bootstrap bootstrap
ii. update App.js

11. Create Product and Rating Component

i. create Rating component
ii.. Create Product component
iii. Use Rating component in Product component

12. Create Product Details Screen

i. fetch product from backend
ii. create 3 columns for image, info and action

13. Create Loading and Message Component
    i. create loading component
    ii. use spinner component
    iii. craete message component
    iv. create utils.js to define getError fuction

14. Implement Add to Cart
    i. Create React Context
    ii. Define reducer
    iii. create store provider
    iv. implement add to cart button click handler

15. Complete Add to Cart
    i. check exist item in the cart
    ii. check count in stock in backend

16. Create Cart Screen
    i. create 2 columns
    ii. display items list
    iii. create action column
17. Complete Cart Screen
    i. click handler for inc/dec item
    ii. click handler for remove item
    iii.click handler for checkout

18. Create Signin Screen
    i. create sign in form
    ii. add email and password
    iii. add signin

19. Connect To MongoDB Database
    i. create atlas mongodb database
    ii. install local mongodb database
    iii.npm install mongoose
    iv. connect to mongodb database

20. Seed Sample Data
    i. create Product model
    ii. create User model
    iii. create seed route
    iv. use route in server.js
    v. seed sample product

21. Seed Sample Users
    i.create user model
    ii. seed sample users
    iii. create user routes

22. Create Signin Backend API
    i. craete signin api
    ii. npm install jsonwebtoken
    iii. define generateToken

23. Complete Signin Screen
    i. handle submit action
    ii. save token in store and local storage
    iii. show user name is header

24. Create Shipping Screen
    i. create form inputs
    ii. handle save shipping address
    iii. add checkout wizard bar

25. Create Sign Up Screen
    i. create input forms
    ii. handle submit
    iii. create backend api

26. Implement Select Payment Method Screen
    i. create input forms
    ii. handle submit

27. Create Place Order Screen
    i. show cart items, payment and address
    ii. handle place order action
    iii. create order create api

28. Implement Place Order Action
    i. handle place order action
    ii. create order create api

29. Create Order Screen
    i. create backend api for order/:id
    ii. fetch order api in frontend
    iii. show order information in 2 columns

30. Pay order by paypal
    i. generate paypal client id
    ii. create api to return client id
    iii. install ract-paypal-js
    iv. use PayPalScript Provider in index.js
    v. use PaypPalScriptReducer in Order Screen
    vi. implement loadPaypalScript function
    vii. render paypal button
    viii. implement onApprove payment function
    ix. create pay order api in backend

31. Display Order History
    i. create order screen
    ii. create order history api
    iii. use api in the frontend

32. Create Profile Screen
    i. get user info from context
    ii. show user information
    iii. create user update api
    iv. update user info

33. Publish To Heroku
    i. create and config node project
    ii. serve build folder in frontend folder
    iii.Create heroku account
    iv. connect it to github
    v. create mongodb atlas database
    vi. set database connection in geroku env variables
    vii. commit and push

34. Add Sidebar and Search Box
    i. add sidebar
    ii. add search box

35. Create Search Screen
    i. show filters
    ii. create api for searching products
    iii. display results
