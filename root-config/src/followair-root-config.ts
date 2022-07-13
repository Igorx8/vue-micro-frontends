import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@teste/navbar",
  app: () => System.import("@teste/navbar"),
  activeWhen: () => true
});

registerApplication({
  name: "@teste/app1",
  app: () => System.import("@teste/app1"),
  activeWhen: ["/app1"]
})

registerApplication({
  name: "@teste/app2",
  app: () => System.import("@teste/app2"),
  activeWhen: ["/app2"]
})


start({
  urlRerouteOnly: true,
});
