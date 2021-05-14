const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      /* USER ES un OBJ  */
      profile: {},

    },
    actions: {
      // Use getActions to call a function within a fuction

      /* PROFILES FUNCIONANDO*/
      getProfile: () => {
        fetch("http://127.0.0.1:5000/user/profile/")
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({
              profile: data,
            });
          });
      },
	  

	  /* REGISTRO FUNCIONANDO */
      registro: (values) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(values);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        return fetch("http://127.0.0.1:5000//user/signup", requestOptions)
          .then((response) => response.json())
          .catch((error) => {
            console.log("error", error);
            throw error;
          });
      },

      inicioSesion: (values) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(values);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        return fetch("http://127.0.0.1:5000//user/signin", requestOptions)
          .then((response) => response.json())
          .catch((error) => {
            console.log("error", error);
            throw error;
          });
      },
    },
  };
};

export default getState;
