import { Character } from './../src/js/character.js';
import { exportAllDeclaration } from '@babel/types';

describe('Character Object', () => {
    test('should create a new character object with called', () => {
        var character = new Character();
        expect(character).toEqual({user1: {}, user2: {}, taken: [], turnCount: 0 })
    });
});

describe('get user', () => {
    var character = new Character();
    
    test('should return user1 when turn count is odd', () => {
        character.turnCount = 1;
        expect(character.getUser()).toEqual('user1');
    });

    test ('This should return user2 when turn count is even', () => {
        character.turnCount = 2;
        expect(character.getUser()).toEqual('user2');
    });
});

describe('advance turn', () => {
    var character = new Character();
    character.turnCount = 1
    test('Should advance turncount to 2',() => {
    expect(character.advanceTurn()).toEqual(2);
    });
});