# User Management System
1. Use built in pipes, 
Title case pipe, Date pipe to transform data (‘Manage’ page)
Write a custom pure pipe to combine and give full name given user (‘Manage’ page)
Write a custom pure pipe to show ‘Active’ or ‘Deleted’ based on ‘isDeleted’ property of user
![](https://ekgl3w.sn.files.1drv.com/y4mOV4TIM7UuoWKHuk_kQmi0wTeWq9tGL9bgHOQmzlLlVxAUmH_hbGgAdvwtzCF2g5EasufxrYoUWkJxVfDO53xT9uwVVDLVTHx9H2U0HH1SNN2EDXuvuhgEYOC76mmWRqdreRbP8eeAxDQe4lAblP_5SBHR4ch_fPCgyNjge-HuWKtM77Ww_lDQbDZiFLQrBuU195FGJpkeOOgSySOE09qUg?width=1329&height=420&cropmode=none)
2. Create http services for below and replace existing mock service data with http service
	Get all users
	* Get active users (use pipe to transform or filter data)
![](https://ekgh3w.sn.files.1drv.com/y4m-LCOw2-TnEvX68vk5D8Zd_TrAMfelRc8j0i3muZzbvVdFP2ESrTDwNRkYXD1PpQW8CTkZ8TdhxRpD68TpnklNwrwHbwosTHZw6DlpvGGji8_eRG7GKjj83qr4PqlNONhWUYqYIFuHMxByCqYU-99hR1QBZl6LGDAEvyXs0bLzMRn9ihzAGdy0Hj72SwYV1TV9o-thY34mP8gB6z5HyG2gA?width=1276&height=471&cropmode=none)
	* Get inactive users (use pipe to transform or filter data)
![](https://ekgf3w.sn.files.1drv.com/y4mnhreXqT3mZKWnWnY7etW6cFLRe1ynBGnPcTZF7zsnjg8TwKJtueFerroinzocuvw3CCz4WeXevOqgNdshkZvrOdb7Qo0bnAD1BEcPWqFSnpkp6yi3vN9KQInkQwsLDDmrRhkFT23JBfsBSbzxvtm2T5Zrehl4nNIlFJOHCLpQkuNW4c8yrD6uOZiDyYlx9pj5IASIsGthk3S0FSTuf9roA?width=1246&height=613&cropmode=none)
	* Create user
	![](https://ekgg3w.sn.files.1drv.com/y4m7Bra9go_4zAK6sjtBPAIIyqXofDtC7xuLRzXPudBmoyaZ1iTwGDMt5mvPf1gSvRSwa1mRSBmqO7sgVoClSJatn_s6eisHTojlNL3-5iAWFOI_5sKecTylgMmtbvb1II_XNZVH0uvrvfGOCLhJMb_Yj4l26TMHIkMi67EO9IrrazHTyKVeXsj5QPprn4X4gsX1pzbheyDmyk2V20xzFeXSw?width=1347&height=638&cropmode=none)
	* Update user
![](https://ekgm3w.sn.files.1drv.com/y4mZwGy9TJj-4LcMZJcIK1BBeAhBXc1YE6-QH2JRlmBTxyyIDYJwDRLNCkq8_tMNCBBqWFtTHZ8ppe5zxtrq1io7j80HjF30vtcB3oyyrep_tPXRsvXdJ0bviX7m87D2Cofkxl7y64pASPZkeW3pHQg8VvQEDoRRu2Lmr2bab-CLzS3YInm0DQKmvLbQE5YDhixX1Ep_i49hv-_z8vRinaLJA?width=1356&height=527&cropmode=none)
    Delete User


3. Make changes to application button clicks in ‘Active’, ‘Deleted’ to use delete and activate through API
![](https://ekgk3w.sn.files.1drv.com/y4msmxR5Rbf_XkJa5kVmRno3ymXV5zmREc3p91GU6sz-KBumYkDm00DiPPcKjluHJ6rKCZ9THx--ruHt5EheeBF5scGiYQHjhB3env8c2hKiJUhdmDshO1erOIciKpXjYGSYUBoMescBdjyItzJ6_xt6PAyb-mCa8CKv9lHeMlKQAVva1VxsOxAWM3p95nIBwSwawD30ltdcvE0-laZADuYzQ?width=1345&height=531&cropmode=none)
4. Use Angular Reactive forms for Create/Update user forms implementation


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
![](https://ekgi3w.sn.files.1drv.com/y4mwqaLS7EX9yQjb-ycbB3mJ11o8QJWOBhZmvX8tdLtX1L-3aXt_9XobZLG-KTVf3URw7g9BUk9qFKmSAMuAwFIx6UTFmc0AVs67pRnoI4S9iP2yVfj63Ore2VcepXNOM5KcDnIjvhaj5DTqwHTKvM1iFemEKVYJlUvW8kBFXMT0zYSPW8ZT5Ufn9L98-uwT1Q6tCJzY9dMXxyTLuR___cHwA?width=1142&height=375&cropmode=none)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Backend Server Installation :
  
    Run npm install

### Running the app :

    Execute "npm run start loadUsersData" to run the app with initial data

OR 

    Execute "npm run start" to run the app with existing data in the database

### Testing the APIs using Postman:

    
    Get All Users 
        (GET) http://localhost:8080/users

    Get User By Id 
        (GET) http://localhost:8080/users/:id

    Create User 
        (POST) http://localhost:8080/users/
        body : {
            firstName: string;
            lastName: string;
            login: string;
            password: string;
            age: number;
            isDeleted?: boolean;
        }

    Update User 
        (PUT) http://localhost:8080/users/:id
        body : {
            password: string;
            age: number;
            isDeleted?: boolean;
        }
    
    Delete User 
        (DELETE) http://localhost:8080/users/:id

    Search Users ( case insensitive ) 
        (POST) http://localhost:8080/users/search
        body : {
            key: string;
            limit: number;
        }   

    Get All Groups 
        (GET) http://localhost:8080/groups

    Get Group By Id 
        (GET) http://localhost:8080/groups/:id

    Create Group 
        (POST) http://localhost:8080/groups/
        body : {
            name: string;
            permissions: Array<string>;
        }

    Update Group
        (PUT) http://localhost:8080/groups/:id
        body : {
            permissions: Array<string>;
        }
    
    Delete Group
        (DELETE) http://localhost:8080/groups/:id

    
    Get All Users Groups
        (Get) http://localhost:8080/groups/users

    Add Users To Groups
        (POST) http://localhost:8080/groups/:id/users
        body : Array<userId>


### Running Unit tests:

    yarn test OR npm run test 