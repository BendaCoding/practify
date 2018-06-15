export class RangedNumber {
  private value: number;

  constructor(private minVal = 1, private maxVal = 100) {
    if (minVal > maxVal) {
      throw new RangeError('min value is greater than max value');
    }
  }

  public setValue(value: number) {
    if (this.isValid(value)) {
      this.value = value;
    } else {
      throw new RangeError(`${value} does not fall between ${this.minVal} and ${this.maxVal}`);
    }
  }

  public getValue(): number {
    return this.value;
  }

  private isValid(value: number) {
    return value >= this.minVal && value <= this.maxVal;
  }
}
