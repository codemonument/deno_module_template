import {} from "@mod";
import * as log from "$std/log/mod.ts";

try {
  log.info(
    `Your module is currently empty! Add some code to the lib folder and export it in mod.ts!`,
  );
} catch (error) {
  console.error(error);
  Deno.exit();
}
