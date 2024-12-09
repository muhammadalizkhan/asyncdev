'use client'; // Add this at the top of the file

import React, { useState } from 'react';
import './Technology.scss';
import Tabs from '../components/Tabs/Tabs';

export default function Technology() {
  return (
    <section>
      <div className="tech-container">
        <h1>Our Tech Stack</h1>
        <h2>In Different Technologies</h2>
        <p>
          Explore the technologies that power our solutions and witness the innovation firsthand! Here, we showcase our proficiency in a wide range of cutting-edge technologies across various domains of software development.
        </p>
      </div>
    </section>
  );
}