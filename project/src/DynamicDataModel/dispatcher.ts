import { DidgahDeferred } from "gulp-es3-typescript-library";

export class Dispatcher {

	private widgetCallbacks: Array<WidgetCallback> = [];

	registerCallback(widgetCallback: WidgetCallback) {
		this.widgetCallbacks.push(widgetCallback);
	}

	invokeAllCallbacks() {
		const callbacks = this.widgetCallbacks.map((widgetCallback) => {
			return (() => {
				const dfd = DidgahDeferred.create<any>();
				widgetCallback.callback(widgetCallback.softwareGuid, widgetCallback.widgetId, widgetCallback.attributes)
					.then(result => {
						dfd.resolve({ fieldInstanceName: widgetCallback.fieldInstanceName, data: result });
					});
				return dfd;
			})();
		});

		const dfd = DidgahDeferred.create();
		Promise.all(callbacks)
			.then(dfd.resolve)
			.catch(dfd.fail);
		return dfd;
	}

}

export interface WidgetCallback {
	softwareGuid: System.Guid;
	widgetId: string;
	fieldInstanceName: string;
	attributes: object;
	callback: (softwareGuid: System.Guid, widgetId: string, attributes: object) => DidgahDeferred<any>;
}
