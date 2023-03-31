import AnimationService from "./serviceAnimation.js";

describe("AnimationService", () => {
  let ANIMATION_SERVICE;

  beforeEach(() => {
    ANIMATION_SERVICE = new AnimationService();
  });

  it("should be an instance of AnimationService", () => {
    expect(ANIMATION_SERVICE).toBeInstanceOf(AnimationService);
  });

  it("should have method 'findAll'", () => {
    vi.spyOn(ANIMATION_SERVICE, "findAll");
  });

  it("should call with the expected arguments", async () => {
    const spy = vi.spyOn(ANIMATION_SERVICE, "findAll");
    await ANIMATION_SERVICE.findAll(1, "popularity.desc", 16);
    expect(spy).toHaveBeenCalledWith(1, "popularity.desc", 16);
  });

  it("should return an array of animation", async () => {
    const animation = await ANIMATION_SERVICE.findAll(1, "popularity.desc", 16);
    expectTypeOf(animation).toBeObject();
  });
});
