const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
		/* ARRAY  de objetos(perfiles son obj)*/
		profile: [
        /* {
		 		name: '',
				lastname:'',
				country: '',
				phone: '',
				address: '',
				email: '',
			} */
		],

      // ?	transferencias: []
    },
    actions: {
      // Use getActions to call a function within a fuction

      /* PROFILES */
      getProfile: () => {
        fetch("http://localhost:5000/user/profile")
          .then((resp) => resp.json())
          .then((data) => {
            setStore({
              profile: data,
            });
          });
      },
	  
	  /* REGISTRO */
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
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log("error", error);
            throw error;
          });
      },
    },
  };
};

export default getState;
