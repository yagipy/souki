export class SampleKlass {
  private readonly prop: string;

  public constructor(prop: string) {
    this.prop = prop;
  }

  public call(): string {
    return this.prop;
  }
}

export function SampleFunction(): string {
  return "call SampleFunction";
}
