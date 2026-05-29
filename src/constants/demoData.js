let DEMO_DB = [];

export function getDemoDb() {
  return [...DEMO_DB];
}

export function addDemoRegistration(registration) {
  DEMO_DB = [registration, ...DEMO_DB];
  return [...DEMO_DB];
}

export function deleteDemoRegistration(id) {
  DEMO_DB = DEMO_DB.filter((item) => item.id !== id);
  return [...DEMO_DB];
}

export function approveDemoRegistration(id) {
  DEMO_DB = DEMO_DB.map((item) =>
    item.id === id ? { ...item, competitionAllowed: true } : item,
  );
  return [...DEMO_DB];
}
