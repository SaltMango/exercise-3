import React from "react";
import { useQuery, gql } from "@apollo/client";

interface code {
  code: string;
}

interface continent {
  continent: {
    countries: continentCountries[];
  };
}
interface continentCountries {
  name: string;
  emoji: string;
}

const LIST_OF_COUNTRIES = gql`
  query ($code: ID!) {
    continent(code: $code) {
      countries {
        name
        emoji
      }
    }
  }
`;

const ContinentCountries: React.FC<{ code: string }> = ({ code }) => {
  if (code.length !== 2) {
    return <></>;
  }

  const { loading, error, data } = useQuery<continent, code>(
    LIST_OF_COUNTRIES,
    { variables: { code: code.toLocaleUpperCase() } }
  );
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Try again!</p>;
  if (data && !data.continent) {
    return <p>Code not found!</p>;
  }

  return (
    <div>
      {data &&
        data.continent.countries.map(
          (item: continentCountries, index: number) => {
            return (
              <div key={index++}>
                <span>{item.emoji}</span> <span>{item.name}</span>
                <hr className="divider"></hr>
              </div>
            );
          }
        )}
    </div>
  );
};

export default ContinentCountries;