// Disabled because this should be able to take *any* function
// eslint-disable-next-line
function useDebounce(this: any, fn: Function, timeout: number) {
	let timer: NodeJS.Timeout;

	// Disabled because this should be able to take any argument
	// eslint-disable-next-line
	return (...args: any) => {
		clearTimeout(timer);
		timer = setTimeout(() => { fn.apply(this, args); }, timeout);
	};
}

export default  useDebounce;