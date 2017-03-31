/**
 * Create a Class Trie
 * that can work with a trie data structure
 *
 * Instance Methods
 *
 * add( word )
 * @param word  string
 * @returns void
 *
 * exists( word )
 * @param word  string
 * @returns boolean
 *          true if the word exists in the trie, else false
 */

class Trie {
    constructor(){
        this.root = {};
    }

    add(word){
        let pos = this.root;
        if(typeof word === 'string'){
            for(let i = 0; i < word.length; i++){
                let letter = word[i];
                if(pos[letter] === undefined){
                    pos[letter] = {};
                    pos = pos[letter];
                } else {
                    pos = pos[letter];
                }
            }
            pos.leaf = true;
        } else {
            throw new TypeError();
        }


    }

    exists(word){
        let pos = this.root;
        for(let i = 0; i < word.length; i++){
            let letter = word[i]
            if(pos[letter] != pos.leaf){
                pos = pos[letter];
            } else {
                return false;
            }
            return true;
        }
    }
 }

module.exports = Trie;