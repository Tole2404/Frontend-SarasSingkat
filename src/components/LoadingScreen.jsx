import "../styles/css/LoadingScreen.css";

const LoadingScreen = ({ isLoading, children }) => {
  return (
    <div className="content-with-loading">
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
      {children}
    </div>
  );
};

export default LoadingScreen;
