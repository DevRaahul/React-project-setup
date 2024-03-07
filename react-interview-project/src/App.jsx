import GlobalContextProvider from "./context/GlobalContext";
import ErrorBoundary from "./error-boundary/ErrorBoundary";
import AppRoute from "./routes/AppRoute";

function App() {
  return (
    <>
      <ErrorBoundary>
        <GlobalContextProvider>
          <AppRoute />
        </GlobalContextProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
