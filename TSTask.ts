export class TSTask {
	static Delay(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	static Forget(func: () => void) {
		func();
	}

	static async Run<T>(func: () => Promise<T>): Promise<T> {
		return await func();
	}

	static async WaitUntil(predictor: () => boolean): Promise<void> {
		while (true) {
			await this.Delay(1);
			if (predictor()) {
				break;
			}
		}
	}
}
