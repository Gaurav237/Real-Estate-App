import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  // If there is no token
  if (!token) {
    return res.status(401).json({ message: "Not Authorized!" });
  }

  // Verify the token using the JWT_SECRET_KEY
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
    // If there is an error during verification
    if (err) {
      return res.status(403).json({ message: "Token is not valid!" });
    }
    // the decrypted user-ID is extracted from payload and added to the req object
    req.userId = payload.id;
    next();
  });
};
