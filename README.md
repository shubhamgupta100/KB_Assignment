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

## Imp

```bash
    1- Content-Type : application/json
       this is should be the header of every request
    2- Authorization:  Bearer `jsotoekn should be here`
       while placing order there should be one more header
```

## End Point

```bash
     1.POST request
       http://localhost:7000/api/users/signup
       This one is for sign up user it will take json data of only phone no and password
```

```bash
     2.POST request
       http://localhost:7000/api/users/signin
       This one will logged in and will create a token for authenticated user
       which will be used while placing a order (storing in customer Id)
```

```bash
     3. POST request
        http://localhost:7000/api/admin/addProduct
        This one is for admin , an admin can add the product
```

```bash
     4. GET request
        http://localhost:7000/api/admin/productList
        This one will show all the products present in the stock
```

```bash
     5. POST request
        http://localhost:7000/api/users/order
        This one will place a order

```
