# eth-api
## Simulating a simple routing scheme with Ethereum smart contracts

### Summary
This small project was built to try and replicate an API routing scheme: Router -> Controller -> Method -> Object. It was also a good way to test some interesting Solidity capabilities, and limitations.

Please understand that this is just a "Would it be possible" project, and not intended for production use. Besides being extremely limited, the costs of running such an implementation on the Ethereum blockchain would not justify it.

### How does it work
A Router Smart Contract is used to store controllers, and direct calls to them. The Controller Smart Contract then directs calls straight to the Object Smart Contract.

**Object** 
```
- Each Object has all the atomic methods expected on an API: POST, GET, PUT, DELETE
- Objects are limited to a single string - again, this is for testing purposes
```

**Controller**
```
- Each Controller abstracts the Object atomic methods
- Controllers store high level information about created Objects: address, and number of Objects
```

**Router**
```
- Each Router abstracts the Controller methods
- Routers store high level information about created Controllers: name, address, and number of Controllers
```

### How to use it

**Deployment and initialization**
1. Deploye Router.sol
   - Router is created
2. Call Router.addController(_ControllerName)
   - Controller is created
3. Call Router.POST(_controllerName, _params)
   - Object is created

**Calling the API**
> In order to know the Controller and the Object:
>  - Controller: Router.controllers(_index)
>  - Object: Router.getObject(_controllerName, _index)
- Router/Controller/Object/GET
  - Router.GET(string _controller, address _obj)
- Router/Controller/Object/POST
  - Router.POST(string _controller, string _params)
- Router/Controller/Object/PUT
  - Router.POST(string _controller, address _obj, string _params)
- Router/Controller/Object/DELETE
  - Router.POST(string _controller, address _obj)
