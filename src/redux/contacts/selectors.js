import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;
export const selectShowModal = state => state.contacts.showModal;
export const selectDeleteId = state => state.contacts.deleteId;
export const selectIsAddFormOpen = state => state.contacts.isAddFormOpen;

const collator = new Intl.Collator('en');

function SortArray(x, y) {
  return collator.compare(x.name, y.name);
}

// Memoize selector
export const selectFiltredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    const filtredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase())
    );

    return filtredContacts.sort(SortArray);
  }
);
