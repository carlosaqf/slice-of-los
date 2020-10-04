import React, { useEffect, useState } from 'react';

const gql = String.raw;

const details = gql`
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
  
`;

export default function useLatestData() {
  const [slicemasters, setSlicemasters] = useState();
  const [slices, setSlices] = useState();

  useEffect(() => {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
			query{
			  StoreSettings(id:"downtown"){
				name
				currentSlicemasters{
				  ${details}
				}
				currentPizzas{
				  ${details}
				}
			  }
			}	
		`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setSlicemasters(res.data.StoreSettings.currentSlicemasters);
        setSlices(res.data.StoreSettings.currentPizzas);
      });
  }, []);

  return {
    slicemasters,
    slices,
  };
}
