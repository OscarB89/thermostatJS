class Thermostat {

  constructor(setTemp = 20) {
    this.tempy = setTemp;
    this._powerSavingModeOn = true;
  }

  isPowerSavingModeOn() {
    return this._powerSavingModeOn;
  }

  setPowerSavingModeOn(mode) {
    this._powerSavingModeOn = mode;
  }

  temp() {
    return this.tempy;
  }

  up() {
    const maximumTemp = this._powerSavingModeOn ? 25 : 32 ;
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
