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
	getAllRules(): IRule[];
}

export default function robotsParser(url: string, robotstxt: string): IRobot;
