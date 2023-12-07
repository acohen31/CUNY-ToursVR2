const house = {
    "rooms": {
        "Entry": {
            "background": {
                "source": "assets/images/QCKielyHall.jpg",
                "loop": false,
                "type": "picture",
                "rotation": [0,-90,0]
            },
            "adjacentRooms": ["QCKeilyHall3", "QCKeilyHall4"],
            "interactions": [
                {
                    "whereTo": "QCKeilyHall3",
                    "type": "Nav",
                    "location": [-0.1, .5, -3], //[x, y, z],
                    "rotation": [0, 0, 90], //[x, y, z],
                    "width": "0.7",
                    "height": "0.7",
                    "distance": 1,
                    "originalRoom": "Entry",
                    "id": 1789
                },
                {
                    "whereTo": "QCKeilyHall4",
                    "type": "Nav",
                    "location": [1, 0, -3], //[x, y, z],
                    "rotation": [0, 0, 0], //[x, y, z],
                    "width": "0.7",
                    "height": "0.7",
                    "distance": 1,
                    "originalRoom": "Entry",
                    "id": 1789
                },
                {
                    "whereTo": "Entry",
                    "type": "Picture",
                    "location": [35, 5, -3], //[x, y, z],
                    "rotation": [0, -45, 0], //[x, y, z],
                    "distance": 0,
                    "originalRoom": "Entry",
                    "id": 2,
                    "width": "5",
                    "height": "5",
                    "display" : {
                      "type": "Image",
                      "source": "/assets/images/TestImage.jpg",
                      "text": "testing testing 123",
                    }
                },
            ],
        },

        "QCKeilyHall4": {
            "background": {
                "source": "assets/images/QCKielyHall4.jpg",
                "loop": false,
                "type": "picture",
                "rotation": [0,-90,0]
            },
            "adjacentRooms": ["Entry"],
            "interactions": [
                {
                    "whereTo": "Entry",
                    "type": "Nav",
                    "location": [-0.1, -0.5, -3], //[x, y, z],
                    "rotation": [0, 0, -90], //[x, y, z],
                    "width": "0.7",
                    "height": "0.7",
                    "distance": 1,
                    "originalRoom": "Entry",
                    "id": 1789
                },
                {
                    "whereTo": "QCKielyHall4",
                    "type": "Picture",
                    "location": [10, 5, -3], //[x, y, z],
                    "rotation": [0, -45, 0], //[x, y, z],
                    "distance": 0,
                    "originalRoom": "QCKielyHall4",
                    "id": 2,
                    "width": "5",
                    "height": "5",
                    "display" : {
                      "type": "Image",
                      "source": "/assets/images/TestImage.jpg",
                      "text": "testing testing 123",
                    }
                },
            ]
        },

        "QCKeilyHall3": {
            "background": {
                "source": "assets/images/QCKeilyHall3.jpg",
                "loop": false,
                "type": "picture",
                "rotation": [0,-90,0]
            },
            "adjacentRooms": ["Entry", "QCPowderMaker2"],
            "interactions": [
                {
                    "whereTo": "Entry",
                    "type": "Nav",
                    "location": [-0.1, -0.5, -3], //[x, y, z],
                    "rotation": [0, 0, -90], //[x, y, z],
                    "width": "0.7",
                    "height": "0.7",
                    "distance": 1,
                    "originalRoom": "Entry",
                    "id": 1789
                },
                {
                    "whereTo": "QCPowderMaker2",
                    "type": "Nav",
                    "location": [-0.1, .5, -3], //[x, y, z],
                    "rotation": [0, 0, 90], //[x, y, z],
                    "width": "0.7",
                    "height": "0.7",
                    "distance": 1,
                    "originalRoom": "Entry",
                    "id": 1789
                },
                // {
                //     "whereTo": "Entry",
                //     "type": "Picture",
                //     "location": [35, 5, -3], //[x, y, z],
                //     "rotation": [0, -45, 0], //[x, y, z],
                //     "distance": 0,
                //     "originalRoom": "Entry",
                //     "id": 2,
                //     "width": "5",
                //     "height": "5",
                //     "display" : {
                //       "type": "Image",
                //       "source": "/assets/images/TestImage.jpg",
                //       "text": "testing testing 123",
                //     }
                // },
            ],
        },
        "QCPowderMaker2": {
            "background": {
                "source": "assets/images/QCPowderMaker2.jpg",
                "loop": false,
                "type": "picture",
                "rotation": [0,-90,0]
            },
            "adjacentRooms": ["QCKeilyHall3", "QCPowderMaker1"],
            "interactions": [
                {
                    "whereTo": "QCKeilyHall3",
                    "type": "Nav",
                    "location": [-0.1, -0.5, -3], //[x, y, z],
                    "rotation": [0, 0, 0], //[x, y, z],
                    "width": "0.7",
                    "height": "0.7",
                    "distance": 1,
                    "originalRoom": "Entry",
                    "id": 1789
                },
                {
                    "whereTo": "QCPowderMaker1",
                    "type": "Nav",
                    "location": [-1, 0.5, -3], //[x, y, z],
                    "rotation": [0, 0, 90], //[x, y, z],
                    "width": "0.7",
                    "height": "0.7",
                    "distance": 1,
                    "originalRoom": "Entry",
                    "id": 1789
                },
                {
                    "whereTo": "QCPowderMaker2",
                    "type": "Picture",
                    "location": [20, 10, -30], //[x, y, z],
                    "rotation": [0, -45, 0], //[x, y, z],
                    "distance": 0,
                    "originalRoom": "QCPowderMaker2",
                    "id": 2,
                    "width": "5",
                    "height": "5",
                    "display" : {
                      "type": "Image",
                      "source": "/assets/images/TestImage.jpg",
                      "text": "testing testing 123",
                    }
                },
            ],
        }, 
        "QCPowderMaker1": {
            "background": {
                "source": "assets/images/QCPowderMaker1.jpg",
                "loop": false,
                "type": "picture",
                "rotation": [0,-90,0]
            },
            "adjacentRooms": ["QCPowderMaker2"],
            "interactions": [
                {
                    "whereTo": "QCPowderMaker2",
                    "type": "Nav",
                    "location": [-0.1, -0.5, -3], //[x, y, z],
                    "rotation": [0, 0, 180], //[x, y, z],
                    "width": "0.7",
                    "height": "0.7",
                    "distance": 1,
                    "originalRoom": "Entry",
                    "id": 1789
                },
                {
                    "whereTo": "QCPowderMaker1",
                    "type": "Picture",
                    "location": [20, 5, -30], //[x, y, z],
                    "rotation": [0, -45, 0], //[x, y, z],
                    "distance": 0,
                    "originalRoom": "QCPowderMaker1",
                    "id": 2,
                    "width": "5",
                    "height": "5",
                    "display" : {
                      "type": "Image",
                      "source": "/assets/images/TestImage.jpg",
                      "text": "testing testing 123",
                    }
                },
            ],
        },



    }
}