import { Character } from './../src/js/character.js';
import { exportAllDeclaration } from '@babel/types';

describe('Character Object', () => {
    test('should create a new character object with called', () => {
        var character = new Character();
        expect(character).toEqual({user1: {}, user2: {}, taken: [], turnCount: 0 })
    });
});

describe('');