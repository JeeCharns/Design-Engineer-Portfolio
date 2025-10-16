// next.config.mjs
import withMDX from "@next/mdx"; // default export is the MDX plugin factory

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // any other Next config...
};

export default withMDX()(nextConfig);
//        ^ call the factory like in CJS: require("@next/mdx")()
