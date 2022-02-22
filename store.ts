import {
  Persiston,
  FileAdapter,
} from "https://raw.githubusercontent.com/varHarrie/persiston/master/mod.ts";
import config from "./config.ts";
import { User } from "./models.ts";
import { resolvePath } from "./utils/fs.ts";

class Store extends Persiston {
  users = this.collection<User>("users");
}

const adapter = new FileAdapter(resolvePath(config.storeFile));

export default new Store({
  adapter,
  getInitialData: () => {
    return {
      users: [{ username: "admin", password: "" }],
    };
  },
});