import path from "node:path"
import { exec } from "node:child_process";
import { promisify } from "node:util";


try {

  const promiseExec = promisify(exec);
  const { stdout, stderr } = await promiseExec("kitten @ get-text -m neighbor:right");
  if (stderr) {
    throw new Error();
  }
  const lines = stdout.split("\n");

  const last = lines[lines.length - 2].split(" ")[4];
  console.log(path.dirname(last));
} catch (_) {
  console.log("");
}



