import React from 'react';
import { Hello } from './Hello.jsx';
import { Table } from './dashboard/Table.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Table/>
  </div>
);
