"use client"

import Card from '@/components/Card';
import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';

function Home() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true');
        if (!response.ok) {
          throw new Error('Failed to fetch goals');
        }
        const data = await response.json();
        console.dir(data)
        setGoals(data);
      } catch (error) {
        console.error('Error fetching goals:', error);
      }
    };

    fetchGoals();
  }, []); 

  return (
    <div>
      <Container>
        Here are the 17 sustainable development goals:
         {goals.map((goal) => (
          
          <Card key={goal.code} title={goal.title} description={goal.description}/>
        ))} 
      </Container>
    </div>
  );
}

export default Home;
