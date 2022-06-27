export type Args = {
  title: string;
  description: string;
  status: string;
  userName: string;
  _id: string;
};

const editTaskAPI = async ({
  title,
  description,
  status,
  userName,
  _id,
}: Args) => {
  let url: any = `${process.env.REACT_APP_API_URL}tasks/updateTask/`;
  const response = await fetch(url, {
    method: "PUT",
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
      _id: _id,
    }),
  });
  const data = await response.json();
  return data;
};
export default editTaskAPI;
