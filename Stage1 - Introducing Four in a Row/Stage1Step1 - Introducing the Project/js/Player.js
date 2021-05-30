class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createToken(21);
  }
  
/**create token object for the player
  @param {integer} num - Number of token objects to be created
   */
  
  createToken() {
    const tokens = [];
    for (let i = 0; i < num; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }
    return tokens;
  }

  // Gets all tokens that haven't been dropped
  get unusedTokens() {
      return this.tokens.filter(token => !token.dropped) 
   }

   // Gets the active token by returning the first token in the array of unused tokens
get activeToken(){
return this.unusedTokens[0];
}


}
