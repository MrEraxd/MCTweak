import { DocumentNode } from 'graphql';

export function getData(query: DocumentNode) {
  return fetch('http://localhost:4000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query.loc?.source.body,
    }),
  }).then((res) => res.json());
}
