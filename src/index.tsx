import './i18n';
import App from './App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.querySelector('#root');

if (!rootElement) throw new Error('Missing root');

const root = createRoot(rootElement);

if (window.localStorage.getItem("isLogin") !== "0") {
  let account = "";
  const setAccount = (e: string) => {
    account = e;
  };
  let password = "";
  const setPassword = (e: string) => {
    password = e;
  };

  const saveToken = () => {
    console.log("save");
    window.localStorage.setItem("isLogin", "0");
    window.location.href = "/";
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    // simpe auth
    if (account === "test" && password === "test") {
      saveToken();
    } else {
      alert("Invalid account or password!");
    }
    e.preventDefault();
  };
  root.render(
    <>
      <main>
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Account:</p>
              <input type="text" onChange={e => setAccount(e.target.value)} />
            </label>
            <label>
              <p>Password:</p>
              <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <p>
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
      </main>
    </>
  );
} else {
  root.render(
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
}
