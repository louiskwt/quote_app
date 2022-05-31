import { useState, createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4} from 'uuid';
import quoteApi from '../apis/quoteApi';

const FormsContext = createContext();

// initial form state
const initialFormState = {
    id: '',
    name: '',
    address: '',
    contents: [
        {
            id: uuidv4(),
            item: '',
            price: '',
        }
    ],
    memo: ''
}

const formReducer = (formState, formAction) => {
    switch (formAction.type) {
        case "SET_GENERAL_INPUT":
            return { ...formState, [formAction.field]: formAction.value }
        case "ADD_CONTENT":
            return { ...formState, contents: formAction.updatedContents};
        case "DELETE_CONTENT":
            return {...formState, contents: formState.contents.filter((content) => content.id !== formAction.id)};
        case "SET_CONTENT_INPUT":
            return { ...formState, contents: formAction.updatedContents};
        case "SET_UPDATE_FORM":
            return {
                id: formAction.quote.id,
                name: formAction.quote.name,
                address: formAction.quote.address,
                contents: formAction.quote.contents,
                memo: formAction.quote.memo.join('$'),
            };
        case "RESET_FORM_STATE":
            return {
                ...initialFormState
            };
        default:
            return formState;
    }
}

const FormsContextProvider = ({children}) => {
    let navigate = useNavigate();

    const [formState, dispatchForm] = useReducer(formReducer, initialFormState);

    const handleGeneralInput = (field, value) => {
        dispatchForm({ type: "SET_GENERAL_INPUT", field, value })
    }

    const setUpdateForm = (quote) => {
        dispatchForm({ type: "SET_UPDATE_FORM", quote });
    }

    const addContent = () => {
        // set up an empty content
        const content = {
            id: uuidv4(),
            item: '',
            price: '',
        }
        const updatedContents = [...formState.contents, content];
        dispatchForm({ type: "ADD_CONTENT", updatedContents });
    }


    const deleteContent = (id) => {
        // filter out the content based on id
        dispatchForm({ type: "DELETE_CONTENT", id })
    }

    const handleContentInput = (index, key, value) => {
        let updatedContents = [...formState.contents];
        updatedContents[index][key] = value;

        dispatchForm({ type: "SET_CONTENT_INPUT", updatedContents });
    }

    const handleFormSubmit = async (event) => {
        let formData = {
            name: formState.name,
            address: formState.address,
            contents: formState.contents,
            memo: [formState.memo]
        };
        console.log(formData);
        event.preventDefault();

        try {
            const data = await quoteApi.post('/', formData);
            console.log(data);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleFormUpdate = async (event) => {
        let formData = {
            name: formState.name,
            address: formState.address,
            contents: formState.contents,
            memo: [formState.memo]
        };
        console.log(formData);
        event.preventDefault();

        try {
            const data = await quoteApi.put(`/${formState.id}`, formData);
            console.log(data);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }

    const resetForm = () => {
        dispatchForm({type: "RESET_FORM_STATE"});
    }


    const value = {
        handleGeneralInput,
        addContent,
        deleteContent,
        handleContentInput,
        handleFormSubmit,
        handleFormUpdate,
        setUpdateForm,
        resetForm,
        formState
    }

    return (
        <FormsContext.Provider value={value}>
            {children}
        </FormsContext.Provider>
    )
}

export { FormsContext, FormsContextProvider }