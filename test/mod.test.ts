import { assert, describe, it } from "./deps.ts";
import { dummyExport } from "@mod";

describe(`mod.ts`, () => {
  it(`should export correct objects and types`, () => {
    assert(dummyExport);
  });
});
