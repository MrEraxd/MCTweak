import { DocumentNode } from 'graphql';

export function queryData(query: DocumentNode, variables?: any) {
  return fetch(import.meta.env.VITE_MCTWEAK_DB_ADDRESS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query.loc?.source.body,
      variables: variables,
    }),
  }).then((res) => res.json());
}
