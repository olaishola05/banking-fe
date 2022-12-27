import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NewAccount from './components/admin/NewAccount';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Error from './components/Error';
import Home from './components/Home/Home';
import Layout from './components/Layouts/Layout';
import Success from './components/transacts/Success';
import CreateNewTransaction from './components/transacts/Transactions';
import { User } from './types/appTypes';

function App() {
  const { token, role }: User = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/signup" element=<Signup /> />
            <Route path="/login" element=<Login /> />

            {token ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path='/new-transactions' element={<CreateNewTransaction />} />
                <Route path='/success' element={<Success />} />

                {role === 'admin' && (
                  <>
                    <Route path='/accounts/new-account' element={<NewAccount />} />
                  </>
                )}
              </>
            ) : ('')}

            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
