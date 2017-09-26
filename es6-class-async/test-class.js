class Type {
  constructor(){

  }

  getType(num){
    return this.getTypeOne(num);
  }

  async getTypeOne(num){
    try {
      if(num > 0){
        return num;
      }else {
        throw 'NUM less than zero error'
      }
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new Type();
