# Stage 1
Assignment

Task Description
- Setup a server (Host)
- Create an **(GET)** api endoint that returns the following json response:

  { "**slackUsername**": String, "**backend**": Boolean, "**age**": Integer, "**bio**": String }

  - SlackUsername should be a **string** datatype and your slack username
  - Backend should be a **boolean** datatype
  - Age should be an  **integer** datatype
  - Bio(description about yourself) should be a **string** datatype

- Push to **GitHub**

## Solution

To test our READ operation, go to https://vivacious-wrap-deer.cyclic.app/ endpoint and it will return all the info data.


# Stage 2
Assignment

Task Description
- Using the same server setup from stage one
- Create an (POST) api endpoint that takes the following sample json:

  { “operation_type”: Enum <addition | subtraction | multiplication> , “x”: Integer, “y”: Integer }
    - Operation can either be addition, subtraction or mutiplication
    - x can be a number and Integer datatype
    - y can be a number and Integer datatype
- Based on the operation sent, perform a simple arithmetic operation on x and y.
- Return a response with the result of the operation and your slack username

  { “slackUsername”: String, "operation_type" : Enum. value, “result”: Integer }

- Push to **GitHub**

### Hint
- Sample Input { “operation_type”: Enum <addition | subtraction | multiplication> , “x”: Integer, “y”: Integer }

- Sample Response Format { “slackUsername”: String, “result”: Integer, “operation_type”: Enum.value }

## Solution

To test our READ operation, go to https://vivacious-wrap-deer.cyclic.app/info endpoint and it will return all the info data.

## How to use
Clone the repo
Use the json file as a sample code
~~~js
  { 
    "x": 150,
    "y": 100, 
    "operation_type": "addition" 
  }
~~~
and your result should look like
~~~js
  { 
    "slackUsername": "Oisavictor ", 
    "operation_type": "addition", 
    "result": 250 
  }
~~~




