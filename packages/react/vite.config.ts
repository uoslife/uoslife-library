import * as path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

import { name } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/lib/index.ts"),
			name: "index",
			formats: ["es", "umd"],
			fileName: (format) => `${name}.${format}.js`,
		},
		rollupOptions: {
			external: ["react"],
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
	plugins: [dts({ insertTypesEntry: true }), react(), tsconfigPaths()],
});
