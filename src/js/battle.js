export class Battle {
    constructor(character, inventory) {
        this.state = 0;
        this.character = character;
        this.invetory = inventory
        
    }

    updateInventory(action){
        let that = this;
        if (action === "hold") {
            that.character.user1.hp +=5;
            return "hold"
        }
        //check action.
        //if hold do nothing
        //else grab random item and take away old item
        //add user to inventory item and/or remove from item.
    };

    runAttack(action){
        //check action.
        //if is 'hold' add 5 point to HP
        //advanceTurn()

        //if attack is 'attack' do math.
        //update user totals.
        //check user is still alive.
        //advanceTurn()
    }



}