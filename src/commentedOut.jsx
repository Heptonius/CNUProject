// const location = useLocation();
//   const [notificationState, setNotificationState] = useState({
//     alertType: location?.state?.alertType ?? '',
//     alertMessage: location?.state?.alertMessage ?? '',
//     showAlert: false,
//     alertShownAlready: location?.state?.alertShownAlready ?? true,
//   });

//   useEffect(() => {
//     if (location?.state?.alertType !== '') {
//       setNotificationState((prevState) => {
//         return { ...prevState, showAlert: true, alertShownAlready: false };
//       });
//     }
//     if (notificationState.alertShownAlready) {
//       setNotificationState((prevState) => {
//         return { ...prevState, showAlert: false };
//       });
//     } else {
//       setNotificationState((prevState) => {
//         return { ...prevState, showAlert: true };
//       });
//       setTimeout(() => {
//         setNotificationState((prevState) => {
//           return { ...prevState, showAlert: false, alertShownAlready: true };
//         });
//       }, 5000);
//     }
//   }, []);

// const [requestState, setRequestState] = useState({
//   requestPending: true,
//   error: '',
//   requestSuccessful: false,
//   showAlert: false,
// });

// const handleDiscardRecipe = () => {
//   handleRecipeSubmitAlert();
//   setTimeout(() => {
//     history.push({
//       pathname: '/',
//       state: {
//         alertType: 'danger',
//         alertMessage: 'Recept byl zahozen',
//         alertShownAlready: false,
//       },
//     });
//   }, 5000);
// };

// const handleAlertManualClose = () => {
//   setRequestState((prevState) => {
//     return { ...prevState, showAlert: false };
//   });
// };

// const handleRecipeSubmitAlert = (error) => {
//   if (error === '') {
//     setRequestState(() => {
//       return {
//         requestPending: false,
//         requestSuccessful: true,
//         error: '',
//       };
//     });
//   } else {
//     setRequestState(() => {
//       return {
//         requestPending: false,
//         requestSuccessful: false,
//         error,
//       };
//     });
//   }
//   resetSubmitSuccess();
// };

// const resetSubmitSuccess = () => {
//   setTimeout(() => {
//     setRequestState(() => {
//       return {
//         requestPending: false,
//         requestSuccessful: false,
//         error: '',
//         showAlert: false,
//       };
//     });
//   }, 3000);
// };

/* <Row className="d-flex justify-content-center">
  <Alert
    className="position-sticky"
    show={requestState.showAlert}
    variant={requestState.requestSuccessful ? 'success' : 'danger'}
    dismissible
    onClose={handleAlertManualClose}
  >
    <Alert.Heading>
      {requestState.requestSuccessful ? <p>Recept byl uložen</p> : <p>Něco se pokazilo</p>}
    </Alert.Heading>
    {requestState.requestSuccessful ? <></> : <p>{requestState.error}</p>}
  </Alert>
</Row>; */

// const history = useHistory();

// const reducedIngredients = ingredients.map((item) => {
//   const { position, _id, ...rest } = item;
//   return rest;
// });

// const mockPayload = {
//   title,
//   preparationTime: Number(preparationTime) > 0 ? preparationTime : undefined,
//   servingCount: Number(servingCount) === 0 ? undefined : servingCount,
//   sideDish: sideDish === '' ? 'Nic' : sideDish,
//   directions,
//   ingredients: reducedIngredients,
// };

// const handleNewRecipeSubmit = () => {
//   const newRecipePayload = mockPayload;
//   console.log('Recipe posted is:', newRecipePayload);
//   if (title !== '') {
//     api
//       .post('/recipes', newRecipePayload)
//       .then(({ data: { slug } }) => {
//         console.log('recept byl úspěšně přidán');
//         history.push(`/recept/${slug}`);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } else {
//     console.log('Název receptu nesmí být prázdný');
//   }
// };
