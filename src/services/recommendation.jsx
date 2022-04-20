import { api, setApiHeader } from "../config/apiRecommendation";

export const getRecommendation = async (itemId, limit) => {
	setApiHeader(
		"authorization",
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbS5iciIsInBhc3N3b3JkIjoiMTIzNDU2IiwicmVjb21tZW5kYXRpb25TeXN0ZW0iOiJSdXJhbEZsaXgifQ.M03m0-5KUltXepkyWpZVk6CqUFcovU6d5I3Gigw00sM"
	);

	const response = await api.post("/recommendationSystem/recommendByItem", {
		limit: limit,
	});

	return response;
};
