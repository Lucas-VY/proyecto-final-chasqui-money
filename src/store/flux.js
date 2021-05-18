const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      /* USER ES un OBJ  */
      historial: null,
      profile: {},
      baseURL: "http://127.0.0.1:5000",
      email: "",
      password: "",
      currentUser: {},
      isLogged: false,
      errors: null,

    },
    actions: {
      // Use getActions to call a function within a fuction

      /* PROFILES FUNCIONANDO*/
      getProfile: (props) => {
        fetch("http://127.0.0.1:5000/user/profile/")
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({
              profile: data,
            });
          });
        /* .then((result) => {
            props.history.push("/user/profile/");
          }); */
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

      /* LOGIN FALTA DINAMIZAR EL LOGIN CON EL PERFIL */
      /* inicioSesion: (values) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(values);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        return fetch("http://127.0.0.1:5000/user/signin", requestOptions)
          .then((response) => response.json())
          .catch((error) => {
            console.log("error", error);
            throw error;
          });
      }, */

      handleSubmitLogin: (e, history) => {
        e.preventDefault();
        const store = getStore();
        const { email, password } = store;
        const data = {
          email: email,
          password: password,
        };
        getActions().login("/user/signin", data, history);
      },

      handleChange: (e) => {
        setStore({
          [e.target.name]: e.target.value,
        });
      },

      getUser: () => {
        if (sessionStorage.getItem("currentUser")) {
          let resultado = sessionStorage.getItem("currentUser");
          setStore({ profile: JSON.parse(resultado) });
        }
      },

      /* USUARIO LOGEADO MOSTRANDO */
      isLogged: () => {
        if (sessionStorage.getItem("currentUser")) {
          let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
          let isLogged = sessionStorage.getItem("isLogged");

          setStore({
            currentUser: currentUser,
            isLogged: isLogged,
          });
        }
      },

      /*  LOGIN DE USUARIO */
      login: async (url, data, history) => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL + url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const info = await resp.json();
        console.log(info);
        if (info.msg) {
          setStore({
            errors: info,
          });
        } else {
          setStore({
            currentUser: info,
            isLogged: true,
            errors: null,
            email: "",
            password: "",

            /* aqui agregar el type y condicionar el history a profe o usuario */
          });
          sessionStorage.setItem("currentUser", JSON.stringify(info));
          sessionStorage.setItem("isLogged", true);
          if (store.currentUser) {
            history.push("/user/profile/");
          }
        }
      },

      /* LOGOUT DE USUARIO */
      logout: () => {
        sessionStorage.removeItem("currentUser");
        sessionStorage.removeItem("isLogged");
        setStore({
          currentUser: null,
          isLogged: false,
        });
      },

      /* CONTACTANOS  */
      contactanos: (values) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(values);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        return fetch("", requestOptions)
          .then((response) => response.json())
          .catch((error) => {
            console.log("error", error);
            throw error;
          });
      },

      /* CONTACTANOS PERFIL  */
      contactanosPerfil: (values) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(values);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        return fetch("http://127.0.0.1:5000/user/card", requestOptions)
          .then((response) => response.json())
          .catch((error) => {
            console.log("error", error);
            throw error;
          });
      },

      /* TRANSFERENCIAS  */
      transferencias: (values) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(values);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        return fetch("http://127.0.0.1:5000/user/card/", requestOptions)
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
