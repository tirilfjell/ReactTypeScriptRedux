interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SerachRepositoriesAction {
  type: "search_repositories";
}
interface SerachRepositoriesSuccessAction {
  type: "search_repositories_success";
  payload: string[];
}
interface SerachRepositoriesErrorAction {
  type: "search_repositories_ error";
  payload: string;
}

const reducer = (
  state: RepositoriesState,
  action:
    | SerachRepositoriesAction
    | SerachRepositoriesSuccessAction
    | SerachRepositoriesErrorAction
): RepositoriesState => {
  switch (action.type) {
    case "search_repositories":
      return { loading: true, error: null, data: [] };
    case "search_repositories_success":
      return { loading: false, error: null, data: action.payload };
    case "search_repositories_ error":
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
