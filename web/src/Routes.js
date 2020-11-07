import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/search" page={SearchPage} name="search" />
      <Route path="/{category}/{slug}" page={PostPage} name="post" />
      <Route path="/{slug}" page={CategoryPage} name="category" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
