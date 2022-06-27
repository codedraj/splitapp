const getAllTasksApi = async () => {
  let url: any = `${process.env.REACT_APP_API_URL}tasks/getAllTasks`;
  const response = await fetch(url);
  const data = response.json();
  return data;
};
export default getAllTasksApi;
