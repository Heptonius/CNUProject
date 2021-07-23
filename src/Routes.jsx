import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ApiTestPage } from './pages/ApiTestPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import RecipeDetailEditPage from './pages/RecipeDetailEditPage';
import NewRecipePage from './pages/NewRecipePage';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={RecipeListPage} />
      <Route path="/recept/:slug/upravit" component={RecipeDetailEditPage} />
      <Route path="/recept/:slug" component={RecipeDetailPage} />
      <Route path="/novy-recept/" component={NewRecipePage} />
      <Route path="/api-test" component={ApiTestPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
