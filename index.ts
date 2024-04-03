import Server from "./class/server";
import ServerLink from "./src";

const server = Server.instance
new ServerLink(server.app)
server.start()