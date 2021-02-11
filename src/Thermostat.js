class Thermostat {

  constructor(setTemp = 20) {
    this.tempy = setTemp;
    this.powerSavingModeOn = true;
  }

  temp() {
    return this.tempy;
  }

  up() {
    const maximumTemp = 25;
    if(this.tempy < maximumTemp) {
      this.tempy += 1;
    } else {
      throw new Error ("Too hot!")
    }
  }

  down() {
    const minimumTemp = 10;
    if(this.tempy > minimumTemp){
      this.tempy -= 1;
    } else {
      throw new Error ('Too cold')
    }
  }

}
