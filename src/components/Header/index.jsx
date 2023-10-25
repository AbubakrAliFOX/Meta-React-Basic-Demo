const styless = {
  fontWeight: "40px",
  color: "grey",
  border: "2px solid black",
  padding: "9px",
};

const Header = ({ name }) => (
  <h1 style={styless}>Hello, {name}</h1>
);

export default Header;
