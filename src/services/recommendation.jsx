import { api } from "../config/apiRecommendation";

export const getRecommendation = async (recommendationSystemId, itemId) => {
	const response = await api.post("/recommendationSystem/getRecommendationsItem", {
		recommendation_system_id: recommendationSystemId,
	});

	return response;
};
