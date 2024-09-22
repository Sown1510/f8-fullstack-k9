const baseUrl = "http://103.159.51.69:2000";

const getMethod = async (endpoint, accessToken = "", refreshToken = "") => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${accessToken}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const postMethod = async (endpoint, data = "", accessToken = "", refreshToken = "") => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${accessToken}`,
      },
      body: refreshToken ? JSON.stringify({ refresh: `${refreshToken}` }) : data ? JSON.stringify(data) : null,
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};

const putMethod = async (endpoint, data = "", accessToken = "", refreshToken = "") => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteMethod = async (endpoint, accessToken = "") => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${accessToken}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getMethod, postMethod, putMethod, deleteMethod };
