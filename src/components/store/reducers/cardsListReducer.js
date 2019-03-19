const initState = {
    cards: [
        {
            "id": 1,
            "url": "someurl1",
            "header": "Заголовок1",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, non aperiam ipsa illo excepturi aliquam mollitia asperiores eos qui placeat aut adipisci blanditiis maxime sit voluptas provident enim laborum officiis aliquid vitae temporibus! Recusandae!",
            "images": [
                {
                    "original": "http://img.ppcblog.com.ua/b113/9G3FC0.jpg",
                    "originalAlt": "test",
                    "originalTitle": "test"
                }
            ],
            "map": [
                {
                    "center": {
                        "lat": 46.573484,
                        "lng": 30.799630
                    },
                    "zoom": 15
                },
                {
                    "position": {
                        "lat": 46.573484,
                        "lng": 30.799630
                    },
                    "title": "Hello World!"
                }
            ]
        },
        {
            "id": 2,
            "url": "someurl2",
            "header": "Заголовок2",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, non aperiam ipsa illo excepturi aliquam mollitia asperiores eos qui placeat aut adipisci blanditiis maxime sit voluptas provident enim laborum officiis aliquid vitae temporibus! Recusandae!",
            "images": [
                {
                    "original": "http://img.ppcblog.com.ua/b113/9G3FC0.jpg",
                    "originalAlt": "test",
                    "originalTitle": "test"
                }
            ],
            "map": [
                {
                    "center": {
                        "lat": 46.573484,
                        "lng": 30.799630
                    },
                    "zoom": 15
                },
                {
                    "position": {
                        "lat": 46.573484,
                        "lng": 30.799630
                    },
                    "title": "Hello World!"
                }
            ]
        },
        {
            "id": 3,
            "url": "someurl3",
            "header": "Заголовок3",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, non aperiam ipsa illo excepturi aliquam mollitia asperiores eos qui placeat aut adipisci blanditiis maxime sit voluptas provident enim laborum officiis aliquid vitae temporibus! Recusandae!",
            "images": [
                {
                    "original": "http://img.ppcblog.com.ua/b113/9G3FC0.jpg",
                    "originalAlt": "test",
                    "originalTitle": "test"
                }
            ],
            "map": [
                {
                    "center": {
                        "lat": 46.573484,
                        "lng": 30.799630
                    },
                    "zoom": 15
                },
                {
                    "position": {
                        "lat": 46.573484,
                        "lng": 30.799630
                    },
                    "title": "Hello World!"
                }
            ]
        },
        {
            "id": 4,
            "url": "someurl4",
            "header": "Заголовок4",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, non aperiam ipsa illo excepturi aliquam mollitia asperiores eos qui placeat aut adipisci blanditiis maxime sit voluptas provident enim laborum officiis aliquid vitae temporibus! Recusandae!",
            "images": [
                {
                    "original": "http://img.ppcblog.com.ua/b113/9G3FC0.jpg",
                    "originalAlt": "test",
                    "originalTitle": "test"
                }
            ],
            "map": [
                {
                    "center": {
                        "lat": 46.573484,
                        "lng": 30.799630
                    },
                    "zoom": 15
                },
                {
                    "position": {
                        "lat": 46.573484,
                        "lng": 30.799630
                    },
                    "title": "Hello World!"
                }
            ]
        }
    ]
};

const cardsListReducer = (state = initState, action) => {
    return state;
}

export default cardsListReducer;