class Player {
  constructor() {
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
}
