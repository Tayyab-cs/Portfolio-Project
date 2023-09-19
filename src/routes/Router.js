import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, About, TechStack, Projects } from '../pages/index';

export default function Router() {
  return (
    <Routes>
      <Route path="/home" exact Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/techStack" Component={TechStack} />
      <Route path="/projects" Component={Projects} />
    </Routes>
  );
}
