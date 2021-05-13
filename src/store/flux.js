
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			/* ARRAY  */
			profile: [/* {
		 		name: '',
				lastname:'',
				country: '',
				phone: '',
				address: '',
				email: '',
			} */],
			
	// ?	transferencias: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			/* PROFILES */
			getProfile: () => {
				fetch("http://localhost:5000/user/profile/1")
				.then( (resp) => resp.json())
				.then((data) => {
					console.log(data)
					setStore({
						profile: data,
					});
					
				});
			},


		}
	};
};

export default getState;