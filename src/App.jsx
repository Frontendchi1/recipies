import React from 'react';
import Header from './components/Home';

import RecipeList from './components/ResipeList';

function App() {
  return (
    <div  className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      
      <Header />
      <div className="container mx-auto p-4">
                <RecipeList />
      </div>
    </div>
  );
}

export default App;
