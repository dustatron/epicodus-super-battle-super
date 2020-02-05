export class Character {
    constructor() {
        this.user1 = {};
        this.user2 = {};
        this.taken = [];
        this.turnCount = 0;
    };
    
    pickGoldenGirl(userPick) {
        //run getUser save to let
        //take user input
        //find the golden girl
        //check that golden girl is not taken
        //add golden girl object to currentUser object.
        //add golden girl to taken array.
        //run advanceTurn()

        const listOfGirls = [
            {
                id: 1,
                name: "Blanche Devereaux",
                hp: 65,
                armor: 35,
                magic: 10,
                img: 'data:image/jpeg;base64,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'
    
            },
            {
                id: 2,
                name: "Sophia Petrillo",
                hp: 65,
                armor: 35,
                magic: 10,
                img: 'data:image/jpeg;base64,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'
    
            },
            {
                id: 3,
                name: "Dorothy Zbornak",
                hp: 65,
                armor: 35,
                magic: 10,
                img: 'data:image/jpeg;base64,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'
    
            },
            {
                id: 4,
                name: "Rose Nylund",
                hp: 65,
                armor: 35,
                magic: 10,
                img: 'data:image/jpeg;base64,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'
    
            },
        ];

    };

    getUser(){
        if(this.turnCount % 2 === 0){
            return 'user2';
        }
        else if (this.turnCount % 2 !== 0) {
            return 'user1';
        }
        else {
            "error"
        }
    };

    advanceTurn(){
        return this.turnCount +=1;
    }; 
};