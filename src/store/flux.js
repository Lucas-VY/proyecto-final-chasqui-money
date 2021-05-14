const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      /* ARRAY  */
      profile: {
        /* {
		 		name: '',
				lastname:'',
				country: '',
				phone: '',
				address: '',
				email: '',
			} */
      },

      // ?	transferencias: []
    },
    actions: {
      // Use getActions to call a function within a fuction
      /* PROFILES */
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
