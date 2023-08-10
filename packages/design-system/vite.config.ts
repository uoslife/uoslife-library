import * as path from "path";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

import { name } from "./package.json";

export default defineConfig({
	resolve: {
		alias: {
			"react-native": "react-native-web",
		},
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/lib/index.ts"),
			name: "index",
			formats: ["es", "umd"],
			fileName: (format) => `${name}.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-native", "@emotion/native", "@uoslife/react"],
			output: {
				globals: {
					react: "React",
					"react-native": "ReactNative",
				},
			},
		},
		commonjsOptions: {
			esmExternals: ["react"],
		},
	},
	plugins: [
		dts({ insertTypesEntry: true, exclude: "**/*.stories.tsx" }),
		tsconfigPaths(),
	],
});
