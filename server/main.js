import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import './api';

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

