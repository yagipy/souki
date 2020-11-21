class SampleKlass {
  private readonly prop: string;

  public constructor(prop: string) {
    this.prop = prop;
  }

  public call(): string {
    return this.prop;
  }
}

function SampleFunction() {
  return "call SampleFunction"
}

export { SampleKlass, SampleFunction };
