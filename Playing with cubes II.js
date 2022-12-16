// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {
  getSide() {
    return this.side || 0;
  }
  setSide(n, 0) {
    this.side = Math.abs(n);
  }
}
