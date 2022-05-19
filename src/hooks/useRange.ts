function useRange(start: number, end: number) {
	return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}

export default useRange;