/** Formats a frontmatter date as day/month/year; returns unparseable values unchanged. */
export const formatDate = (value) => {
	if (!value) return '';
	const parsed = new Date(value);
	if (Number.isNaN(parsed.getTime())) return value;
	const day = String(parsed.getDate()).padStart(2, '0');
	const month = String(parsed.getMonth() + 1).padStart(2, '0');
	return `${day}/${month}/${parsed.getFullYear()}`;
};
