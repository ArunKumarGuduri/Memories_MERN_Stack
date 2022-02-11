import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        // check for custom login / google login token
        const isCustomAuth = token.length < 500;
        let decodedData;
        if (isCustomAuth && token) {
            decodedData = jwt.verify(token, 'test');
            req.userId = decodedData.id;
        } else {
            // this is case if user login from google
            decodedData = jwt.decode(token);
            req.userId = decodedData.sub;
        }
        next();

    } catch (error) {
        console.log(error);
    }
}
export default auth;