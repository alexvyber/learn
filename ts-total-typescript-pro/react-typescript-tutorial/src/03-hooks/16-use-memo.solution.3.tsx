import { useMemo } from "react";
import { Equal, Expect } from "../helpers/type-utils";

export const Component = () => {
	const autoGeneratedIds = useMemo((): string[] => {
		// generate 100 random string uuid's
		return Array.from({ length: 100 }, () =>
			Math.random().toString(36).substr(2, 9),
		);
	}, []);

	type test = Expect<Equal<typeof autoGeneratedIds, string[]>>;
};