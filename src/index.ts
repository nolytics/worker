import { Env, fromEnv } from "./config";
import { handler } from "./http";

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const atlas = fromEnv(env);

		return handler(request, atlas);
	},
};
