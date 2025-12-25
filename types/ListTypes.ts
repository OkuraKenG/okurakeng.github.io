export interface DateRange {
	start: string;
	end: string;
}
export interface ListType {
	experience?: {
		location: string;
		role: string;
		link: string;
	};
	project?: {
		name: string;
		link: string;
		preview?: string;
		keyTechnologies: string[];
	}
	dates: DateRange[];
	description: string;
}
