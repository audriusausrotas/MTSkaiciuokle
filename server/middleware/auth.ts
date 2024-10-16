import jwt from "jsonwebtoken";

export default defineEventHandler(async (event: any) => {
    const url = event.node.req.url;
    const config = useRuntimeConfig();

  if (
    event.node.req.url.includes("auth") ||
    event.node.req.url.includes("userChanges") ||
    event.node.req.url.includes("profile") ||
    event.node.req.url.includes("mail")
  ) {
    const body = await readBody(event);
    const token = getCookie(event, "mtud");

    if (token) {
      jwt.verify(token, config.tokenSecret as string, (err: any, user: any) => {
        if (!err && user.verified) {
          body._id = user.id;
        }
      });
    }
  }
});

