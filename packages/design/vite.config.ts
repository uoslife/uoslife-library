import * as path from "path";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	resolve: {
		alias: {
			"react-native": "react-native-web",
		},
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/lib/index.tsx"),
			name: "index",
			fileName: "index",
		},
		rollupOptions: {
			external: ["react", "react-native"],
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
	plugins: [dts({ exclude: "**/*.stories.tsx" })],
});
