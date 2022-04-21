// Disabled because this should be able to take *any* function
// eslint-disable-next-line @typescript-eslint/ban-types
function useDebounce(this: any, fn: Function, timeout: number) {
	let timer: NodeJS.Timeout;
	return (...args: any) => {
		clearTimeout(timer);
		timer = setTimeout(() => { fn.apply(this, args); }, timeout);
	};
}

export default  useDebounce;