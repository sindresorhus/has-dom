export default function hasDom() {
	return typeof window !== 'undefined' &&
		typeof document !== 'undefined' &&
		typeof document.createElement === 'function';
}
