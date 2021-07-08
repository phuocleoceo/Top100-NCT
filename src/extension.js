export function changeTopName(s) {
	switch (s) {
		case "top100_VN": return "Việt Nam";
		case "top100_AM": return "Âu Mỹ";
		case "top100_CA": return "Châu Á";
		case "top100_KL": return "Không Lời";
		default: return s;
	}
}