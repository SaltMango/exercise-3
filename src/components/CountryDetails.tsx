import React from "react";
import { useQuery, gql } from "@apollo/client";

const COUNTRY_DETAILS = gql`
  query ($code: ID!) {
    country(code: $code) {
      name
      code
      currency
      emoji
      languages {
        name
      }
    }
  }
`;

interface country {
  code: string;
  currency: string;
  emoji: string;
  languages: { name: string }[];
  name: string;
}
interface language {
  name: string;
}

interface code {
  code: string;
}

const CountryDetails: React.FC<{ code: string }> = ({ code }) => {
  if (code.length !== 2) {
    return <></>;
  }
  const { loading, error, data } = useQuery<{ country: country }, code>(
    COUNTRY_DETAILS,
    { variables: { code: code.toLocaleUpperCase() } }
  );

  console.log("erroooooor", error);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Try again!</p>;
  }
  if (data && !data.country) {
    return <p>Code not found!</p>;
  }

  return (
    <div data-testid="countryDetails">
      <p>Name: {data && data.country.name}</p>
      <p>Code: {data && data.country.code}</p>
      <p>Currency: {data && data.country.currency}</p>
      <p>Flag: {data && data.country.emoji}</p>
      <p>
        Languages:{" "}
        {data &&
          data.country.languages.map((item: language, index: number) =>
            index === 0 ? item.name : `, ${item.name}`
          )}
      </p>
    </div>
  );
};


export default CountryDetails;