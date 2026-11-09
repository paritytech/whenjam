const HEADING = /^(#{1,6})\s+(.*?)\s*#*\s*$/;
const TASK = /^(\s*)[-*+]\s+\[([ xX])\]\s/;

/** The lines under the heading whose text is `title`, up to the next heading of the same or higher level. */
const sectionLines = (lines, title) => {
	const start = lines.findIndex((line) => HEADING.exec(line)?.[2] === title);
	if (start === -1) return [];
	const level = HEADING.exec(lines[start])[1].length;
	const rest = lines.slice(start + 1);
	const end = rest.findIndex((line) => {
		const match = HEADING.exec(line);
		return match && match[1].length <= level;
	});
	return end === -1 ? rest : rest.slice(0, end);
};

/** Top-level task items only; indented sub-items are ignored. Each item is a milestone. */
const byItems = (lines) =>
	lines
		.map((line) => TASK.exec(line))
		.filter((match) => match && match[1] === '')
		.map((match) => match[2] !== ' ');

/** Each heading that has task items under it is a milestone, done when all of them are ticked. */
const byHeadings = (lines) => {
	const groups = [];
	let current = null;
	for (const line of lines) {
		if (HEADING.test(line)) {
			current = null;
			continue;
		}
		const match = TASK.exec(line);
		if (!match) continue;
		if (!current) groups.push((current = []));
		current.push(match[2] !== ' ');
	}
	return groups.map((ticks) => ticks.every(Boolean));
};

/**
 * Counts a project's completed milestones.
 *
 * Frontmatter controls what a milestone is:
 * - `progressSection`: heading text whose section is counted (default "Phases & Milestones").
 * - `progressBy`: `items` (default) counts top-level task items; `headings` counts each
 *   heading with task items under it, done when every one of them is ticked.
 *
 * `percent` is rounded down, so it only reaches 100 when every milestone is done;
 * a project without milestones is 0%.
 */
export const countProgress = (source, { progressSection, progressBy } = {}) => {
	const lines = sectionLines(source.split('\n'), progressSection || 'Phases & Milestones');
	const milestones = progressBy === 'headings' ? byHeadings(lines) : byItems(lines);
	const total = milestones.length;
	const done = milestones.filter(Boolean).length;
	const percent = total ? Math.floor((done / total) * 100) : 0;
	return { done, total, percent };
};
