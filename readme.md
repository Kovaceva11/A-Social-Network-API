# A Social Network API
Welcome to my Social Network API. This is a basic API created with focus on using [Express.js](https://expressjs.com/) for routing, a [MongoDB](https://www.mongodb.com/lp/video/awareness/getting-started?utm_content=rlsapostreg&utm_source=google&utm_campaign=gs_americas_uscan_search_brand_dsa_atlas_desktop_rlsa_postreg&utm_term=&utm_medium=cpc_paid_search&utm_ad=&utm_ad_campaign_id=14383025495&adgroup=129270225314&gclid=Cj0KCQjw3IqSBhCoARIsAMBkTb1UB5sMA3gwKW7r0uS6NrdkKHrjk9PDK2KXMAGS7W29ayMEzBnXruMaAndYEALw_wcB) database and the [Mongoose ODM](https://www.npmjs.com/package/mongoose). Additionally, I chose to use the [Moment.js](https://momentjs.com/) date library for incorporating date information in the functionality. 
# Walkthrough Demo Video
[View Demo Video Here](https://drive.google.com/file/d/14-aZkA2IBxJGzeyXwlCNnDYF4L62bQwJ/view?usp=sharing) 

Posted on Google Drive.
# Installing this application
Download the repo and then open the terminal with it pointing to the application's root directory. Then enter the following commands into the terminal. 

`npm init -y`  
`npm install`  (Feel free to seed the database prior to running the application. However, this is optional)  
`node utils/seed`

To run the application:
`node index.js`

# Using Insomia to test the API's routes and functionality
Open insomnia and create the necessary Get, Post, Put & Delete routes using the following URL as your index base.
`http://localhost:3001/api/`  

Anywhere below you see the following path routes, please change them accordingly to their matching IDs. 
  
  `:userId` - The user's actual ID  
  `:thoughtsId` - The Thought's actual ID  
  `:friendId` - The Friend's actual ID  
  `:reactionId` - The Reaction's actual ID
## Getting Users
![Get Users Screenshot](/assets/images/getUsers.png)
`http://localhost:3001/api/users/:userId`
## Creating User
![Create User Screenshot](/assets/images/createUser.png)
`http://localhost:3001/api/users/`
## Updating User
![Update User Screenshot](/assets/images/updateUser.png)
`http://localhost:3001/api/users/:userId`
Pass JSON Object data for the fields you wish to change.  
```
{
	"username": "ExampleUsername",
	"email": "Example@domain.com"
}
```

## Deleting User
![Delete User Screenshot](/assets/images/deleteUser.png)
`http://localhost:3001/api/users/:userId`

## Add A Friend
![Add Friend Screenshot](/assets/images/addFriend.png)
`http://localhost:3001/api/users/:userId/friends/:friendId`
## Delete A Friend
![Delete A Friend Screenshot](/assets/images/deleteFriend.png)
`http://localhost:3001/api/users/:userId/friends/:friendId`
## Get Thoughts
![Get Thoughts Screenshot](/assets/images/getThoughts.png)
`http://localhost:3001/api/thoughts/` or more specifically by ID using 
`http://localhost:3001/api/thoughts/:thoughtId`
## Create Thought
![Create Thought Screenshot](/assets/images/CreateThought.png)
`http://localhost:3001/api/thoughts/:userId`
## Update Thought
![Update Thought Screenshot](/assets/images/updateThoughts.png)
`http://localhost:3001/api/thoughts/:thoughtId`

Pass JSON Object data for the fields you wish to change.  
```
{
	"thoughtText": "Insert Text Here",
	"username": "Insert Thought Creator"
}
```

## Delete Thought
![Delete Thought Screenshot](/assets/images/deleteThought.png)
`http://localhost:3001/api/thoughts/:thoughtId`
## Add A Reaction
![Add Reaction Screenshot](/assets/images/addReaction.png)
`http://localhost:3001/api/thoughts/:thoughtId/reactions/`
## Delete A Reaction
![Delete Reaction Screenshot](/assets/images/deleteReaction.png)
`http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId`

# Credits
MDN, Stackoverflow, npmjs

# Links
Github Repo: https://github.com/Kovaceva11/A-Social-Network-API  

# License
MIT License