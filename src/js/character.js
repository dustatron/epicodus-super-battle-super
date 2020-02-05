export class Character {
  constructor() {
    this.user1 = {};
    this.user2 = {};
    this.taken = [];
    this.turnCount = 1;
  };

  pickGoldenGirl(userPick) {

    const listOfGirls = [
      {
        id: 0,
        name: "Blanche Devereaux",
        hp: 65,
        armor: 35,
        magic: 10,
        img: ''

      },
      {
        id: 1,
        name: "Sophia Petrillo",
        hp: 65,
        armor: 35,
        magic: 10,
        img: ''

      },
      {
        id: 2,
        name: "Dorothy Zbornak",
        hp: 65,
        armor: 35,
        magic: 10,
        img: ''

      },
      {
        id: 3,
        name: "Rose Nylund",
        hp: 65,
        armor: 35,
        magic: 10,
        img: ''

      },
    ];

    //check that golden girl is not taken
    //run getUser save to let
    //add golden girl object to currentUser object.
    //add golden girl to taken array.
    //run advanceTurn()
    

    this.user1 = listOfGirls[userPick];
    this.taken.push(listOfGirls[userPick].name);


  };

  getUser() {
    if (this.turnCount % 2 === 0) {
      return 'user2';
    }
    else if (this.turnCount % 2 !== 0) {
      return 'user1';
    }
    else {
      "error"
    }
  };

  advanceTurn() {
    return this.turnCount += 1;
  };
};