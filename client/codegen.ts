import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: "http://localhost:4000", // This means where our graphql server is defined.
    documents: ["src/**/*.tsx"],     // This means which files should we look into to generate types.
    generates: {                     // Describes where the generated types should be placed.
        "./src/__generated__/": {
            preset: "client"
        }
    }
};
export default config