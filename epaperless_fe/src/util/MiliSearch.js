export const miliPagination = async () => {
  try {
    const response = await fetch(
      "http://localhost:7700/indexes/epaperless/search",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          offset: 0,
          limit: 4,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return error;
  }
};

miliPagination();
