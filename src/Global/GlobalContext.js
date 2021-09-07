import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";
import donateData from "../components/DonateComponents/DonateMaterial/DonateMaterial";

const AppContext = React.createContext();

const initialState = {
  menuState: { loading: false, showMenu: false },
  contactState: {}, //如果變成array可以儲存多筆資料，但是可能需要另一個dispatch去執行SubmitMessage
  formSubmitted: false,
  petState: { petData: [], loading: false },
  adoptState: [],
  donateState: { donateDatas: donateData },
  checklistState: [],
  totalState: [],
  loginState: {
    isLogin: false,
    loginPage: false,
  },
  alertState: {
    show: false,
    alertType: "",
    alertMsg: "",
  },
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const showMenubar = () => {
    dispatch({ type: "TOGGLE_MENU" });
  };

  const contactSuccess = (objectForContactState) => {
    dispatch({ type: "CONTACT_SUCCESS", payload: objectForContactState });
  };

  const submitForm = () => {
    dispatch({ type: "SUBMIT_FORM" });
  };

  const cancelSubmitForm = () => {
    dispatch({ type: "CANCEL_FORM" });
  };

  const petLoading = () => {
    dispatch({ type: "PET_LOADING" });
  };

  const petNotloading = () => {
    dispatch({ type: "PET_NOT_LOADING" });
  };

  const handleSearch = async (searchWord) => {
    await fetchData();
    dispatch({ type: "HANDLE_SEARCH", payload: searchWord });
    //每次search之前都先重新fetch資料，不然的話資料不會自動更新，搜完貓後，狗就不見了
    //想辦法在search完之後不再fetchdata，不然會一直fetch原本的資料回來，造成無法search
    //這個做法的缺點是比較卡，每次重新取得資料時都要等待，看看是否有更好方法？
  };

  const adopt = (petInfo) => {
    //If user haven't login show alert
    if (!state.loginState.isLogin) {
      showAlert({ show: true, alertType: "fail", alertMsg: "請先登入" });
    } else {
      dispatch({ type: "ADOPT", payload: petInfo });
      showAlert({ show: true, alertType: "success", alertMsg: "領養成功" });
    }
  };

  const cancelAdopt = (cancelPetInfo) => {
    dispatch({ type: "CANCEL_ADOPT", payload: cancelPetInfo });
  };

  const increaseDonate = (donateInfo) => {
    dispatch({ type: "INCREASE_DONATE", payload: donateInfo });
  };

  const decreaseDonate = (donateInfo) => {
    dispatch({ type: "DECREASE_DONATE", payload: donateInfo });
  };

  const addToChecklist = (donateInfo) => {
    dispatch({ type: "ADD_TO_CHECKLIST", payload: donateInfo });
  };
  const addToTotal = () => {
    dispatch({ type: "ADD_TO_TOTAL" });
  };
  const delFromTotal = (id) => {
    dispatch({ type: "DELETE_FROM_TOTAL", payload: id });
  };
  const clearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  const checkLogin = (login) => {
    dispatch({ type: "CHECK_LOGIN", payload: login });
  };

  const showLogin = (show) => {
    dispatch({ type: "SHOW_LOGIN", payload: show });
  };

  const showAlert = (alertObjectInfo) => {
    dispatch({ type: "SHOW_ALERT", payload: alertObjectInfo });
  };

  const removeAlert = () => {
    dispatch({ type: "REMOVE_ALERT" });
  };

  const fetchData = async () => {
    petLoading();
    const res = await fetch(
      "https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL"
    );
    const data = await res.json();
    const newData = data.slice(0, 205); //這裡決定要拿多少筆資料
    dispatch({ type: "GET_PET_DATA", payload: newData });
    petNotloading();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        showMenubar,
        contactSuccess,
        submitForm,
        cancelSubmitForm,
        handleSearch,
        adopt,
        cancelAdopt,
        increaseDonate,
        decreaseDonate,
        addToChecklist,
        addToTotal,
        delFromTotal,
        clearAll,
        checkLogin,
        showLogin,
        showAlert,
        removeAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
