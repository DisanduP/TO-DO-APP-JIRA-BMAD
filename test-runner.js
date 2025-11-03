// Lightweight Node-only tests for the minimal todo logic without DOM dependency

function createTodoModule() {
  let tasks = [];
  return {
    getTasks: () => tasks,
    add: (t) => { tasks.push({ text: t, done: false }); },
    toggle: (i) => { if (tasks[i]) tasks[i].done = !tasks[i].done; },
    clear: () => { tasks = []; }
  };
}

function run() {
  const mod = createTodoModule();

  // Test 1: add task
  mod.clear();
  mod.add('Task A');
  const tasks1 = mod.getTasks();
  console.log('after add:', tasks1.length === 1 ? 'PASS' : 'FAIL', tasks1);

  // Test 2: toggle
  mod.toggle(0);
  const tasks2 = mod.getTasks();
  console.log('after toggle:', tasks2[0].done === true ? 'PASS' : 'FAIL', tasks2);

  // Test 3: clear
  mod.add('Task B');
  mod.clear();
  const tasks3 = mod.getTasks();
  console.log('after clear:', tasks3.length === 0 ? 'PASS' : 'FAIL', tasks3);
}

try { run(); } catch (e) { console.error(e); process.exit(1); }
