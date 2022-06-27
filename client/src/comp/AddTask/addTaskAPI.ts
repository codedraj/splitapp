export type Args = {
  title: string;
  description: string;
  status: string;
  userName: string;
};

const addTaskAPI = async ({ title, description, status, userName }: Args) => {
  let url: any = `${process.env.REACT_APP_API_URL}tasks/newtask`;
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        title,
        description,
        status,
        userName,
      },
    }),
  });
  const data = await response.json();
  return data;
};
export default addTaskAPI;
