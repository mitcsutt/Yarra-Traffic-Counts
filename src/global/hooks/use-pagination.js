import { useReducer } from "react";

export default (total, perPage) => {
    const [state, dispatch] = useReducer(reducer, init(total, perPage));

    function init(total, perPage) {
        const hasNext = total > perPage;
        const totalPages = Math.ceil(total / perPage);
        return {
            total: total,
            perPage: perPage,
            currentPage: 0,
            totalPages: totalPages,
            hasNext: hasNext,
            hasPrevious: false
        };
    }

    function reducer(state, action) {
        const { currentPage, totalPages } = state;

        switch (action.type) {
            case "next":
                return {
                    ...state,
                    currentPage: currentPage + 1,
                    hasNext: currentPage + 1 < totalPages,
                    hasPrevious: currentPage + 1 > 1
                };
            case "previous":
                return {
                    ...state,
                    currentPage: currentPage - 1,
                    hasNext: currentPage - 1 < totalPages,
                    hasPrevious: currentPage - 1 > 1
                };
            case "update":
                return init(action.total, action.perPage);
            default:
                throw new Error();
        }
    }

    return [state, dispatch];
};