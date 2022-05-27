import { useState, createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4} from 'uuid';
import quoteApi from '../apis/quoteApi';

const FormsContext = createContext();

// initial form state
const initialFormState = {
    name: '',
    address: '',
    contents: [
        {
            id: uuidv4(),
            item: '',
            price: '',
            subItem: ''
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
            return { ...formState, contents: formAction.updatedContents}
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

    const addContent = () => {
        // set up an empty content
        const content = {
            id: uuidv4(),
            item: '',
            price: '',
            subItem: ''
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

    const handleFormSubmit = async (event, action) => {
        let formData = formState;

        console.log(formData);
        event.preventDefault();
        if(action === 'submit') {

            try {
                const data = await quoteApi.post('/', {
                    name: formState.name,
                    address: formState.address,
                    content: formState.contents,
                    memo: formState.memo.split('/')
                })
                console.log(data);
                navigate('/');
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    const value = {
        handleGeneralInput,
        addContent,
        deleteContent,
        handleContentInput,
        handleFormSubmit,
        formState
    }

    return (
        <FormsContext.Provider value={value}>
            {children}
        </FormsContext.Provider>
    )
}

export { FormsContext, FormsContextProvider }