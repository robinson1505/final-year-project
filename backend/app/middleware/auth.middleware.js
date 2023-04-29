import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config("../../../.env");

const authMiddleware = {
  async requestDidStart(requestContext) {
    if (!requestContext.context) {
      return;
    }
    const { headers } = requestContext.context.req;

    if (!headers || !headers.authorization) {
      console.log(headers)
      return;
    }
    const token = req.headers.authorization.replace("Bearer", "");

    if (token) {
      try {
        const decode = jwt.verify(token, process.env.SECRET);
        requestContext.context.user = decode.user;
      } catch (error) {
        throw new Error("Invalid token");
      }
    }
    return {
      didResolveOperation({}, {}, {}, { user }) {
        if (!user) {
          throw new Error("Authentication required");
        }
      },
      async didEncounterError(errors) {
        const authError = errors.find(
          error =>
            error.originalError instanceof Error &&
            error.originalError.message === "Authentication required"
        );
        if (authError) {
          throw authError;
        }
      }
    };
  }
};

export default authMiddleware;
