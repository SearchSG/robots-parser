declare module 'robots-parser';

/**
 * property of rule that is added into the robots parser
 * rules refer to the allow/disallow rules stated in robots.txt
 */
interface IRule {
	allow: boolean;
	lineNumber: number;
	pattern: string;
}

interface IRobot {
	isAllowed(url: string, ua?: string): boolean | undefined;
	isDisallowed(url: string, ua?: string): boolean | undefined;
	getMatchingLineNumber(url: string, ua?: string): number;
	getCrawlDelay(ua?: string): number | undefined;
	getSitemaps(): string[];
	getPreferredHost(): string | null;
	getAllRules(ua?: string): IRule[];
}

export { Robots as robotsParser };
export function Robots(url: string, robotstxt: string): IRobot;
export function matches(pattern: string, path: string): boolean;
