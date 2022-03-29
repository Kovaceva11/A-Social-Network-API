const connection = require('../config/connection');
const {User, Thought} = require('../models')

connection.on('error', (err)=> err);

connection.once('open', async () => {
    console.log('connection successful');
    await Thought.deleteMany({});
    await User.deleteMany({});

    const users = [
		{
			"_id": "623f5cb0d4dc21aae73ae05a",
			"thoughtBody": "Adam",
			"createdAt": "aNewEmail@gmail.com",
			"reactions": [],
			"__v": 0,
			"getReactions": 0
		},
		{
			"_id": "623f7dfa4ab914418fdd1515",
			"username": "AdamTheGreat",
			"email": "adam@thegreat.com",
			"thoughts": [],
			"friends": [],
			"__v": 0,
			"friendCount": 0
		},
		{
			"_id": "623f82e04ab914418fdd1517",
			"username": "IwantToBeDev",
			"email": "iwannadevelop@gmail.com",
			"thoughts": [],
			"friends": [],
			"__v": 0,
			"friendCount": 0
		},
		{
			"_id": "623f82f24ab914418fdd1519",
			"username": "PleaseHireMe",
			"email": "pleaseHireMe@gmail.com",
			"thoughts": [],
			"friends": [],
			"__v": 0,
			"friendCount": 0
		},
		{
			"_id": "623f97580c6baca9f83e247e",
			"username": "AdamIsForHire",
			"email": "yourNewFavoriteDeveloper@gmail.com",
			"thoughts": [],
			"friends": [],
			"__v": 0,
			"friendCount": 0
		}
	]

    const thoughts = [
        {
            "_id": "623f85283043c2796fec428e",
            "thoughtText": "I will say YES to your job offer",
            "username": "AdamTheGreat",
            "createdAt": "Mar 26th 2022",
            "reactions": [
                {
                    "reactionBody": "AWESOME! I'm looking forward to working with you",
                    "username": "HiringManger1",
                    "_id": "623f8af661d926de4c4d0cb5",
                    "createdAt": "Mar 26th 2022",
                    "id": "623f8af661d926de4c4d0cb5"
                },
                {
                    "reactionBody": "My company will offer you a higher salary and better benefits. Choose US!",
                    "username": "HiringManger2",
                    "_id": "623f8b2f61d926de4c4d0cb7",
                    "createdAt": "Mar 26th 2022",
                    "id": "623f8b2f61d926de4c4d0cb7"
                },
                {
                    "reactionBody": "My Company offers remote work, full benefits, the highest salary and unlimited PTO, Choose us!",
                    "username": "HiringManger4",
                    "_id": "623f8f5158fc6e3ab87a5f7a",
                    "createdAt": "Mar 26th 2022",
                    "id": "623f8f5158fc6e3ab87a5f7a"
                }
            ],
            "__v": 0,
            "reactionCount": 3,
            "id": "623f85283043c2796fec428e"
        },
        {
            "_id": "623f8544b8aa17b76705b36a",
            "thoughtText": "This is an update to the thought",
            "username": "Adam",
            "createdAt": "Mar 26th 2022",
            "reactions": [],
            "__v": 0,
            "reactionCount": 0,
            "id": "623f8544b8aa17b76705b36a"
        },
        {
            "_id": "623f8579b8aa17b76705b36e",
            "thoughtText": "I will say YES to your job offer",
            "username": "AdamTheGreat",
            "createdAt": "Mar 26th 2022",
            "reactions": [],
            "__v": 0,
            "reactionCount": 0,
            "id": "623f8579b8aa17b76705b36e"
        },
        {
            "_id": "623f85cbba83215d5bd346ea",
            "thoughtText": "I will say YES to your job offer",
            "username": "AdamTheGreat",
            "createdAt": "Mar 26th 2022",
            "reactions": [],
            "__v": 0,
            "reactionCount": 0,
            "id": "623f85cbba83215d5bd346ea"
        },
        {
            "_id": "623f866dba83215d5bd346ef",
            "thoughtText": "I will say YES to your job offer",
            "username": "AdamTheGreat",
            "createdAt": "Mar 26th 2022",
            "reactions": [],
            "__v": 0,
            "reactionCount": 0,
            "id": "623f866dba83215d5bd346ef"
        },
        {
            "_id": "623f8682ba83215d5bd346f2",
            "thoughtText": "I will say YES to your job offer",
            "username": "AdamTheGreat",
            "createdAt": "Mar 26th 2022",
            "reactions": [],
            "__v": 0,
            "reactionCount": 0,
            "id": "623f8682ba83215d5bd346f2"
        },
        {
            "_id": "623f86bbba83215d5bd346f5",
            "thoughtText": "I will say YES to your job offer",
            "username": "AdamTheGreat",
            "createdAt": "Mar 26th 2022",
            "reactions": [],
            "__v": 0,
            "reactionCount": 0,
            "id": "623f86bbba83215d5bd346f5"
        }
    ]

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('seeding completed');
    process.exit(0);
});

