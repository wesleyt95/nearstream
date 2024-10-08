<template>
    <q-page>
      <q-toolbar class="q-py-md">
        <q-btn
          color="positive"
          icon="arrow_back"
          flat
          to="/"
        />
        <q-toolbar-title class="text-h5 text-weight-bold absolute-center">Settings</q-toolbar-title>
      </q-toolbar>
          <q-list separator class="shadow-2 rounded-borders" style="width: 100%;">
              <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label overline>Example</q-item-label>
                    <q-item-label>Edit</q-item-label>
                  </q-item-section>
              </q-item>
          </q-list>
    </q-page>
  </template>