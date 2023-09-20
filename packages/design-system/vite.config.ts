import * as path from "path";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import { name } from "./package.json";

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/lib/index.ts"),
			name: "index",
			formats: ["es", "umd"],
			fileName: (format) => `${name}-web.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-native", "@emotion/native"],
			output: {
				globals: {
					react: "React",
				},
			},
		},
		commonjsOptions: {
			esmExternals: ["react"],
		},
	},
	plugins: [dts({ insertTypesEntry: true, exclude: "**/*.stories.tsx" })],
});
