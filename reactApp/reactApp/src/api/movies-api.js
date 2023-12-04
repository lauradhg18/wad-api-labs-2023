export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=1f9cff0375eb080761a0a06347eb7f62&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };