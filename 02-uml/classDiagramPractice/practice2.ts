interface Shape {
  clacArea(): number;
}

class Rectangle implements Shape {
  private width: number;
  private height: number;

  clacArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  private radius: number;

  clacArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

class Client {
  private shape: Shape;
}
