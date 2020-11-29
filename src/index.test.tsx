import { SampleKlass, SampleFunction } from "./index";

describe("サンプルファンクションテスト", () => {
  it("サンプルファンクションテスト", () => {
    expect(SampleFunction()).toBe("call SampleFunction");
  });

  it("should SampleKlass", () => {
    const sampleKlass = new SampleKlass("props");

    expect(sampleKlass.call()).toBe("props");
  });
});
