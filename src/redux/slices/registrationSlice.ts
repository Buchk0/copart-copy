import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationState {
  businessOption: boolean;
  individualOption: boolean;
  name: string;
  surname: string;
  email: string;
  termsOption: boolean;
  nameDirty: boolean;
  surnameDirty: boolean;
  emailDirty: boolean;
  optionsError: string;
  nameError: string;
  surnameError: string;
  emailError: string;
  termsOptionError: string;
  validForm: boolean;
}

const initialState: RegistrationState = {
  businessOption: false,
  individualOption: false,
  name: '',
  surname: '',
  email: '',
  termsOption: false,
  nameDirty: false,
  surnameDirty: false,
  emailDirty: false,
  optionsError: '',
  nameError: 'First Name is required',
  surnameError: 'Last Name is required',
  emailError: 'Email is required',
  termsOptionError: '',
  validForm: false,
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setBusinessOption: (state) => {
      state.businessOption = !state.businessOption;
      state.individualOption = false;
      state.optionsError = '';
    },
    setIndividualOption: (state) => {
      state.individualOption = !state.individualOption;
      state.businessOption = false;
      state.optionsError = '';
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      const re = /^[A-Za-z]{2,20}$/;
      if (!re.test(action.payload)) {
        state.nameDirty = true;
        state.nameError = 'Name cannot be longer than 2 or shorter than 20 letters';
      } else {
        state.nameDirty = false;
        state.nameError = '';
      }
    },
    setSurname: (state, action: PayloadAction<string>) => {
      state.surname = action.payload;
      const re = /^[A-Za-z]{2,20}$/;
      if (!re.test(action.payload)) {
        state.surnameDirty = true;
        state.surnameError = 'Surname cannot be longer than 2 or shorter than 20 letters';
      } else {
        state.surnameDirty = false;
        state.surnameError = '';
      }
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!re.test(action.payload)) {
        state.emailDirty = true;
        state.emailError = 'Invalid Email';
      } else {
        state.emailDirty = false;
        state.emailError = '';
      }
    },
    setTermsOption: (state) => {
      state.termsOption = !state.termsOption;
      if (state.termsOption) {
        state.termsOptionError = ''
      } else {
        state.termsOptionError = 'Please Accept Terms and Conditions';
      }
    },
    validateForm: (state) => {
      state.validForm = true;
      if (!state.businessOption && !state.individualOption) {
        state.optionsError = 'Please choose to bid as a business or an individual';
        state.validForm = false;
      }
      if (!state.name) {
        state.nameDirty = true;
        state.nameError = 'First Name is required';
        state.validForm = false;
      }
      if (!state.surname) {
        state.surnameDirty = true;
        state.surnameError = 'Surname is required';
        state.validForm = false;
      }
      if (!state.email) {
        state.emailDirty = true;
        state.emailError = 'Email is required';
        state.validForm = false;
      }
      if (!state.termsOption) {
        state.termsOptionError = 'Please Accept Terms and Conditions';
        state.validForm = false;
      }
    },
    setDirtyField: (state, action: PayloadAction<{ field: string }>) => {
      const { field } = action.payload;
      switch (field) {
        case 'name':
          state.nameDirty = true;
          break;
        case 'surname':
          state.surnameDirty = true;
          break;
        case 'email':
          state.emailDirty = true;
          break;
      }
    },
  },
});

export const {
  setBusinessOption,
  setIndividualOption,
  setName,
  setSurname,
  setEmail,
  setTermsOption,
  validateForm,
  setDirtyField,
} = registrationSlice.actions;

export default registrationSlice.reducer;
