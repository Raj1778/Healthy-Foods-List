const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 ? <h3>No food items found</h3> : null}</>;
};

export default ErrorMessage;
