import * as bcrypt from "bcrypt"

const salt = bcrypt.genSaltSync();

export const users = [
    {
        "userName": "sana",
        "email": "sana@gmail.com",
        "password": bcrypt.hashSync("password1", salt)
    },
    {
        "userName": "ghada",
        "email": "ghada@gmail.com",
        "password": bcrypt.hashSync("password2", salt)
    },
    {
        "userName": "meycem",
        "email": "meycem@gmail.com",
        "password": bcrypt.hashSync("password3", salt)
    },
    {
        "userName": "wadie",
        "email": "wadie@gmail.com",
        "password": bcrypt.hashSync("password4", salt)
    },
    {
        "userName": "riadh",
        "email": "riadh@gmail.com",
        "password": bcrypt.hashSync("password5", salt)
    },
    {
        "userName": "mootaz",
        "email": "mootaz@gmail.com",
        "password": bcrypt.hashSync("password6", salt)
    },
    {
        "userName": "farouk",
        "email": "farouk@gmail.com",
        "password": bcrypt.hashSync("password7", salt)
    },
    {
        "userName": "rania",
        "email": "rania@gmail.com",
        "password": bcrypt.hashSync("password8", salt)
    },
    {
        "userName": "yassmine",
        "email": "yassmine@gmail.com",
        "password": bcrypt.hashSync("password9", salt)
    },
    {
        "userName": "ghofrane",
        "email": "ghofrane@gmail.com",
        "password": bcrypt.hashSync("password10", salt)
    }
]
export const recipes = [
    {
        "title": "chachouka",
        "description": "recipe1 description",
        "userId": 1,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
    },
    {
        "title": "lasagne",
        "description": "recipe2 description",
        "userId": 1,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
    },
    {
        "title": "pasta",
        "description": "recipe3 description",
        "userId": 1,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
    },
    {
        "title": "mloukheya",
        "description": "mloukheya description",
        "userId": 4,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
    },
    {
        "title": "couscous",
        "description": "couscous description",
        "userId": 5,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
    },
    {
        "title": "lablebi",
        "description": "lablebi description",
        "userId": 6,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
    },
    {
        "title": "rouz jerbi",
        "description": "rouz jerbi description",
        "userId": 7,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
    },
    {
        "title": "mtabga",
        "description": "mtabga description",
        "userId": 8,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
    },
    {
        "title": "chapati",
        "description": "chapati description",
        "userId": 9,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
    },
    {
        "title": "tajine",
        "description": "tajine description",
        "userId": 10,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
    }
]