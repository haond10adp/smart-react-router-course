import React from 'react';
import './App.scss';

const App = () => {
  return <div>App Component</div>;
};

// const App = () => (
//   <BrowserRouter>
//     <div className='app'>
//       <Switch>
//         <Route path='/auth' component={UnauthorizedLayout} />
//         <Route path='/' component={AuthorizedLayout} />
//       </Switch>
//     </div>
//   </BrowserRouter>
// );

// const AuthorizedLayout = () => (
//   <div className='authorized-layout'>
//     <header>
//       <Link to='/dashboard'>Dashboard</Link>
//       <Link to='/products'>Products</Link>
//       <Link to='/auth'>Logout</Link>
//     </header>
//     <div className='content'>
//       <Switch>
//         <Route path='/dashboard' component={DashboardLayout} />
//         <Route path='/products' component={ProductsLayout} />
//       </Switch>
//     </div>
//     <footer />
//   </div>
// );

// const UnauthorizedLayout = () => (
//   <div className='unauthorized-layout'>
//     <main>
//       <Link to='/'>Login</Link>
//     </main>
//   </div>
// );

// const DashboardLayout = () => (
//   <div className='dashboard-layout'>
//     <aside />
//     <div className='content'>
//       <nav>
//         <Link to='/dashboard/settings'>Settings</Link>
//         <Link to='/dashboard/search'>Search</Link>
//       </nav>
//       <main>
//         <Switch>
//           <Route path='/dashboard/settings' component={SettingsPage} />
//           <Route path='/dashboard/search' component={SearchResultsPage} />
//           <Route component={NotFound} />
//         </Switch>
//       </main>
//     </div>
//   </div>
// );

// const ProductsLayout = () => (
//   <div className='products-layout'>
//     <main>
//       <div />
//       <div />
//       <div />
//       <div />
//       <div />
//     </main>
//   </div>
// );

// const SettingsPage = () => (
//   <div className='settings-page'>
//     <div />
//     <div />
//   </div>
// );

// const SearchResultsPage = () => (
//   <div className='search-results-page'>
//     <div />
//     <div />
//     <div />
//   </div>
// );

export default App;
