import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import quoteApi from "../apis/quoteApi";
import { toast } from "react-toastify";

const FormsContext = createContext();

// initial form state
const initialFormState = {
  id: "",
  name: "",
  address: "",
  contents: [
    {
      id: uuidv4(),
      item: "",
      price: "",
    },
  ],
  payment_method: [
    {
      id: uuidv4(),
      info: "開工收50%",
    },
    {
      id: uuidv4(),
      info: "完工即收另外50%",
    },
  ],
  memo: "",
};

const formReducer = (formState, formAction) => {
  switch (formAction.type) {
    case "SET_GENERAL_INPUT":
      return { ...formState, [formAction.field]: formAction.value };
    case "ADD_CONTENT":
      return { ...formState, contents: formAction.updatedContents };
    case "ADD_PAYMENT_METHOD":
      return { ...formState, payment_method: formAction.updatedPayment };
    case "DELETE_CONTENT":
      return {
        ...formState,
        payment_method: formState.contents.filter(
          (payment) => payment.id !== formAction.id
        ),
      };
    case "DELETE_PAYMENT":
      return {
        ...formState,
        payment_method: formState.payment_method.filter(
          (payment) => payment.id !== formAction.id
        ),
      };
    case "SET_CONTENT_INPUT":
      return { ...formState, contents: formAction.updatedContents };
    case "SET_PAYMENT_INPUT":
      return { ...formState, payment_method: formAction.updatedPayment };
    case "SET_UPDATE_FORM":
      return {
        id: formAction.quote.id,
        name: formAction.quote.name,
        address: formAction.quote.address,
        contents: formAction.quote.contents,
        memo: formAction.quote.memo.join("$"),
        payment_method: formAction.quote.payment_method.length > 0 || [
          {
            id: uuidv4(),
            info: "開工收50%",
          },
          {
            id: uuidv4(),
            info: "完工即收另外50%",
          },
        ],
      };
    case "RESET_FORM_STATE":
      return {
        ...initialFormState,
      };
    default:
      return formState;
  }
};

const FormsContextProvider = ({ children }) => {
  let navigate = useNavigate();

  const [formState, dispatchForm] = useReducer(formReducer, initialFormState);

  const handleGeneralInput = (field, value) => {
    dispatchForm({ type: "SET_GENERAL_INPUT", field, value });
  };

  const setUpdateForm = (quote) => {
    dispatchForm({ type: "SET_UPDATE_FORM", quote });
  };

  const addContent = () => {
    // set up an empty content
    const content = {
      id: uuidv4(),
      item: "",
      price: "",
    };
    const updatedContents = [...formState.contents, content];
    dispatchForm({ type: "ADD_CONTENT", updatedContents });
  };

  const addPaymentMethod = () => {
    // set up an empty content
    const payment = {
      id: uuidv4(),
      item: "",
      price: "",
    };
    const updatedPayment = [...formState.payment_method, payment];
    dispatchForm({ type: "ADD_PAYMENT_METHOD", updatedPayment });
  };

  const deleteContent = (id) => {
    // filter out the content based on id
    dispatchForm({ type: "DELETE_CONTENT", id });
  };

  const deletePayment = (id) => {
    // filter out the content based on id
    dispatchForm({ type: "DELETE_PAYMENT", id });
  };

  const handleContentInput = (index, key, value) => {
    let updatedContents = [...formState.contents];
    updatedContents[index][key] = value;

    dispatchForm({ type: "SET_CONTENT_INPUT", updatedContents });
  };

  const handlePaymentInput = (index, key, value) => {
    let updatedPayment = [...formState.payment_method];
    updatedPayment[index][key] = value;

    dispatchForm({ type: "SET_PAYMENT_INPUT", updatedPayment });
  };

  const handleFormSubmit = async (event, token) => {
    let formData = {
      name: formState.name,
      address: formState.address,
      contents: formState.contents,
      memo: [formState.memo],
      payment_method: formState.payment_method,
    };
    console.log(formData);
    event.preventDefault();

    try {
      const data = await quoteApi.post("/", formData, {
        headers: {
          "x-access-token": token,
        },
      });
      toast.success("已新增報價單");
      navigate("/");
    } catch (error) {
      console.log(error.message);
      toast.error(`新增報價單失敗：${error.message}`);
    }
  };

  const handleFormUpdate = async (event, token) => {
    let formData = {
      name: formState.name,
      address: formState.address,
      contents: formState.contents,
      memo: [formState.memo],
      payment_method: formState.payment_method,
    };

    event.preventDefault();

    try {
      await quoteApi.put(`/${formState.id}`, formData, {
        headers: {
          "x-access-token": token,
        },
      });
      toast.success("已更新報價單");
      navigate("/");
    } catch (error) {
      console.log(error.message);
      toast.error(`更生報價單失敗：${error.message}`);
    }
  };

  const resetForm = () => {
    dispatchForm({ type: "RESET_FORM_STATE" });
  };

  const value = {
    handleGeneralInput,
    addContent,
    deleteContent,
    handleContentInput,
    handleFormSubmit,
    handleFormUpdate,
    setUpdateForm,
    resetForm,
    addPaymentMethod,
    deletePayment,
    handlePaymentInput,
    formState,
  };

  return (
    <FormsContext.Provider value={value}>{children}</FormsContext.Provider>
  );
};

export { FormsContext, FormsContextProvider };
