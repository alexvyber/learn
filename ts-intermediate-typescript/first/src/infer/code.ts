import { WebpackCompiler } from "./class";
import type { ConstructorArg } from "./type";
// --

const config: ConstructorArg<typeof WebpackCompiler> = {
  entry: "src/index.ts",
  // wutch: true, // SPELLING ERROR!!!
  watch: true,
  stats: "summary",
};

try {
  const compiler = new WebpackCompiler(config);
} catch (err) {
  throw new Error(
    `Problem compiling with config\n${JSON.stringify(config, null, "  ")}`
  );
}
