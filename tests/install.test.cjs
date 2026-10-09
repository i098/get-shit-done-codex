const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const installer = path.join(root, "bin", "install.js");
const { version } = require(path.join(root, "package.json"));

function run(...args) {
  const result = spawnSync(process.execPath, [installer, ...args, "--no-version-check"], { encoding: "utf8" });
  assert.strictEqual(result.status, 0, result.stdout + result.stderr);
}

test("installs into a directory and passes its own integrity check", (t) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "gsd-install-"));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));

  run("--path", dir);
  run("--verify", "--path", dir);

  const [installed] = fs.readFileSync(path.join(dir, "get-shit-done", "VERSION"), "utf8").split("\n");
  assert.strictEqual(installed, version);
});
