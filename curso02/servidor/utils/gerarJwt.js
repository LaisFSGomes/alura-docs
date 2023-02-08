import jwt from "jsonwebtoken";
import "dotenv/config.js";

function gerarJwt(payload) {
  const tokenJwt = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return tokenJwt;
}
export { gerarJwt };
