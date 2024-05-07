import * as path from "path";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	build: {
		lib: {
			entry: [
				path.resolve(__dirname, "src/lib/index.ts"),
				path.resolve(__dirname, "src/lib/index.web.ts"),
			],
			formats: ["es", "cjs"],
			fileName: (format, entryName) => {
				if (entryName.includes("web"))
					return `web/design-system.web.${format}.js`;
				return `design-system.${format}.js`;
			},
		},
		rollupOptions: {
			external: ["react", "react-native", "@emotion/native"],
			output: {
				globals: {
					react: "React",
				},
				interop: "compat",
			},
		},
		commonjsOptions: {
			esmExternals: ["react"],
		},
	},
	plugins: [
		dts({
			outDir: "dist/types",
			insertTypesEntry: true,
			exclude: "**/*.stories.tsx",
		}),
	],
});
