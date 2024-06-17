# grid-events-back

###User Signup/Login

| METHOD | ENDPOINT     | TOKEN | ROLE | DESCRIPTION | POST PARAMS            | RETURNS                            |
|--------|--------------|-------|------|-------------|------------------------|------------------------------------|
| POST   | /auth/signup | -     | user | User Signup | name, email, password  | { message: string, result: token } |
| POST   | /auth/login  | -     | user | User Login  | email, password        | { message: string, result: token } |


###User Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /user            | YES   | admin| Get All Users            |                                                 | { message: string, result: array }
GET    | /user/:id        | YES   | admin| Get One User             |                                                 | { message: string, result: object }
GET    | /user/profile    | YES   | user | Get Own Profile             |                                              | { message: string, result: object }
PUT    | /user/:id        | YES   | admin | Update One User          | name, email, password, role            | { message: string, result: object }
PUT    | /user/profile    | YES   | user | Update Own Profile          | name, email                              | { message: string, result: object }
PUT    | /user/password    | YES  | user | Update Own password         | old password, new password               | { message: string, result: object }
POST    | /user        | YES   | admin | Create One User          | name, email, password, role            | { message: string, result: object }


###Events Endpoints

| METHOD | ENDPOINT           | TOKEN | ROLE | DESCRIPTION                  | POST PARAMS      | RETURNS                            |
|--------|--------------------|-------|------|------------------------------|------------------|------------------------------------|
| GET    | /event             | YES   | user | Get All Events               |                  | { message: string, result: array } |
| GET    | /event/:id         | YES   | user | Get One Event                |                  | { message: string, result: object }|
| POST   | /event             | YES   | user | Create Events                | value, category_id | { message: string, result: object }|
| PUT    | /event/:id/like    | YES   | user | Add Like to Event            |                  | { message: string, result: object }|
| POST   | /event/:id/favorite| YES   | user | Add Event to Own Favorites   |                  | { message: string, result: object }|

