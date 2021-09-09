# REST API's for Order Anything..

## Installation

```bash
npm install
```

## Usage

```bash
1. First create a .env file in root directory ( I will send all the env variables via mail)
2. npm start
```

## Note

```bash
 Wheather its admin or customer they both have to login in the same way , I have defined
 the role for every user bydefault it is user we can change it to 'admin' in database
  then that will work for admin
```

## Imp

```bash
       Content-Type : application/json
       this is should be the header of every request
```

## End Point

                                       ### Authentication

```bash
     1.POST request
       http://localhost:7000/api/users/signup
       This one is for sign up user, it will take json data of only phone no and password
       Format => body=> {
	                   "phone":"95559364730",
	                   "password":"shubham"
                        }
```

```bash
     2.POST request
       http://localhost:7000/api/users/signin
       This one will logged in and will create a token for authenticated user
       which can be used further
       Format => body=> {
	                    "phone":"95559364730",
	                    "password":"shubham"
                        }
```

                                     ### Admin(Adding Product )

```bash
     3. POST request
        http://localhost:7000/api/admin/addProduct
        This one is for admin , an admin can add the product
        Format =>body=> {
	                     "productName":"translators",
	                      "categoryName":"farmacy"
}
```

```bash
     4. GET request
        http://localhost:7000/api/admin/productList
        This one will show all the products present in the stock
```

                                       ### Orders

```bash
     5. POST request
        http://localhost:7000/api/users/order
        This one will place a order
        Body=> {
	           "productId":"6139bcb7e115b2e1eb9a5d27",
	           "quantity":2,
	           "address":"Jaunpur"
               }
```

```bash
    6. GET Request
       http://localhost:7000/api/users/orders
       This will give all the orders done by user
```

```bash
   7. GET Request
      http://localhost:7000/api/users/orders/orderId
      This will show the particular order fetched by id
```

                                     ###  Cart

```bash
   8. POST Request
      http://localhost:7000/api/users/addCart
      This will add item to cart by taking productId
      Format => body => {
	                   "productId":"6139bc9de115b2e1eb9a"
                       }
```

```bash
   9. GET Request
      http://localhost:7000/api/users/showCarts
      It will show all the items added in cart
```
