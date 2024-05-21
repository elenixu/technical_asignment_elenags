"use client"

import Card from '@/components/Card';
import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function Home() {
  // State variables to store goals and country data
  const [goals, setGoals] = useState([]);
  const [country1, setCountry1] = useState();
  const [country2, setCountry2] = useState();
  const [country3, setCountry3] = useState();
  const [country4, setCountry4] = useState();
  const [country5, setCountry5] = useState();

  // Utility function to get corresponding attributes for each SDG goal by country
  const getCorrespondingAttributes = (country, code) => {
    switch(code) {
      // Each case corresponds to an SDG goal and returns the respective attributes
      case "1":
        return {
          rating: country.attributes.Goal_1_Rating,
          trend: country.attributes.Goal_1_Trend,
          score: country.attributes.Goal_1_Score,
        };
      case "2":
        return {
          rating: country.attributes.Goal_2_Rating,
          trend: country.attributes.Goal_2_Trend,
          score: country.attributes.Goal_2_Score,
        };
      case "3":
        return {
          rating: country.attributes.Goal_3_Rating,
          trend: country.attributes.Goal_3_Trend,
          score: country.attributes.Goal_3_Score,
        };
      case "4":
        return {
          rating: country.attributes.Goal_4_Rating,
          trend: country.attributes.Goal_4_Trend,
          score: country.attributes.Goal_4_Score,
        };
      case "5":
        return {
          rating: country.attributes.Goal_5_Rating,
          trend: country.attributes.Goal_5_Trend,
          score: country.attributes.Goal_5_Score,
        };
      case "6":
        return {
          rating: country.attributes.Goal_6_Rating,
          trend: country.attributes.Goal_6_Trend,
          score: country.attributes.Goal_6_Score,
        };
      case "7":
        return {
          rating: country.attributes.Goal_7_Rating,
          trend: country.attributes.Goal_7_Trend,
          score: country.attributes.Goal_7_Score,
        };
      case "8":
        return {
          rating: country.attributes.Goal_8_Rating,
          trend: country.attributes.Goal_8_Trend,
          score: country.attributes.Goal_8_Score,
        };
      case "9":
        return {
          rating: country.attributes.Goal_9_Rating,
          trend: country.attributes.Goal_9_Trend,
          score: country.attributes.Goal_9_Score,
        };
      case "10":
        return {
          rating: country.attributes.Goal_10_Rating,
          trend: country.attributes.Goal_10_Trend,
          score: country.attributes.Goal_10_Score,
        };
      case "11":
        return {
          rating: country.attributes.Goal_11_Rating,
          trend: country.attributes.Goal_11_Trend,
          score: country.attributes.Goal_11_Score,
        };
      case "12":
        return {
          rating: country.attributes.Goal_12_Rating,
          trend: country.attributes.Goal_12_Trend,
          score: country.attributes.Goal_12_Score,
        };
      case "13":
        return {
          rating: country.attributes.Goal_13_Rating,
          trend: country.attributes.Goal_13_Trend,
          score: country.attributes.Goal_13_Score,
        };
      case "14":
        return {
          rating: country.attributes.Goal_14_Rating,
          trend: country.attributes.Goal_14_Trend,
          score: country.attributes.Goal_14_Score,
        };
      case "15":
        return {
          rating: country.attributes.Goal_15_Rating,
          trend: country.attributes.Goal_15_Trend,
          score: country.attributes.Goal_15_Score,
        };
      case "16":
        return {
          rating: country.attributes.Goal_16_Rating,
          trend: country.attributes.Goal_16_Trend,
          score: country.attributes.Goal_16_Score,
        };
      case "17":
        return {
          rating: country.attributes.Goal_17_Rating,
          trend: country.attributes.Goal_17_Trend,
          score: country.attributes.Goal_17_Score,
        };
      // Default case for invalid goal codes
      default:
        return {
          rating: 'N/A',
          trend: 'N/A',
          score: 'N/A',
        };
    }
  }

  // Fetch SDG goals and country data when the component mounts
  useEffect(() => {
    const fetchGoals = async () => {
      try {
        // Fetch SDG goals from the API
        const response = await fetch('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true');
        if (!response.ok) {
          throw new Error('Failed to fetch goals');
        }
        const data = await response.json();
        setGoals(data); // Update state with fetched goals
      } catch (error) {
        console.error('Error fetching goals:', error);
      }
    };

    const fetchDataByCountries = async () => {
      const url = "https://services7.arcgis.com/IyvyFk20mB7Wpc95/arcgis/rest/services/Sustainable_Development_Report_2023_(GOAL_DATA_ONLY)/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";
      try {
        // Fetch country data from the API
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch country data');
        }
        const data = await response.json();
        const features = data.features;

        // Update state with the selected countries' data
        setCountry1(features.find((feature) => feature.attributes.Name === "Finland"));
        setCountry2(features.find((feature) => feature.attributes.Name === "Japan"));
        setCountry3(features.find((feature) => feature.attributes.Name === "France"));
        setCountry4(features.find((feature) => feature.attributes.Name === "Spain"));
        setCountry5(features.find((feature) => feature.attributes.Name === "Ireland"));
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    }

    fetchGoals(); // Fetch goals data
    fetchDataByCountries(); // Fetch country data
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <div>
      <Container>
        <Typography variant="introtext">Here are the 17 sustainable development goals:</Typography>
        {goals.map((goal) => (
          <Card
            key={goal.code} 
            goal={{ code: goal.code, title: goal.title, description: goal.description }}
            /* Pass attributes of each country for the current goal */
            country1={{
              name: country1.attributes.Name,
              rating: getCorrespondingAttributes(country1, goal.code).rating,
              trend: getCorrespondingAttributes(country1, goal.code).trend,
              score: getCorrespondingAttributes(country1, goal.code).score,
            }}
            country2={{
              name: country2.attributes.Name,
              rating: getCorrespondingAttributes(country2, goal.code).rating,
              trend: getCorrespondingAttributes(country2, goal.code).trend,
              score: getCorrespondingAttributes(country2, goal.code).score,
            }}
            country3={{
              name: country3.attributes.Name,
              rating: getCorrespondingAttributes(country3, goal.code).rating,
              trend: getCorrespondingAttributes(country3, goal.code).trend,
              score: getCorrespondingAttributes(country3, goal.code).score,
            }}
            country4={{
              name: country4.attributes.Name,
              rating: getCorrespondingAttributes(country4, goal.code).rating,
              trend: getCorrespondingAttributes(country4, goal.code).trend,
              score: getCorrespondingAttributes(country4, goal.code).score,
            }}
            country5={{
              name: country5.attributes.Name,
              rating: getCorrespondingAttributes(country5, goal.code).rating,
              trend: getCorrespondingAttributes(country5, goal.code).trend,
              score: getCorrespondingAttributes(country5, goal.code).score,
            }}
          />
        ))}
      </Container>
    </div>
  );
}

export default Home;
