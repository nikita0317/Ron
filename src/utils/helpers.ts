export const getData = async () => {
  const data = await fetch("Data/Data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then(function (response) {
    return response.json();
  });
  return data;
};
